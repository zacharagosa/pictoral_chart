const path = require('path');
const webpack = require('webpack')


module.exports = {
    mode: 'development',
    entry: './src/pictoral.js',
    output: {
        filename: 'pictoral.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: path.join(__dirname, 'src/'),
        devMiddleware: {
            publicPath: '/dist/'
        },
        port: 3000,
        hot: "only",

        // Corrected HTTPS Configuration:
        server: {  // Use only the 'server' property
            type: 'https',
            options: {
                key: './localhost+1-key.pem',
                cert: './localhost+1.pem'
            }
        },
    },
    resolve: {
        // ... other resolve options
        alias: {
            'highcharts$': path.resolve(__dirname, 'node_modules/highcharts')
            // ... other aliases you need
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules\/(?!(@react-spring)\/).*/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    externals: {
        highcharts: "Highcharts"
    },
    plugins: [
        new webpack.ProvidePlugin({
            Highcharts: 'highcharts/highstock',
        })
    ]
};
