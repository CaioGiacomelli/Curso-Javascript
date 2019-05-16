const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js', //ponto de entrada para o webpack
    output: {
        filename: 'principal.js', // a saida do js
        path: __dirname + '/public' // o lugar onde a saida js vai ser salva
    },
    devServer: {
        contentBase: "./public",
        port: 9000
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ //arquivo gerado pela interpretação do css
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [{ //aqui dentro, coloca todos os loaders, array de objetos q são os loaders
            test: /\.s?[ac]ss$/, //arquivo q termina com . alguma coisa, s opcional, set (pode ser a ou c) no final tem ss
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader', // Adiciona CSS a DOM injetando a tag <style> pelo principal js
                'css-loader', //interpreta @import, url()...
                'sass-loader',
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]    
    }
}