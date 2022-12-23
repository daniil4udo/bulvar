import autoprefixer from 'autoprefixer';
import csso from 'postcss-csso';
import rtlcss from 'rtlcss';

const map = {
	none: 'none',
	auto: 'default',
	text: 'default',
	contain: 'default',
	all: 'default',
	inherit: 'inherit',
	initial: 'initial',
	unset: 'unset',
};

const postcssTouchCallout = (root) =>
	root.walkDecls('user-select', (declaration) => {
		if (declaration.value in map) {
			declaration.parent.prepend({
				prop: '-webkit-touch-callout',
				value: map[declaration.value],
			});


		}
	});

export default function (ctx) {
	return {
		map: {
			inline: false,
			annotation: true,
			sourcesContent: true,
		},
		plugins: [
			autoprefixer({
				cascade: false,
			}),
			csso({
				restructure: true,
			}),
			postcssTouchCallout,
			ctx.env === 'RTL' ? rtlcss({}) : () => {},
		],
	};
};
