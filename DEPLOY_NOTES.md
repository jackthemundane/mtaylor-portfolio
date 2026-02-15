Gettin things to work on local:
http://localhost:5173/
from server node index.js
from client npm run dev

ssh mike@blackbox


Dev deploy

cd /var/www/dev && git pull

cd client && npm ci && npm run build

(serve dev from /var/www/dev/client/dist or rsync to a dev web root)

Prod deploy

rsync -a --delete /var/www/dev/client/dist/ /var/www/html/

nginx -t && systemctl reload nginx

Notes from ChatGPT
What you set up (end state)

Local machine: you develop + test with Vite dev server.

GitHub repo: source of truth.

Blackbox server:

Staging (dev) serves dev.mtaylor.design from:
/var/www/dev/client/dist

Production (prod) serves mtaylor.design from:
/var/www/html

Cloudflare Tunnel routes hostnames to your server.

Nginx serves the static site for both hosts.

The workflow you validated

Make changes locally

git add/commit + git push to GitHub

SSH into blackbox

In /var/www/dev do git pull

Build the client in /var/www/dev/client (Vite outputs to dist/)

Confirm dev is serving the new build

“Release to prod” by copying the build output to /var/www/html (manual rsync or script)

Reload nginx

Confirm prod is serving the released build

Problems you hit and how you solved them
1) Vite build failed with EACCES: permission denied, rmdir ... dist/assets

Cause: dist/ (or dist/assets) was owned by www-data (or root) from a previous copy/deploy, but you were building as user mike. Vite tries to delete/recreate dist, and can’t.

Fix you used:

Ensure build output directory is writable by the build user (or run build as the owning user, but don’t).

You effectively resolved it by getting ownership/permissions consistent again.

Rule going forward:

Pick ONE owner for build folders in /var/www/dev (usually your user) and keep it consistent.

2) Dev and prod looked the same, and you weren’t sure if staging separation was real

Cause: both were serving identical content at that moment because you had copied the same build to both places, or they contained the same index.html.

How you proved the split is real:

You verified nginx config had different root for dev vs prod.

You hashed served output via curl + host header to confirm whether bytes matched.

Key concept:

Different roots ≠ different content automatically.
They only differ when you change one without deploying to the other.

3) /tech returned 404 in some cases

Cause: This is typical static hosting behaviour:

If nginx is only serving static files and you don’t have a “SPA fallback”, /tech must exist as a real file/folder, or nginx returns 404.

For SPAs you usually want fallback to index.html for non-file routes.

What you had:

A try_files $uri $uri/ =404; style config (no SPA fallback).

If you want /tech to work as a client-side route:

Change to something like:

try_files $uri $uri/ /index.html;
But only do that if this is a single-page app with client routing. If /tech is a real directory/page, then keep it strict.

4) Confusion about git push saying “Everything up-to-date”

Cause: you hadn’t committed the changes yet. git push only pushes commits. Uncommitted/staged changes don’t go anywhere.

Fix:

git add → git commit → git push

You also saw untracked stuff you probably didn’t mean to ship (good catch).

5) You got stuck inside diff

Cause: git diffs open in a pager (usually less).

Exit:

Press q.

6) Nginx warning: “conflicting server name dev.mtaylor.design … ignored”

Meaning: You have two server blocks that claim the same server_name on the same listen address/port. Nginx will ignore one of them.

Why it matters:

It can silently cause dev to serve the wrong root, depending on which block “wins”.

What to do next time:

Search for duplicates and remove/disable the extra one.

This is one of the few things worth fixing sooner rather than later.

Troubleshooting checklist (copy/paste mental model)
A) “Am I hitting the right vhost?”

Use host header against localhost:

curl -sI -H "Host: dev.mtaylor.design" http://127.0.0.1/

curl -sI -H "Host: mtaylor.design" http://127.0.0.1/

B) “Is dev/prod serving different bytes?”

Hash the served HTML:

compare curl -s -H "Host: X" http://127.0.0.1/ | sha256sum

C) “Is nginx pointing to the right roots?”

Check the active config and symlinks:

/etc/nginx/sites-enabled/* → /etc/nginx/sites-available/*

Confirm server_name and root lines.

D) “Build fails with permission errors”

Check ownership of the build output:

ls -la dist dist/assets

Fix ownership so the build user can delete/recreate:

chown -R mike:mike /var/www/dev/client

E) “Prod updated when I didn’t mean to”

Remember: prod is just whatever is in /var/www/html.

If you copy there, you deployed. No magic.

What’s worth improving later (when you’re ready)

Fix the duplicate server_name warning (this is the one I’d prioritise).

Put the deploy into a single script (you did this: deploy_prod.sh).

Consider SPA fallback if you want clean routes like /tech without actual files.

If you want, paste your deploy_prod.sh here and I’ll help you turn it into something solid + safe (e.g., refuses to deploy unless dev build exists, prints hashes, etc.).