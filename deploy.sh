#!/usr/bin/env sh

set -e

current_git_branch_log=`git log --format='[%cd - %cn]%s %h' -1`

echo "$current_git_branch_log"

npm run build

cd dist

git init
git add -A
git commit -m "$current_git_branch_log"

git push -f https://${Github_Access_Token}@github.com/jweboy/backstage-manage.git master:gh-pages

cd -