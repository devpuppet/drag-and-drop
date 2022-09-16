const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    // Tell webpack that this is prod environment. Webpack will do optimisations, minify code etc.
    mode: 'production',
    entry: './src/app.ts',
    performance: {
        hints: false
    },
    output: {
        filename: 'bundle.js',

        // Specify where the output should be written.
        // It should match tsconfig/outDir property to avoid errors.
        // Webpack need absolutr path (not relative) - you need to use Node.js 'path' mddule to build it
        path: path.resolve(__dirname, 'dist')
    },

    // It tells webpack to turn off devTools
    devtool: false,

    // You need to tell webpack what to do with TS files
    module: {
        rules: [
            {
                // regexp - any .ts file should be compiled by ts-loader
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },

    // We tell webpack which file extensions it adds to the imports it finds (by default it looks for .js files only)
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        // Plugin tells webpack before it writes something to /dist, it should clear the directory
        new CleanPlugin.CleanWebpackPlugin()
    ]
}