# [bulma](https://bulma.io)-[buefy](https://buefy.org)-css-variables

Bulma and derive package Buefy is a **modern CSS framework** based on [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) and [CSS Variables (Custom Properties)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties).

## 🚀 QUICK INSTALL

Bulma & Buefy is constantly in development! Try it out now:

### NPM

```sh
npm install @bulvar/bulma
```

### Yarn

```sh
yarn add @bulvar/bulma
```

### Import

Build includes (for both Bulma & Buefy)

-   Standart CSS file `bulma.css` and `buefy.css`
-   Standart minified CSS file `bulma.min.css` and `buefy.min.css`
-   RTL CSS file `bulma-rtl.css` and `buefy-rtl.css`
-   Minified RTL CSS file `bulma-rtl.min.css` and `buefy-rtl.min.css`

After installation, you can import any from above CSS file into your project using this snippet:

```css
@import "@bulvar/bulma/css/bulma.css";
```

Feel free to raise an issue or submit a pull request.

## ⚠️ CSS ONLY

IMPORTANT: This packages is CSS ONLY!

If you need Buefy Vue components, but you wan to use CSS variable in your project, you'll have to install both `buefy` and `@bulvar/bulma`

NOTE: If you need Buefy styles, do not import Bulma, it already includes it in correct order.

## ⚠️ CSS VARIABLES DRAWBACKS

CSS Variables named after SASS [variables](https://bulma.io/documentation/overview/variables/)

Each main color in `colors` and shade in `shades` has coresponding

`--#{$base}-h - hue`
`--#{$base}-s - saturation`
`--#{$base}-l - lightness`
`--#{$base}-a - alpha`

### Modify Opacity

I.e. to add opacity to the primary color, you'll have to

```css
--primary-a: 0.5;
```

or

```css
--primary-a: calc(var(--primary-a) - var(--some-other-value));
```

### Modify Lightnes and Darkness

Same applies for lightness. Instead of using sass lightness function (which you cannot with css variables), just modify `--primary-l` value.

Tome make color lighter increase (add) value to the `--primary-l`, to make it darker, decrease (substract) accordingly.

### Proper color change in runtime

Best way to change main colors (primary, info etc.) is to change their coresponding `--#{$base}-h` (hue), `--#{$base}-s` (saturation),
`--#{$base}-l` (lightness) and `--#{$base}-a` (alpha aka opacity)

### Scoping

One of the variable `$at-root` indicates where CSS variable going to be registered.

By default it sets to `true`, and results into

```css
:root {
    --footer-background-color: SOME_COLOR;
    --footer-padding: SOME_PADDING;
}
```

In case you need more strict scoping, you can set it to `false`, wich will trnasform into:

```css
.footer {
    --footer-background-color: SOME_COLOR;
    --footer-padding: SOME_PADDING;
}
```

## EXPORTS

If you are using style modules SASS variable in you JS files, you can set `$exports` to true, which will generate

```sass
:export {
  variableName: VALUE
}
```

Note that all SASS variable will be camelcased.

## VERSIONING

Version will follow **v0.Y.Z**, where:

-   **Y**: Major (breaking changes)
-   **Z**: Minor or patch

## BROWSER SUPPORT

Bulma & Buefy uses [autoprefixer](https://github.com/postcss/autoprefixer) to make (most) Flexbox features compatible with earlier browser versions. According to [Can I use](https://caniuse.com/css-variables), Bulma is compatible with **recent** versions of:

-   Chrome
-   Edge
-   Firefox
-   Opera
-   Safari

Internet Explorer (10+) is not supported due to the use of css variables.

## Copyright and license ![Github](https://img.shields.io/github/license/daniil4udo/bulvar?logo=Github)

Code copyright 2021 Daniil Chumachenko. Code released under [the MIT license](https://github.com/daniil4udo/bulvar/blob/master/LICENSE).

[npm-link]: https://www.npmjs.com/package/bulvar
[awesome-link]: https://github.com/awesome-css-group/awesome-css
[awesome-badge]: https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg
