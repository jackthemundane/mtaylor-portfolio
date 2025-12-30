http://localhost:5173/

Dev deploy

cd /var/www/dev && git pull

cd client && npm ci && npm run build

(serve dev from /var/www/dev/client/dist or rsync to a dev web root)

Prod deploy

rsync -a --delete /var/www/dev/client/dist/ /var/www/html/

nginx -t && systemctl reload nginx

from server node index.js
from client npm run dev