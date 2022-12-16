<p align="center">
  <a href="https://github.com/daniil4udo/bulvar/" target="_blank" rel="noopener noreferrer">
    <img width="180" src="./bulvar.svg" alt="Bulvar logo">
  </a>
</p>
<br/>
<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/CSS-Custom_Properties-blue.svg" alt="npm package"></a>
  <a href="https://www.npmjs.com/package/@bulvar/bulma"><img src="https://img.shields.io/npm/v/@bulvar/bulma.svg?logo=npm" alt="npm package"></a>
  <a href="https://www.npmjs.com/package/@bulvar/bulma"><img src="https://img.shields.io/npm/v/@bulvar/bulma.svg?logo=npm" alt="npm package"></a>
  <a href="https://github.com/jgthms/bulma/"><img src="https://img.shields.io/github/v/release/jgthms/bulma?logo=Bulma" alt="npm package"></a>
  <a href="https://github.com/buefy/buefy/releases"><img src="https://img.shields.io/github/v/release/buefy/buefy?logo=buefy&color=7957d5&labelColor=lightgrey" /></a>
  <a href="https://github.com/daniil4udo/bulvar/actions/workflows/npm-publish.yml"><img src="https://github.com/daniil4udo/bulvar/actions/workflows/npm-publish.yml/badge.svg?branch=master" alt="build status"></a>
</p>
<br/>

# 🛣 Bulvar

> Bulvar [Bulma](https://bulma.io) and [Buefy](https://buefy.org) on steroids using CSS variables

-   ⚡️ Runtime variables change
-   🛠️ Rich Features - includes Bulma, Buefy CSS and Bulma extensions
-   💡 Root and Local variables scoping
-   📦 CSS minifier with structural optimizations

## 💙 SPECIAL SPONSOR

<!--special start-->

<p align="center">
  <a href="https://www.democrance.com" target="_blank">
    <img width="260px" src="https://www.democrance.com/wp-content/uploads/2021/11/democrance_new_logo_1200dpi.png">
  </a>
</p>

## 🚀 QUICK INSTALL

Bulma & Buefy is constantly in development! Try it out now:

### Bulma

Install using NPM

```sh
npm install @bulvar/bulma
```

or Yarn

```sh
yarn add @bulvar/bulma
```

### Buefy

Install using NPM.

NOTE: If you install Buefy, bulma get installed as well as dependency.

```sh
npm install @bulvar/buefy
```

or Yarn

```sh
yarn add @bulvar/buefy
```

## 🔩 IMPORT

Build includes (for both Bulma & Buefy)

-   Standard CSS file `bulma.css` or `buefy.css`
-   Standard minified CSS file `bulma.min.css` and `buefy.min.css`
-   RTL CSS file `bulma-rtl.css` and `buefy-rtl.css`
-   Minified RTL CSS file `bulma-rtl.min.css` and `buefy-rtl.min.css`

After installation, you can import any from above CSS file into your project using this snippet:

```css
@import '@bulvar/bulma/css/bulma.css';
```

or

```css
@import '@bulvar/bulma/css/buefy.css';
```

## 🤔 WHY Bulvar?

Bulvar is a monorepo with all Bulma-derived packages rewritten with CSS Variables and new `@use` and `@forward` features.

Currently Includes :

-   [Bulma](https://bulma.io) itself (duh) as `@bulvar/bulma`
-   [Buefy](https://buefy.org) (SCSS only) as `@bulvar/buefy`
-   [Bulma Extensions](https://bulma.io/extensions/) (still WIP) as `@bulvar/bulma-extentions`

## 🧪 WHAT HAS BEEN CHANGED

-   CSS Vars compatible! Woohoo!
-   Real modularity! Drop deprecated `@import`. Use `@foward` and `@use` (read more [HERE](https://css-tricks.com/introducing-sass-modules))
-   Always using latest Dart(⚠️ make sure you are using Dart version of SASS in your project too) Sass instead of deprecated node-sass
-   Added namespace. No need to worry about variables overwrite
-   Added flag to be able to exports SASS variables using `export` for JS
-   Added secondary color
-   Added flexbox gap helper classes
-   Added color-scheme support
-   Added cross-browser support for placeholder opacity
-   Custom `divide()` function replaced with SASS `math.div()`
-   Custom `power()` function replaced with SASS `math.pow()`
-   Added link pseudo selectors

## 🚀 CUSTOMIZATION TIPS

Using `@use` instead of `@import` itself makes compiling faster.

If you want to save some space you could overwrite helper lists with empty lists during the import like:

```sass
@use "path/to/bulma" with (
  $flex-direction-values: (),
  $flex-wrap-values: (),
  $justify-content-values: (),
  $align-content-values: (),
  $align-items-values: (),
  $align-self-values: (),
  $flex-operators:  (),
  $flex-gap-values: (),
)
```

bulma.sass holds all `!default` variables, hence if you need all Bulma elements, pass all your variables directly there

```sass
@use 'bulma.sass' with (
  $radius-rounded: 99px,
  $button-color: red,
  $button-family: 'Helvetica',
)
@use 'themes/light.sass'
```

NOTE: You'll have to import `light.sass` or `dark.sass` from themes for the CSS Variables Bulma functioning properly.

## 🧩 MODULARITY

Now to import only needed elements instead of entire Bulma became much easy due to "real" modularity.

Thanks to `@use` and `@forward`, no need to import top level (global) variables in order to import just few needed elements, just import whatever you need.

For example if you need only `buttons.sass` in your project, and need to overwrite few variables:

```sass
// In order to customize global variables
// Not required, unless you want to modify global variables from utils
@use 'themes/light.sass' with ($radius-rounded: 99px)

// Customize local variables in the module with !default
@use 'buttons.sass' with (
  $button-color: red,
  $button-family: 'Helvetica',
)
```

Note that in the example above, when using `theme/light` you can modify all global variables.

## ⚙️ HELPERS

There were bunch of improvements in helpers utility classes

-   `is-radiusless` is extended
-   Added `is-radiusless-top`
-   Added `is-radiusless-bottom`
-   Added `is-radiusless-{top-left, top-right, bottom-right, bottom-left}`
-   Added `is-borderless` is extended
-   Added `is-borderless-top`
-   Added `is-borderless-bottom`
-   Added `is-{top-left, top-right, bottom-right, bottom-left}`

## ⚠️ CSS ONLY

IMPORTANT: This packages is CSS ONLY!

If you need Buefy Vue components, but you wan to use CSS variable in your project, you'll have to install both `buefy` and `@bulvar/buefy`

NOTE: If you need Buefy styles, do not import Bulma, it already includes it in correct order.

## ⚠️ CSS VARIABLES DRAWBACKS

CSS Variables named after SASS [Bulma variables](https://bulma.io/documentation/overview/variables/)

Each main color in `$colors` and shade in `$shades` has corresponding

`--#{$name}-h` - stands for color <i>hue</i>
`--#{$name}-s` - stands for color <i>saturation</i>
`--#{$name}-l` - stands for color <i>lightness</i>
`--#{$name}-a` - stands for color <i>alpha</i>

### Modify Opacity

I.e. to add opacity to the primary color, you'll have to

```css
--primary-a: 0.5;
```

or

```css
--primary-a: calc(var(--primary-a) - var(--some-other-value));
```

### Modify Lightness and Darkness

Same applies for lightness. Instead of using sass lightness function (which you cannot with css variables), just modify `--primary-l` value.

Tome make color lighter increase (add) value to the `--primary-l`, to make it darker, decrease (subtract) accordingly.

### Modify Invert Colors

By default, if color's luminance less then 0.55, then invert color will be `rgba(#000, 0.7)` otherwise `white`.

You can change those colors now by overwriting `$invert-dark-colors` & `$invert-light-colors`

### Proper color change in runtime

Best way to change main colors (primary, info etc.) is to change their corresponding `--#{$name}-h` (hue), `--#{$name}-s` (saturation),
`--#{$name}-l` (lightness) and `--#{$name}-a` (alpha aka opacity)

### Scoping

One of the SASS variable `$at-root` indicates where CSS variable going to be registered.

By default it sets to `true`, and results into

```css
:root {
	--footer-background-color: SOME_COLOR;
	--footer-padding: SOME_PADDING;
}
```

In case you need more strict scoping, you can set it to `false`, which, in case of footer component, will transform into:

```css
.footer {
	--footer-background-color: SOME_COLOR;
	--footer-padding: SOME_PADDING;
}
```

## 🛳 EXPORTS

If you are using style modules SASS variable in you JS files, you can set `$exports` to true, which will generate

```sass
:export {
  variableName: VALUE
}
```

Note that all SASS variable will be camelized.

## 📢 VERSIONING

Version will follow **v0.Y.Z**, where:

-   **Y**: Major (breaking changes)
-   **Z**: Minor or patch

Starting from version 1.Y.Z we going to deprecate `@import` in favour of `@use` and `@forward`

## 💻 BROWSER SUPPORT

Bulma & Buefy uses [autoprefixer](https://github.com/postcss/autoprefixer) to make (most) Flexbox features compatible with earlier browser versions.

According to [Can I use](https://caniuse.com/css-variables), Bulma is compatible with **recent** versions of:

-   Chrome
-   Edge
-   Firefox
-   Opera
-   Safari

Internet Explorer is not supported due to the use of css variables.

Although you can use polyfill.

## 📖 COPYRIGHT AND LICENSE ![Github](https://img.shields.io/github/license/daniil4udo/bulvar?logo=Github)

Code copyright 2022 Daniil Chumachenko. Code released under [the MIT license](https://github.com/daniil4udo/bulvar/blob/master/LICENSE).
