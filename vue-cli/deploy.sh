#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://viaduct12.github.io
# git push -f git@github.com:viaduct12/vidaduct12.github.io.git master

# if you are deploying to https://viaduct12.github.io/project1
git push -f git@github.com:viaduct12/project1.git master:gh-pages

cd -