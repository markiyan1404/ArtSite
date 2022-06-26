const path = require("path"),
      fs = require('fs'),
      HtmlWebpackPlugin = require("html-webpack-plugin"),
      { CleanWebpackPlugin } = require("clean-webpack-plugin"),
      CopyWebpackPlugin = require("copy-webpack-plugin"),
      MiniCssExtractPlugin = require("mini-css-extract-plugin"),
      optimizationCssAssetPlugin = require("optimize-css-assets-webpack-plugin"),
      terserWebpackPlugin = require("terser-webpack-plugin"),

      StylelintPlugin = require("stylelint-webpack-plugin"),
      ESLintPlugin = require("eslint-webpack-plugin"),
      isDev = process.env.NODE_ENV === "development",
      isProd = !isDev;

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: "all"
        }
    }

    if (isProd) {
        config.minimizer = [
            new optimizationCssAssetPlugin(),
            new terserWebpackPlugin()
        ]
    }

    return config
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

function print_names (...files) {
    const baseFiles = [
        "check_page_language", 
        "navigation", 
        "cursor", 
        "menu", 
        "menu_icon", 
        "languages", 
        "colors", 
        "last_page"
    ]

    for (let i = 0; i < files.length; i++) baseFiles.push(files[i]);

    return baseFiles;
}

function generateHtmlPlugins (directory, changeName) { 
    if (directory == "main") {
        return new HtmlWebpackPlugin({
            filename: "index.html",
            template: `./main.pug`,
            chunks: print_names("main"),
            minify: {
                collapseWhitespace: isProd,
            },
        })
    }
    
    else {
        let name = directory.split("/").slice(-1),
            filename = name;

        if (changeName) filename = changeName;

        return new HtmlWebpackPlugin({
            filename: `${filename}.html`,
            template: `./${directory}/${name}.pug`,
            chunks: print_names(`${filename}`),
            minify: {
                collapseWhitespace: isProd,
            },
        });
    }
};

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: {
        navigation: ["@navigation/navigation.ts"],
        languages: ["@navigation/components/languages.ts"],
        main: ["/main/ts/main.ts"],
        paintings: ["/paintings/ts/paintings.ts"],
        painting: ["/paintings/painting/ts/painting.ts"],
        painting_author: ["/paintings/painting/author/ts/author.ts"],
        sculptures: ["/sculptures/ts/sculptures.ts"],
        sculpture: ["/sculptures/sculpture/ts/sculpture.ts"],
        sculpture_author: ["/sculptures/sculpture/author/ts/author.ts"],
        architecture: ["/architecture/ts/architecture.ts"],
        architecture_type: ["/architecture/architecture_type/ts/architecture_type.ts"],
        architecture_exemple: ["/architecture/architecture_type/architecture_exemple/ts/architecture_exemple.ts"],
        404: ["/404/ts/404.ts"],
        menu: ["/menu/ts/menu.ts"],
        colors: ["@navigation/components/colors.ts"],
        menu_icon: ["@navigation/components/menu_icon.ts"],
        check_page_language: ["@navigation/components/check_page_language.ts"],
        cursor: ["/cursor/ts/cursor.ts"],
        firstLoad: ["@standartTS/checkFirstLoad.ts"],
        title: ["@standartTS/title.ts"],
        last_page: ["@standartTS/lastPage.ts"],
    },

    output: { 
        filename: `./js/${filename('.js')}`,
        path: path.resolve(__dirname, 'dist'),
 },

    plugins: [

        // HTML plagin

        // main
        generateHtmlPlugins("main"),

        // paintings
        generateHtmlPlugins("paintings"),
        generateHtmlPlugins("paintings/painting"),
        generateHtmlPlugins("paintings/painting/author", "painting_author"),

        // sculptures
        generateHtmlPlugins("sculptures"),
        generateHtmlPlugins("sculptures/sculpture"),
        generateHtmlPlugins("sculptures/sculpture"),
        generateHtmlPlugins("sculptures/sculpture/author", "sculpture_author"),

        // architecture
        generateHtmlPlugins("architecture"),
        generateHtmlPlugins("architecture/architecture_type"),
        generateHtmlPlugins("architecture/architecture_type/architecture_exemple"),

        // 404
        generateHtmlPlugins("404"),

        // CLEAN plagin
        new CleanWebpackPlugin(),

        // // COPY plagin
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src/img"),
                    to: path.resolve(__dirname, "dist/img")
                },
            ]
        }),

        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            ignoreOrder: false,
        }),

        // STYLELINT plagin
        new StylelintPlugin(),

        new ESLintPlugin({extensions: ['ts']})
    ],

    resolve: {
        alias: {
            "@standartTS": path.resolve(__dirname, "./src/ts"),
            "@navigation": path.resolve(__dirname, "./src/navigation/ts")
        }
    },

    optimization: optimization(),

    module: {
        rules: [

            // Loading SCSS/SASS

            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            url: false,
                        },
                    },
                    {
                        loader: 'resolve-url-loader',
                        options: {
                            debug: true,
                            root: path.join(__dirname, './dist/'),
                            includeRoot: true,
                            absolute: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    }
                ],              
            },

            // Loading CSS
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader"
                ],
            },

            // Loading BABEL TS
            {
                test: /\.m?ts$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-typescript"],
                        plugins: ["@babel/plugin-proposal-object-rest-spread"]
                    },
                },
                resolve: {
                    extensions: [".js", ".ts"],
                }
            },

            // Loading PUG
            {
                test: /\.pug$/,
                loader: '@webdiscus/pug-loader',
                options: {
                    basedir: path.resolve(__dirname, './src')
                }
            },
        ]
    }
};