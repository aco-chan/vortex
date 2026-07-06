#!/bin/zsh
set -e

cd "$(dirname "$0")"

echo "きもちの絵本: /docs 移動分をGitHubへ保存します。"
echo

git add README.md docs/index.html docs/styles.css docs/script.js push-docs.command

if git diff --cached --quiet; then
  echo "保存する変更はありません。"
else
  git commit -m "Move site files to docs for Pages"
fi

git push

echo
echo "完了しました。GitHub Pages は少し待ってから反映されます。"
echo "https://aco-chan.github.io/vortex/"
echo
echo "この画面は閉じて大丈夫です。"
read -r "?Enterキーで閉じます。"
