<p align="center">
  <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
    <img width="180" src="./bulvar.png" alt="Vite logo">
  </a>
</p>
<br/>
<p align="center">
  <a href="https://npmjs.com/package/vite"><img src="https://img.shields.io/npm/v/vite.svg" alt="npm package"></a>
  <a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/node/v/vite.svg" alt="node compatibility"></a>
  <a href="https://github.com/vitejs/vite/actions/workflows/ci.yml"><img src="https://github.com/vitejs/vite/actions/workflows/ci.yml/badge.svg?branch=main" alt="build status"></a>
</p>
<br/>

# Bulvar 🛣

> Bulvar [Bulma](https://bulma.io) and [Buefy](https://buefy.org) on steroids

-   ⚡️ Runtime variables change
-   🛠️ Rich Features - includes Bulma, Buefy CSS and Bulma extentions
-   💡 Root and Local variables scoping
-   📦 CSS minifier with structural optimizations

## INTRO

Bulvar is a monorepo with all Bulma-derived packages rewritten with CSS Variables.

Currently Includes :

-   [Bulma](https://bulma.io) itself (duh) as `@bulvar/bulma`
-   [Buefy](https://buefy.org) (SCSS only) as `@bulvar/buefy`
-   [Bulma Extentions](https://bulma.io/extensions/) (find list of extentions in the @bulvar/bulma-extentions README) as `@bulvar/bulma-extentions`

## VERSIONING

Version will follow **v0.Y.Z**, where:

-   **Y**: Major (breaking changes)
-   **Z**: Minor or patch

## BROWSER SUPPORT

Bulma & Buefy uses [autoprefixer](https://github.com/postcss/autoprefixer) to make (most) Flexbox features compatible with earlier browser versions.

According to [Can I use](https://caniuse.com/css-variables), Bulma is compatible with **recent** versions of:

-   Chrome
-   Edge
-   Firefox
-   Opera
-   Safari

Internet Explorer (10+) is not supported due to the use of css variables.

## Copyright and license ![Github](https://img.shields.io/github/license/dino4udo/bulvar?logo=Github)

Code copyright 2021 Daniil Chumachenko. Code released under [the MIT license](https://github.com/dino4udo/bulvar/blob/master/LICENSE).

[npm-link]: https://www.npmjs.com/package/bulvar
[awesome-link]: https://github.com/awesome-css-group/awesome-css
[awesome-badge]: https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg
