import type { CustomAtRules, TransformOptions as LightningcssTransformOptions, Visitor } from 'lightningcss';
import type { ConfigOptions as RtlOptions } from 'rtlcss';
import type { Options as SassOptions } from 'sass';

import fsp from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { composeVisitors, transform as lightningcss } from 'lightningcss';
import minimist from 'minimist';
import rtlcss from 'rtlcss';
import * as sass from 'sass';

const _dirname = typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

/**
 * Compile Sass files into CSS.
 *
 * @param filepath - The path to the Sass file to compile.
 * @param opts - Optional Sass compiler options.
 * @returns The compiled CSS.
 */
function compile(filepath: string, opts?: SassOptions<'sync'>) {
    return sass.compile(filepath, {
        ...opts,
        // loadPaths: [
        // 	fileURLToPath(new URL('../node_modules', import.meta.url)),
        // ],
        alertColor: true,
        verbose: true,
        sourceMap: true,
        sourceMapIncludeSources: true,
    });
}

/**
 * lightningcss plugin to prefix user-select with -webkit-touch-callout
 *
 * @returns
 */
function lightningcssPluginWebkitTouchCallout() {
    const map = {
        all: 'default',
        auto: 'default',
        contain: 'default',
        none: 'none',
        text: 'default',
        inherit: 'inherit',
        initial: 'initial',
        unset: 'unset',
    } as const;

    const visitor: Visitor<never> = {
        Declaration: {
            'user-select': decl => {
                if (typeof decl.value === 'string' && decl.value in map) {
                    const mappedValue = map[decl.value];
                    if (mappedValue !== undefined) {
                        return [ decl, {
                            property: '-webkit-touch-callout',
                            raw: mappedValue,
                        }];
                    }
                }

                return [ decl ]; // Return the original declaration if there's no mapped value
            },
        },
    };

    return visitor;
}

/**
 * Minify the given code.
 *
 * @param filename - The name of the file being minified.
 * @param code - The code to minify.
 * @returns The minified code.
 */
interface TransformOptions<C extends CustomAtRules> extends Partial<Omit<LightningcssTransformOptions<C>, 'code'>> {
    code: string
}
function transform<C extends CustomAtRules>(filename: string, opts: TransformOptions<C>) {
    return lightningcss({
        filename,
        minify: opts.minify ?? true,
        code: Buffer.from(opts.code),
        visitor: composeVisitors([
            lightningcssPluginWebkitTouchCallout(),
        ]),
    });
}

/**
 * Convert LTR CSS to RTL.
 *
 * @param code - The LTR CSS code to convert.
 * @param opts - Optional RTL conversion options.
 * @returns The RTL CSS code.
 */
function compileRTL(code: string, opts?: RtlOptions) {
    return rtlcss.process(code, opts);
}

/**
 * Main processing function.
 *
 * @param isRTL - Whether to convert the CSS to RTL.
 * @returns The processed CSS code.
 */
function main({ scope, rtl = false }: Record<string, any> = {}) {
    // https://pnpm.io/cli/exec#--recursive--r
    // const [ namespace, pckgName ] = process.env.PNPM_PACKAGE_NAME!.split('/')

    // Computed file name base on "rtl" flag
    const filename = rtl
        ? `${scope}-rtl`
        : scope;

    // Path to the package folder. i.e. packages/bulma
    const filepath = path.resolve(_dirname, `../packages/${scope}`);

    // Compile the SCSS first
    const compiled = compile(`${filepath}/${filename}.scss`, {});
    const compiledRTL = rtl
        ? compileRTL(compiled.css, {})
        : compiled.css;

    const { code: expandedCss, ...transformed } = transform(`${filename}.css`, {
        code: compiledRTL,
        minify: false,
    });
    const { code: minifiedCss } = transform(`${filename}.css`, {
        code: compiledRTL,
        minify: true,
    });

    return {
        filepath,
        filename,
        ...compiled,
        expandedCss: expandedCss.toString(),
        minifiedCss: minifiedCss.toString(),
    };
}

(async () => {
    const argv = minimist(process.argv.slice(2));
    const { bannerTxt } = await import(`../packages/${argv.scope}/banner.js`);
    const {
        expandedCss,
        minifiedCss,
        sourceMap,

        filepath,
        filename,
    } = main(argv);

    fsp.writeFile(`${filepath}/css/${filename}.css`, `${bannerTxt}\n${expandedCss}`);
    fsp.writeFile(`${filepath}/css/${filename}.min.css`, `${bannerTxt}\n${minifiedCss}`);
    fsp.writeFile(`${filepath}/css/${filename}.css.map`, JSON.stringify(sourceMap));
})();

// process.stdout.write(css)
// process.stdin.pipe(process.stdout)
