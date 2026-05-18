#!/usr/bin/env bash
# Deploy dx-website to rax0.de:~/dx via rsync, then (re)start its docker compose.
# Pattern mirrors ~/disease-db on the same host (node:20-alpine + traefik).
set -euo pipefail

HOST="tom@rax0.de"
REMOTE_DIR="~/dx"
LOCAL_DIR="$(cd "$(dirname "$0")/.." && pwd)"

cd "$LOCAL_DIR"

echo "==> Building locally"
npm run build

echo "==> Rsync to ${HOST}:${REMOTE_DIR}"
rsync -az --delete \
  --exclude='.git/' \
  --exclude='node_modules/' \
  --exclude='.DS_Store' \
  --exclude='scripts/ssh.sh' \
  ./ "${HOST}:${REMOTE_DIR}/"

echo "==> docker compose up -d --build on remote"
ssh "${HOST}" "cd ${REMOTE_DIR} && docker compose up -d --build"

echo "==> Done. https://dx.rax0.de"
