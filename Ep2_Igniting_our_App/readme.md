* 
* to initilize an app to use npm packages use command "npm init"
* Package.json is a configration file for npm , it keep track of all the packages in an app
* most important package is the Bundler
* Bundler (webpack, parcel, vite) is used to bundle the app (html, css, js) so it can be shipped to production.
* to install any package use command "npm install -D(only for dev dependency) package_name" : npm install -D parcel
* there are two types of dependencies - 1.normal dependency 2.dev dependency
* Dev dependency - Generally required for devlopment phase, not in production
* Normal dependency - these are used in production
* "parcel": "^2.15.4" : ^ (caret) it means when a new minor version of a package is comming then it automatically update, (only Update MINOR Versions)
* "parcel": "~2.15.4" : ~ (tilde) it means when a new major version of a package is comming then it automatically update, (only Update MOJOR Versions)
* package.json - keep track of "approx" version 
* package-lock.json : keep track of "exact" version when a particular package is installed at that time
* node modules - this is all the code that we fetch from npm 
* should we put these node modules to production or to git -  NO, best is put these node module to .gitignore
* .gitignore - if you want some files not go on to production or git just put inside git ignore eg: /node_modules
* should we put package and package-lock files on to git ? YES, because these files maintain what are all dependencies project needs, 

