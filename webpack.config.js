const path = require('path');

module.exports = {
    mode:'development',
    entry: './src/index.js',
    output:{
        filename:'main.js',
        path: path.resolve(__dirname, 'dist'),
    },

    //checking out the error
    devtool:'inline-source-map',

    //working with loaders
    module:{
        rules:[
            {
                test:/\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],

     },
};