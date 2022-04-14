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

module.exports = (ctx) => {
	return {
		map: {
			inline: false,
			annotation: true,
			sourcesContent: true,
		},
		plugins: [
			require('autoprefixer')({
				cascade: false,
			}),
			postcssTouchCallout,
			ctx.env === 'RTL' ? require('rtlcss')({}) : () => {},
		],
	};
};
