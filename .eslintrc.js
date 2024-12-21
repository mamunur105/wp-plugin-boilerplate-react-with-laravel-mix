/**
 * Eslint config file
 * as configured in package.json under eslintConfig.extends
 *
 * @see BabelJS: https://babeljs.io/
 * @see Webpack babel-loader: https://webpack.js.org/loaders/babel-loader/
 * @see @wordpress/eslint-plugin : https://www.npmjs.com/package/@wordpress/eslint-plugin
 * @since 1.0.0
 */
module.exports = {
    parser: '@typescript-eslint/parser', // Use the TypeScript parser
    parserOptions: {
        ecmaVersion: 2020, // Use modern ECMAScript features
        sourceType: 'module', // Allow imports
        ecmaFeatures: {
            jsx: true, // Enable JSX if using React
        },
        project: './tsconfig.json', // Specify your TypeScript config
    },
    plugins: ['@typescript-eslint', 'react', 'react-hooks'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended', // Optional: Integrates Prettier with ESLint
    ],
    settings: {
        react: {
            version: 'detect', // Automatically detect React version
        },
    },
    rules: {
        // Customize your linting rules here
        '@typescript-eslint/no-explicit-any': 'warn', // Avoid using 'any'
        '@typescript-eslint/explicit-function-return-type': 'off', // Disable forcing return types
    },
};