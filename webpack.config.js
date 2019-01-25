const path = require('path');


module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src/app/') +'/index.js',
    output: {
        path: path.resolve(__dirname, 'public') + '/dist',
        filename:'bundle.js',
        publicPath: '/'
    },
    module: {
        rules : [
            {
                test: /\.js$/,
                include: path.resolve(__dirname,'src'),
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: [
                        '@babel/plugin-proposal-class-properties'
                    ]
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(jpg|png|jpeg)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
        ]
    },
    devServer : {
        contentBase: path.join(__dirname, '/public/'),
        inline: true,
        port: 4000
    }
}