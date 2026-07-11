#!/bin/zsh
set -e

cd "$(dirname "$0")"

echo "きもちの絵本: 変更分をGitHubへ保存します。"
echo

git add README.md CHANGELOG.md docs/index.html docs/styles.css docs/script.js push-docs.command .gitignore

visible_version="$(grep -Eo 'const APP_VERSION = "v[0-9]+\.[0-9]+\.[0-9]+"' docs/script.js | sed -E 's/.*"(v[0-9]+\.[0-9]+\.[0-9]+)".*/\1/' | head -n 1)"
latest_version="$(awk '/^## v/{ print $2; exit }' CHANGELOG.md 2>/dev/null || true)"

if [ -n "$visible_version" ] && [ -n "$latest_version" ] && [ "$visible_version" != "$latest_version" ]; then
  echo "APP_VERSIONとCHANGELOGの最新バージョンが違います。"
  echo "APP_VERSION: $visible_version"
  echo "CHANGELOG: $latest_version"
  echo "どちらかを直してから、もう一度実行してください。"
  read -r "?Enterキーで閉じます。"
  exit 1
fi

if [ -z "$latest_version" ]; then
  commit_message="Update site"
else
  commit_message="Release ${latest_version}"
fi

if git diff --cached --quiet; then
  echo "保存する変更はありません。"
else
  git commit -m "$commit_message"
fi

git push

echo
echo "完了しました。GitHub Pages は少し待ってから反映されます。"
echo "https://aco-chan.github.io/vortex/"
echo
echo "この画面は閉じて大丈夫です。"
read -r "?Enterキーで閉じます。"
