#!/usr/bin/env bash
# Deploy dx-website to rax0.de:~/dx via rsync, then (re)start its docker compose.
# Pattern mirrors ~/disease-db on the same host (node:20-alpine + traefik).
# Serves https://zebriss.de (primary) and https://dx.rax0.de (legacy).
set -euo pipefail

HOST="tom@rax0.de"
REMOTE_DIR="~/dx"
LOCAL_DIR="$(cd "$(dirname "$0")/.." && pwd)"

cd "$LOCAL_DIR"

echo "==> Building locally"
npm run build

echo "==> Rsync to ${HOST}:${REMOTE_DIR}"
# Excluded on purpose:
#   data/ secrets/  – bind mounts of the *other* compose project (backoffice/py) that also lives in ~/dx
#   data.db*        – local analytics DB; production uses the website_state volume
rsync -az --delete \
  --exclude='.git/' \
  --exclude='node_modules/' \
  --exclude='.DS_Store' \
  --exclude='scripts/ssh.sh' \
  --exclude='data/' \
  --exclude='secrets/' \
  --exclude='data.db*' \
  ./ "${HOST}:${REMOTE_DIR}/"

echo "==> docker compose up -d --build on remote"
ssh "${HOST}" "cd ${REMOTE_DIR} && docker compose up -d --build app"

echo "==> Done. https://zebriss.de  (legacy: https://dx.rax0.de)"
