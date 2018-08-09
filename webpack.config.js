const path = require('path');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');

const baseConfig = {
    context: path.join(__dirname, 'src'),
    entry: './app.js',
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};

module.exports = (env, argv) => {
    let config = null;

    if (argv.mode === 'production') {
        config = Object.assign({}, baseConfig, prodConfig);
    } else if (argv.mode === 'development') {
        config = Object.assign({}, baseConfig, devConfig);
    } else {
        console.log(`Something went wrong, no config file for ${argv.mode} mode`);
        config = Object.assign({}, baseConfig, devConfig);
    }

    return config;
};
