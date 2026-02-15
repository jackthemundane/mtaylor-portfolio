#!/usr/bin/env bash
set -euo pipefail

# make_chatgpt_zip.sh (Windows/Git Bash safe)
# - Collects "shareable" source/config/docs files
# - Excludes node_modules, build outputs, .git, secrets
# - Zips using PowerShell Compress-Archive (no zip utility required)
# Output: _share/<repo>_chatgpt_<timestamp>.zip

# -------- repo root --------
if command -v git >/dev/null 2>&1 && git rev-parse --show-toplevel >/dev/null 2>&1; then
  REPO_ROOT="$(git rev-parse --show-toplevel)"
else
  REPO_ROOT="$(pwd)"
fi

REPO_NAME="$(basename "$REPO_ROOT")"
OUT_DIR="$REPO_ROOT/_share"
mkdir -p "$OUT_DIR"

# Get the name of THIS script to avoid file-locking issues on Windows
SCRIPT_NAME="$(basename "$0")"

TS="$(date +"%Y-%m-%d_%H-%M-%S")"
OUT_ZIP="$OUT_DIR/${REPO_NAME}_chatgpt_${TS}.zip"

echo "Creating: $OUT_ZIP"
echo "Repo root: $REPO_ROOT"

# -------- temp files --------
TMP_DIR="$(mktemp -d)"
ALL_LIST="$TMP_DIR/all.txt"
KEEP_LIST="$TMP_DIR/keep.txt"
PS_SCRIPT="$TMP_DIR/compress.ps1"

cleanup() { rm -rf "$TMP_DIR" 2>/dev/null || true; }
trap cleanup EXIT

# -------- gather files (tracked + untracked, not ignored) --------
if command -v git >/dev/null 2>&1 && git -C "$REPO_ROOT" rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  (cd "$REPO_ROOT" && git ls-files) > "$ALL_LIST"
  (cd "$REPO_ROOT" && git ls-files --others --exclude-standard) >> "$ALL_LIST"
else
  (cd "$REPO_ROOT" && find . -type f | sed 's|^\./||') > "$ALL_LIST"
fi

# -------- filter allowlist/denylist in pure bash --------
: > "$KEEP_LIST"

while IFS= read -r f; do
  [[ -z "${f:-}" ]] && continue
  f="${f#./}"

  # DENY: folders / build artifacts
  case "$f" in
    .git/*|*/.git/*) continue ;;
    node_modules/*|*/node_modules/*) continue ;;
    dist/*|*/dist/*) continue ;;
    build/*|*/build/*) continue ;;
    coverage/*|*/coverage/*) continue ;;
    .next/*|*/.next/*) continue ;;
    out/*|*/out/*) continue ;;
    .cache/*|*/.cache/*) continue ;;
    tmp/*|*/tmp/*|temp/*|*/temp/*) continue ;;
    logs/*|*/logs/*|log/*|*/log/*) continue ;;
  esac

  base="$(basename "$f")"

  # FIX: Skip this script itself to avoid Windows file-locking "PermissionDenied" errors
  if [[ "$base" == "$SCRIPT_NAME" ]]; then
    continue
  fi

  # DENY: secrets (.env etc) — keep only .env.example
  if [[ "$base" == ".env" || "$base" == .env.* ]]; then
    [[ "$base" == ".env.example" ]] || continue
  fi

  allow=0

  # ALLOW by extension (source/config/docs)
  case "$f" in
    *.js|*.jsx|*.ts|*.tsx|*.json|*.md|*.markdown|*.txt|*.html|*.css|*.scss|*.sass|*.yml|*.yaml|*.toml|*.sh|*.ps1)
      allow=1
      ;;
  esac

  # ALLOW common config filenames with no/odd extensions
  if [[ "$allow" -eq 0 ]]; then
    case "$base" in
      Dockerfile|Makefile|Procfile|\
      README|README.*|LICENSE|LICENSE.*|\
      .gitignore|.gitattributes|.editorconfig|\
      package.json|package-lock.json|pnpm-lock.yaml|yarn.lock|\
      vite.config.*|tailwind.config.*|postcss.config.*|\
      tsconfig.json|tsconfig.*.json)
        allow=1
        ;;
    esac
  fi

  if [[ "$allow" -eq 1 ]]; then
    printf '%s\n' "$f" >> "$KEEP_LIST"
  fi
done < "$ALL_LIST"

# de-dupe
sort -u "$KEEP_LIST" -o "$KEEP_LIST"

COUNT="$(wc -l < "$KEEP_LIST" | tr -d ' ')"
echo "Files selected: $COUNT"

if [[ "$COUNT" == "0" ]]; then
  echo "Nothing matched. If this is unexpected, tell me and I'll tune the filters."
  exit 1
fi

# -------- zip using PowerShell --------
if ! command -v powershell.exe >/dev/null 2>&1; then
  echo "Error: powershell.exe not found. (On Windows it should exist.)"
  exit 1
fi

# Convert paths for PowerShell
OUT_ZIP_WIN="$(cygpath -w "$OUT_ZIP")"
REPO_ROOT_WIN="$(cygpath -w "$REPO_ROOT")"
KEEP_LIST_WIN="$(cygpath -w "$KEEP_LIST")"

# Write a tiny PS script with LF endings
printf '%s\n' \
'param([string]$RepoRoot,[string]$ListFile,[string]$OutZip)' \
'$ErrorActionPreference="Stop"' \
'$files = Get-Content $ListFile | Where-Object { $_ -and $_.Trim() -ne "" } | ForEach-Object { Join-Path $RepoRoot $_ }' \
'if (Test-Path $OutZip) { Remove-Item -Force $OutZip }' \
'Compress-Archive -Force -Path $files -DestinationPath $OutZip' \
> "$PS_SCRIPT"

powershell.exe -NoProfile -ExecutionPolicy Bypass -File "$(cygpath -w "$PS_SCRIPT")" "$REPO_ROOT_WIN" "$KEEP_LIST_WIN" "$OUT_ZIP_WIN"

echo "Done."
echo "Archive: $OUT_ZIP"
ls -lh "$OUT_ZIP" 2>/dev/null || true