const pkg = require('./package.json');

module.exports = {
    presets: [
        ['@babel/env', {
            targets: pkg.browserslist,
            useBuiltIns: 'usage',
            corejs: '3.1.3',
            shippedProposals: true,
        }],
        '@babel/typescript',
    ],
    plugins: [
        ['module-resolver', { root: ['.'], alias: { src: './src' } }],
        // plugin-proposal-decorators needs to be before proposal-class-properties
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        // loose mode required with legacy decorator
        ['@babel/proposal-class-properties', { loose: true }],
        '@babel/plugin-transform-regenerator',
        '@babel/plugin-transform-react-jsx',
        '@babel/proposal-object-rest-spread',
        '@babel/plugin-syntax-dynamic-import',
    ],
};
