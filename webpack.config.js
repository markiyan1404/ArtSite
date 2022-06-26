const path = require("path"),
    //  HtmlWebpackPlugin = require("html-webpack-plugin"),
      { CleanWebpackPlugin } = require("clean-webpack-plugin"),
      CopyWebpackPlugin = require("copy-webpack-plugin"),
      MiniCssExtractPlugin = require("mini-css-extract-plugin"),
      optimizationCssAssetPlugin = require("optimize-css-assets-webpack-plugin"),
      terserWebpackPlugin = require("terser-webpack-plugin"),
      PugPlugin = require('pug-plugin'),

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

    for (let i=0; i<files.length; i++) baseFiles.push(files[i]);

    return baseFiles;
}

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: {
        navigation: ["@navigation/navigation.ts"],
        languages: ["@navigation/components/languages.ts"],
        main: ["@mainTS/main.ts"],
        paintings: ["@paintings/paintings.ts"],
        painting: ["@painting/painting.ts"],
        painting_author: ["@painting_author/author.ts"],
        sculptures: ["@sculptures/sculptures.ts"],
        sculpture: ["@sculpture/sculpture.ts"],
        sculpture_author: ["@sculpture_author/author.ts"],
        architecture: ["@architecture/architecture.ts"],
        architecture_type: ["@architecture_type/architecture_type.ts"],
        architecture_exemple: ["@architecture_exemple/architecture_exemple.ts"],
        404: ["@404/404.ts"],
        menu: ["@menu/menu.ts"],
        colors: ["@navigation/components/colors.ts"],
        menu_icon: ["@navigation/components/menu_icon.ts"],
        check_page_language: ["@navigation/components/check_page_language.ts"],
        cursor: ["@cursor/ts/cursor.ts"],
        firstLoad: ["@standartTS/checkFirstLoad.ts"],
        title: ["@standartTS/title.ts"],
        last_page: ["@standartTS/lastPage.ts"],

        index: './main.pug',
    },

    output: { 
        publicPath: "/dist",
        filename: `./js/${filename('.js')}`,
        path: path.resolve(__dirname, 'dist'),
 },

    plugins: [

        
        new PugPlugin({
            pretty: true, 
        }),


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
            "@mainTS": path.resolve(__dirname, "./src/main/ts"),
            "@navigation": path.resolve(__dirname, "./src/navigation/ts"),
            "@cursor": path.resolve(__dirname, "./src/cursor"),
            "@menu": path.resolve(__dirname, "./src/menu/ts"),
            "@paintings": path.resolve(__dirname, "./src/paintings/ts"),
            "@painting": path.resolve(__dirname, "./src/paintings/painting/ts"),
            "@painting_author": path.resolve(__dirname, "./src/paintings/painting/author/ts"),
            "@sculptures": path.resolve(__dirname, "./src/sculptures/ts"),
            "@sculpture": path.resolve(__dirname, "./src/sculptures/sculpture/ts"),
            "@sculpture_author": path.resolve(__dirname, "./src/sculptures/sculpture/author/ts"),
            "@architecture": path.resolve(__dirname, "./src/architecture/ts"),
            "@architecture_type": path.resolve(__dirname, "./src/architecture/architecture_type/ts"),
            "@architecture_exemple": path.resolve(__dirname, "./src/architecture/architecture_type/architecture_exemple/ts"),
            "@404": path.resolve(__dirname, "./src/404/ts"),
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
                            // url: false,
                        },
                    },
                    {
                        loader: 'resolve-url-loader',
                        options: {
                            debug: true,
                            root: path.join(__dirname, '/dist/'),
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
                use: {
                    loader: PugPlugin.loader,
                    options: {
                        method: 'render',
                        basedir: path.resolve(__dirname, './src')
                    }
                }
            },
        ]
    }
};