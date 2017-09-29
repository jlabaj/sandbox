/**
 * Created by Jakub Labaj on 21. 11. 2015.
 */
var webpack = require("webpack");

module.exports = {
    name: 'server',
    entry: "./server.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    node: {
        fs: "empty"
    },
    target: 'node',
    module: {
        loaders: [
//             {   test: /\.js$/,
//                 exclude: /node_modules/,
//                 loaders: [
//                     // 'imports?document=this',
//
//                     // 'react-hot',
//                     'babel?presets[]=react,presets[]=es2015'
//                     //,'jsx-loader'
//                 ]
//             },
//             {
//                 test: /\.jsx?$/,
//                 exclude: /node_modules/,
//                 loaders: [
//                     'babel?presets[]=react,presets[]=es2015',
//                     'jsx-loader'
//                 ],
//             },
//
//             {
//                 test: /\.html$/,
//                 exclude: /node_modules/,
//                 loader: 'html-loader'
//             },
//             { test:  /\.json$/, loader: 'json-loader' },
            { test: /\.js$/,

                loaders: [
                    // 'imports?document=this',

                    // 'react-hot',
                    'babel?presets[]=react,presets[]=es2015'
                    //,'jsx-loader'
                ]
            },
            //{ test: /\.css$/,  loader: path.join(__dirname, 'server', 'style-collector') + '!css-loader' },
            { test:  /\.json$/, loader: 'json-loader' },
        ]
    }
    /*plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
    ],*/
};
