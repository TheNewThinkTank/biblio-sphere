module.exports = {
	env: {
		"browser": true,
		"es2021": true
	},
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended'
	],  // "standard-with-typescript",
	overrides: [
		{
			"env": {
				"node": true
			},
			"files": [
				".eslintrc.{js,cjs}"
			],
			"parserOptions": {
				"sourceType": "script"
			}
		}
	],
	parserOptions: {
		"ecmaVersion": "latest",
		"sourceType": "module",
		project: "tsconfig.json",
		allowJs: true
	},
	rules: {
	}
}
