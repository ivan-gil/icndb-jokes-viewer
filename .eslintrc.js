module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        'indent': ['error', 4, { "SwitchCase": 1 }],
        'import/no-extraneous-dependencies': ['error', {
            devDependencies: [
                'test/**', // tape, common npm pattern
                'tests/**', // also common npm pattern
                'spec/**', // mocha, rspec-like pattern
                '**/__tests__/**', // jest pattern
                '**/__mocks__/**', // jest pattern
                'test.{js,jsx}', // repos with a single test file
                'test-*.{js,jsx}', // repos with multiple top-level test files
                '**/*{.,_}{test,spec}.{js,jsx}', // tests where the extension or filename suffix denotes that it is a test
                '**/jest.config.js', // jest config
                '**/vue.config.js', // vue-cli config
                '**/webpack.config.js', // webpack config
                '**/webpack.config.*.js', // webpack config
                '**/webpack.*.js', // webpack config
                '**/rollup.config.js', // rollup config
                '**/rollup.config.*.js', // rollup config
                '**/gulpfile.js', // gulp config
                '**/gulpfile.*.js', // gulp config
                '**/Gruntfile{,.js}', // grunt config
                '**/protractor.conf.js', // protractor config
                '**/protractor.conf.*.js', // protractor config
            ],
            optionalDependencies: false,
        }],
        'react/jsx-indent': [2, 4],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/jsx-one-expression-per-line": "off",
        "react/prefer-stateless-function": "off",
        "react/jsx-indent-props": "off",
    },
};