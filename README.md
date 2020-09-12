# Wilco

Visual components

[![Build Status](https://travis-ci.org/InseeFr/Wilco.svg?branch=master)](https://travis-ci.org/inseefr/wilco)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=InseeFr_Wilco&metric=coverage)](https://sonarcloud.io/dashboard?id=InseeFr_Wilco)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=InseeFr_Wilco&metric=alert_status)](https://sonarcloud.io/dashboard?id=InseeFr_Wilco)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

[Storybook](https://inseefr.github.io/Wilco/storybook) is available online.

## Using Wilco into your project

If you want to add the module into your own project, you should first install it via NPM or yarn

```shell
npm i @inseefr/wilco bootstrap@3.4.1
```

Then, you need to include the CSS stylesheet of `bootstrap` and the CSS stylesheet of this module.

```javascript
import 'bootstrap/dist/css/bootstrap.css';
import '@inseefr/wilco/dist/index.css';
```

## How to improve Wilco

If you want to improve Wilco, the best way if to launch Storybook, and have a look to the component you want to improve.

```
npm run start-storybook
```

When your changes are finished, but do not want to / cannot publish the library to NPM, the easiest way to include your own version of Wilco into your project (just for testing!) is to copy and paste the generated `dist` folder into the `node_modules` folder of your project.

```
cp -R ../Wilco/dist ./node_modules/@inseefr/wilco
```

Inside Wilco, we have a dedicated NPM script to build automatically each time a change is detected.

```
npm run build:dev
```

## Naming conventions

- All CSS classes defined in Wilco should be prefixed by `wilco-`

## Theme

Wilco define some colors you can override at any time. All components available in this library will used these colors.

Sor for example, if you want to override the default colors, you should define these following CSS properties in your stylesheet.

```css
body {
	--color-1: red;
	--color-2: green;
	--color-3: blue;
}
```
