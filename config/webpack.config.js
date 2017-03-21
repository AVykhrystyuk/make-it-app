'use strict';

const path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function(env) {
    var isProduction = env
        ? Boolean(env.production)
        : false;
    console.log(`isPoduction = ${isProduction}`);

    const options = {
        isProd: isProduction,
        isTest: false,
        plugins: {
            extractCSS: new ExtractTextPlugin({
                filename: 'css/[name].css',
                allChunks: true
            })
        }
    };

    return makeWebpackConfig(options);
};

function makeWebpackConfig(options) {
    const config = {
        context: path.resolve('app')
    };

    config.entry = {
        app: './app.module.js',
        vendor: './vendor.js',
        prepack: './prepack'
    };

    config.output = {
        path: path.resolve('build'),
        publicPath: '/assets',
        filename: 'js/[name].bundle.js',
    };

    config.module = {
        rules: getAllModuleRules(options)
    };

    config.plugins = getPlugins(options);

    config.devtool = getDevtool(options);

    config.devServer = {
        contentBase: path.resolve('public')
    };

    return config;
}

function getStyleModuleRules(options) {
    let extractedStyleRegex = /node_modules|app[\\/]prepack/;
    let styleLoader = {
        loader: "style-loader"
    };
    let cssLoader = {
        loader: "css-loader",
        options: {
            sourceMap: options.isProd,
            minimize: options.isProd
        }
    };
    let postCssLoader = {
        loader: 'postcss-loader',
        options: {
            config: './config/postcss.config.js', //     sourceMap: 'inline',
        }
    };
    let lessLoader = {
        loader: "less-loader",
        options: {
            sourceMap: options.isProd
        }
    };

    let moduleRules = [{
        test: /\.css$/,
        exclude: extractedStyleRegex,
        use: [styleLoader, cssLoader, postCssLoader]
    }, {
        test: /\.less$/,
        exclude: extractedStyleRegex,
        use: [styleLoader, cssLoader, postCssLoader, lessLoader]
    }];

    if (options.plugins.extractCSS) {
        moduleRules.push({
            test: /\.css$/,
            include: extractedStyleRegex,
            use: options.plugins.extractCSS.extract([cssLoader, postCssLoader])
        }, {
            test: /\.less$/,
            include: extractedStyleRegex,
            use: options.plugins.extractCSS.extract([cssLoader, postCssLoader, lessLoader])
        });
    }

    return moduleRules;
}

function getAllModuleRules(options) {
    const moduleRules = [{
        test: /\.js$/,
        loader: "eslint-loader",
        enforce: "pre",
        exclude: /node_modules/,
    }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
            presets: ["es2015"]
        }
    }, {
        test: /\.(jpg|jpeg|gif|png)$/,
        loader: 'url-loader',
        options: {
            limit: 1024,
            name: "img/[name].[hash].[ext]"
        }
    }, {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader',
        options: {
            limit: 1024,
            name: "fonts/[name].[hash].[ext]"
        }
    }];

    if (!options.isTest) {
        let styleRules = getStyleModuleRules(options);
        moduleRules.push(...styleRules);
    }

    return moduleRules;
}

function getPlugins(options) {
    let plugins = [
        new webpack.optimize.CommonsChunkPlugin({
            names: ["prepack", "vendor"],
            minChunks: Infinity
        })
    ];

    if (options.isProd) {
        plugins.push(
            new webpack.NoEmitOnErrorsPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true,
                warnings: true,
                comments: false
            })
        );
    }

    if (!options.isTest) {
        if (options.plugins.extractCSS) {
            plugins.push(options.plugins.extractCSS);
        }
    }
    return plugins;
}

function getDevtool(options) {
    let devtool = 'cheap-source-map';

    if (options.isProd) {
        devtool = 'source-map';
    }

    console.log(`devtool = ${devtool}`);
    return devtool;
}