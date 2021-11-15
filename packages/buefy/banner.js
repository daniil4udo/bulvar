'use strict'
const pack = require('./package.json')
const year = new Date().getFullYear()
const homepage = `(${pack.homepage})` || ''

const bannerTxt = `/*!
  * ${pack.name} v${pack.version} ${homepage}
  * Copyright ${year} ${pack.author.name} ${pack.author.email}
  * Licensed under MIT (https://github.com/dino4udo/bulma-buefy-css-variables/blob/master/LICENSE)
  */\n`

process.stdout.write(bannerTxt)
process.stdin.pipe(process.stdout)
