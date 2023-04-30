/* eslint-disable indent */
/* eslint-disable no-tabs */
module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'airbnb'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'react-hooks'],
	rules: {
		'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
		'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
		'no-underscore-dangle': 0,
		'react/jsx-indent': 0,
		'react/jsx-indent-props': 0,
		'react/jsx-closing-tag-location': 0,
		'no-console': 0,
		'react/react-in-jsx-scope': 0,
		'react/prop-types': 0,
		'linebreak-style': 0,
		'no-tabs': 0,
		'import/no-unresolved': 0,
		'react/self-closing-comp': 0,
		indent: 0,
		'comma-dangle': 0,
	},
};
