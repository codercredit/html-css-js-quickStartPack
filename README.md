# InsightTheme HTML CSS Starter

### Themeforest

Visit: https://themeforest.net/user/insighttheme

### HTML ctarter template development with Gulp,Sass &amp; Nunjucks

Easily modify multiple HTML files from one place.  
Use this guide as a way to quickly start any new project.

---

- [Getting Started / Installation](#getting-started-installation)
- [Usage](#usage)
- [Production](#production)
- [Structure](#structure)
- [List of packages used](#list-of-packages-used)
- [Need help?](#need-help)
- [Nunjucks](#nunjucks)

---

## Getting Started / Installation

### Install dependencies:

```
npm i or yarn
```

## Usage

```
npm run watch or yarn run watch
```

This task copies all the files necessary for the project to the "dev" directory and will start a new server, open up a browser and watch for any SCSS, JS, PHP changes; once it compiles those changes, the browser will automatically reload page with injected the changes!

## Production

```
npm run build or yarn run build
```

Copies all the files necessary for the project to the "dist" directory. Before copy compiles SCSS to CSS & add vendor prefixes.

## Structure

The src directory contains development code.  
Compiled code for production can be found in the dist directory. (dist directory will be automatically created after running the command '`npm run build `' )

```
.
├── app/
|   ├── index.html
|   ├── assets/
|   |   ├── bootstrap/
|   |   ├── ...
|   |   └── jQuery
|   ├── data/
|   |   └── data.json
|   ├── images/
|   ├── js/
|   |   └── custom.js
|   ├── php/
|   ├── scss/
|   |   ├── helpers/_media-query.scss
|   |   ├── helpers/_mixins.scss
|   |   ├── helpers/_variables.scss
|   |   ├── main.scss
|   └── templates/
|       ├── template.html
|
├── dev/
|   ├── index.html
|   ├── assets/
|   ├── css/
|   ├── js/
|   └── img/
|
└── dist/
    ├── index.html
    ├── ...
    ├── about.html
    ├── assets/
    ├── css/
    ├── js/
    └── img/
```

## List of packages used:

#### for development theme:

[browser-sync](https://github.com/BrowserSync/browser-sync), [del](https://github.com/sindresorhus/del), [gulp](https://github.com/gulpjs/gulp),
[gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer), [gulp-beautify-code](https://github.com/legostaev-vadim/gulp-beautify-code), [gulp-changed](https://github.com/sindresorhus/gulp-changed), [gulp-clean-css](https://github.com/scniro/gulp-clean-css), [gulp-concat](https://github.com/gulp-community/gulp-concat), [gulp-csso](https://github.com/ben-eb/gulp-csso), [gulp-data](https://github.com/colynb/gulp-data), [gulp-if](https://github.com/robrich/gulp-if), [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin), [gulp-line-ending-corrector](https://github.com/iShafayet/gulp-line-ending-corrector), [gulp-notify](https://github.com/mikaelbr/gulp-notify), [gulp-nunjucks](https://github.com/sindresorhus/gulp-nunjucks), [gulp-plumber](https://github.com/floatdrop/gulp-plumber), [gulp-purgecss](https://github.com/FullHuman/gulp-purgecss), [gulp-rename](https://github.com/hparra/gulp-rename), [gulp-sass](https://github.com/dlmanning/gulp-sass), [gulp-sourcemaps](https://github.com/gulp-sourcemaps/gulp-sourcemaps), [gulp-uglify](https://github.com/terinjokes/gulp-uglify), [gulp-nunjucks-render](https://github.com/carlosl/gulp-nunjucks-render), [minimist](https://github.com/substack/minimist).

Nunjucks by Mozilla official project: https://mozilla.github.io/nunjucks/

## Need help?

Feel free to [create an issue](https://github.com/codercredit/html-css-js-quickStartPack/issues), [facebook me](https://www.facebook.com/webcodermehadi), or [send me an email](mailto:webcodermehadi@gmail.com). I'd be glad to help where I can!

## License

[MIT](http://opensource.org/licenses/MIT)
Copyright (c) 2021 [codercredit]

## Nunjucks
