# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.10.2](https://github.com/daniil4udo/bulvar/compare/v0.10.1...v0.10.2) (2022-03-15)

**Note:** Version bump only for package @bulvar/buefy





## [0.10.1](https://github.com/daniil4udo/bulvar/compare/v0.10.0...v0.10.1) (2022-03-07)

**Note:** Version bump only for package @bulvar/buefy

# [0.10.0](https://github.com/daniil4udo/bulvar/compare/v0.9.7...v0.10.0) (2022-03-07)

### Bug Fixes

- **Buefy:** 🐛 move arithmetic operation to var ([8169242](https://github.com/daniil4udo/bulvar/commit/8169242bad4773ec8f56ff769f937a19d9f171e3))
- **tabs:** 🐛 vars weren't registered as CSS vars ([b1bf4fc](https://github.com/daniil4udo/bulvar/commit/b1bf4fcdeed6c67eb69d627a43b2fd30cf70cee8))

### feature

- ✨ deprecared import ([#42](https://github.com/daniil4udo/bulvar/issues/42)) ([ce37ad6](https://github.com/daniil4udo/bulvar/commit/ce37ad6e978602141c5eca2966c03f3f90cab561)), closes [#38](https://github.com/daniil4udo/bulvar/issues/38)

### BREAKING CHANGES

- All files with name \_all.{SASS,SCSS} were renamed to \_index.{SASS,SCSS} to be able to use @forward
- now we using @use and @forwad (SASS modules) that might break your imports

- feature(Buefy): ✨ use SASS modules
- now we using @use and @forwad (SASS modules) that might break your imports

- refactoring(Bulma): ♻️ use map to generate grid

- feature(ALL): ✨ change main files to use @use

- refactoring(functions.sass): ♻️ use math.pow

- feature(ALL): ✨ use load-path flag to simplify urls

- feature(ALL): ✨ add \*-core.sass version of the build

- fix(lerna): 🐛 to show output of compilation

- refactoring(Bulma): ♻️ use var namespace for variables

- refactoring(Buefy): ♻️ use vars namespace for variables

- fix: 🐛 rebase fixes

- fix(derived-variables): 🐛 @forwar has to be first

- refactoring(messages.sass): ♻️ use conventional light and dark colors

- fix(Buefy): 🐛 same variablles name withing same scope

- refactoring(ALL): ♻️ use @forward and with() in main files

- style(derived-variables): 🎨 appropriate place for the comment

- fix(derived-variables): 🐛 $grey-lightest was missing in shades

- nuke bulma-core

- style(bulma): 🎨 shorten import path

- style(progress.sass): 🎨 agreagate same rules

- style(controls): 🎨 control-sizes mixin makes more sense in controls.sass

- refactoring(controls): ♻️ move all controls vars to controls.sass

move everything to controls.sass and register CSS vars in here

- feature(registerComponentCSSVars): ✨ add no class case also

make registerComponentCSSVars to accept null or empty string, in this case css vars will
be automatially registered in the root

- style(entends.sass): 🎨 rename namespace to more conventional

- fix(controld.sass): 🐛 controls vars have to be global

$control-\* type of vars are used in the multiple components, hence have to be global

- style(shared.sass): 🎨 colors list usually goes last

- style(base.sass): 🎨 no need to declare $input-\* vars again

- style(Bulma): 🎨 format / clean / beautify basic theme

- style(Bulma): 🎨 rename to light theme

- style(generic.sass)!: 🎨 nuke unused $body-size

BREAKING CHANGES: $body-size removed. Use $body-font-size instead

- feature(animations): ✨ add keyframes mixin to prefix

- prune(vars files): 🔥 nuke unused (since now) Buefy variables

- mv(Buefy utilities)!: 🚚 move animation and helpers to helpers folder

divide Buefy utilities in tto utilities and helpers folder, which makes more sense

- \_animattion.scss and \_helpers.scss has been moved to other folder

- config(sass watch): 🔧 do not generate source map on watch | add colors

- docs-code(dark.sass): 💡 add @warn

- fix(generic.sass): 🐛 use body-font-size

- fix(Bulma): 🐛 make all path relative

to avoid additional setups in the project avoid using load-path

- fix(Buefy): 🐛 make all paths relative

- config(package.json): 🔧 add verbose flag to see all warnings

- prune(package.json): 🔥 no need to serve shared folder with anymore

- fix(Buefy): 🐛 path to Bulma

- style(Buefy): 🎨 Bulma-alike code formatting

- style(Bulma): 🎨 move animation to the single file

- typo(dark.sass): ✏️ close quotes

- style(themes): 🎨 forward global variables from themes

- style(helpers): 🎨 add !default to be able exclude helpers from the css

- docs(bulma): 📝 @forward explanation

- docs(bulma): 📝 @forward explanation

- ui(animation.sass): 💄 add helper animation classes

- prune(buefy): 🔥 nuke -core version of the build

- docs: 📝 add comprehensive docs

- mv: 🚚 move README to .github

- docs: 📝 add symlink to READMEs

- mv: 🚚 add symlink for LICENSE

- mv(bulvar.svg): 🚚 move logo to .github folder

Co-authored-by: Daniil <daniil.chumachenko@democrance.com>

## [0.9.7](https://github.com/daniil4udo/bulvar/compare/v0.9.6...v0.9.7) (2022-02-17)

**Note:** Version bump only for package @bulvar/buefy

## [0.9.6](https://github.com/daniil4udo/bulvar/compare/v0.9.5...v0.9.6) (2022-01-10)

**Note:** Version bump only for package @bulvar/buefy

## [0.9.5](https://github.com/daniil4udo/bulvar/compare/v0.9.4...v0.9.5) (2022-01-06)

**Note:** Version bump only for package @bulvar/buefy

## [0.9.4](https://github.com/daniil4udo/bulvar/compare/v0.9.3...v0.9.4) (2021-11-26)

### refactoring

- **ALL:** ♻️ use size mixin to define is-size-N ([#32](https://github.com/daniil4udo/bulvar/issues/32)) ([c9e5bd4](https://github.com/daniil4udo/bulvar/commit/c9e5bd483a2d2a24872d815359a4eea793acc480))

### BREAKING CHANGES

- **ALL:** typography-size mixin moved from typography.sass to the mixins.sass. If you import it, please change you import statement

- fix(file.sass): 🐛 add norma size to file

- style(mixins.sass): 🎨 sort positions

- refactoring(title.sass): ♻️ move sizes cclasses to mixin

Co-authored-by: Daniil <daniil.chumachenko@democrance.com>

## 0.9.3 (2021-11-22)

### Features

- **ALL:** ✨ convert to MONOREPO ([d6a82ba](https://github.com/daniil4udo/bulvar/commit/d6a82bac606b4894a472a8707b8336f992972815))

# Change Log
