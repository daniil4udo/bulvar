'use strict'
const pack = require('./package.json')

const bannerTxt = `/*! bulma-buefy-css-variables v${pack.version} | MIT License | github.com/dino4udo/bulma-buefy-css-variables */\n`

process.stdout.write(bannerTxt)
process.stdin.pipe(process.stdout)
