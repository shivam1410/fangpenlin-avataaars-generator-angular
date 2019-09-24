# fangpenlin-avataaars-generator-angular

![alt text](https://raw.githubusercontent.com/shivam1410/fangpenlin-avataaars-generator-angular/master/src/assets/meta.png)

Angular implementation of @fangpenlin's avataaars-generator

## About

I tried to replicate the @fangpenlin's React based avatar generator in Angular version 6.<br>
This project is just for self practice in angular.<br>
People are welcomed to use, contribute, and share.<br>
The `master` branch contains all the angular code.<br>
and `gh-pages` branch contains the build files. 
## Hosting

I have used free hosting provided by github, under the name github-pages.<br>
[Avatar-Genrator](https://shivam1410.github.io/fangpenlin-avataaars-generator-angular/ "Create cool avatar")

## CI

Used Github Action for continuous integration. Running the CI server on node v10.x provided by Github Actions.
### Screenshots

![alt text](https://raw.githubusercontent.com/shivam1410/fangpenlin-avataaars-generator-angular/master/src/assets/Screenshot_CI.jpg)

```name: Node CI

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [10.x]

    steps:
    - uses: actions/checkout@v1
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}
    - name: npm install, build, and test
      run: |
        npm install
        npm install -g angular-cli-ghpages
        npm run ng -- build --base-href https://shivam1410.github.io/fangpenlin-avataaars-generator-angular/
        ls dist/f-a-g-a/
      env :
        CI: true
    - name: deploying to github pages
      uses: peaceiris/actions-gh-pages@v2.3.2
      env :
        ACTIONS_DEPLOY_KEY: ${{ secrets.ACTION_DEPLOY_KEY }}
        PUBLISH_BRANCH: gh-pages
        PUBLISH_DIR: ./dist/f-a-g-a/```

##

open to contributions.
