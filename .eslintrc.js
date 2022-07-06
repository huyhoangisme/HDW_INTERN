const defaultRules = [
	'react-app',
	'eslint:recommended',
	// any other plugins or custom configuration you'd like to extend from.
];

module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	env: {
		browser: true,
		node: true,
		es6: true,
		jest: true,
	},
	extends: defaultRules,
	rules: {
		'array-callback-return': 'warn',
		'consistent-return': 'warn',
		'default-case': 'warn',
		'no-duplicate-imports': 'error',
		'require-await': 'error',
		'no-empty-function': 'off',
		'@typescript-eslint/no-empty-function': ['error'],
		// etc.
	},
	overrides: [
		{
			files: ['**/*.ts', '**/*.tsx'],
			plugins: ['@typescript-eslint'],
			extends: [
				...defaultRules,
				'plugin:@typescript-eslint/recommended',
			
			],
			rules: {
				'@typescript-eslint/no-explicit-any': 'warn',
				'@typescript-eslint/no-unused-vars': 'warn',
				'@typescript-eslint/no-unused-expressions': 'warn',
				'no-empty-function': 'off',
				// etc.
			},
		},
	],
	settings: {
		react: {
			// React version. "detect" automatically picks the version you have installed.
			version: 'detect',
		},
	},
};
