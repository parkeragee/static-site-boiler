### Getting started
- `git clone https://github.com/parkeragee/static-site-boiler.git mysite` // clone the project
- `cd mysite` // move into the new directory
- `rm -rf .git` // clear the git history
- `nvm use` // use the correct version of Node
- `npm install` // install dependencies

### Development mode
- `grunt`
- Open [http://localhost:8000/](http://localhost:8000/)

### Build & deploy the website
- Create a [Surge](http://surge.sh/) account
- Add your domain name to the [deploy script](https://github.com/parkeragee/static-site-boiler/blob/master/package.json#L8)
- `npm run deploy`