#!/usr/bin/env sh

# abort on errors
set -e

git pull
git add -A
git commit -m "feature: github action 자동배포"
git push origin main

# build
npm run build
# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy with vuepress script'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:dongjay00/jay-templar-archives.git main:gh-pages

cd -