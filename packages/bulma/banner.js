import pkg from './package.json' assert { type: "json" };

const year = new Date().getFullYear()
const homepage = `(${pkg.homepage})` || ''

const bannerTxt = `/*!
  * ${pkg.name} v${pkg.version} ${homepage}
  * Copyright ${year} ${pkg.author.name} ${pkg.author.email}
  * Licensed under MIT (https://github.com/daniil4udo/bulvar/blob/master/LICENSE)
  */\n`

process.stdout.write(bannerTxt)
process.stdin.pipe(process.stdout)
