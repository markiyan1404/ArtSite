const { TorusGeometry } = require("three");

const path = require("path"),
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

const filename = ext => `[name].${ext}`;

function print_names (...files) {
    const baseFiles = [
        "check_page_language", 
        "navigation", 
        "cursor", 
        "menu", 
        "menu_icon", 
        "languages", 
        "colors", 
        "last_page",
        "firstLoad",
        "title"
    ]

    for (let i = 0; i < files.length; i++) baseFiles.push(files[i]);

    return baseFiles;
}

function generateHtmlPlugins (directory, addParent, rename) {

    const folder = directory.split("/")[0],
        name = directory.split("/").slice(-1);

    let sourceName = name;

    if (rename) sourceName = rename;
    if (addParent) sourceName = `${folder}_${name}`

    return new HtmlWebpackPlugin({
        filename: `${sourceName}.html`,
        template: `./pug/${folder}/${name}.pug`,
        chunks: print_names(`${sourceName}`),
        minify: {
            collapseWhitespace: isProd,
        },
    });
};

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: {
        navigation: ["@navigation/navigation.ts"],
        languages: ["@navigation/components/languages.ts"],
        index: ["/ts/main/main.ts"],
        paintings: ["/ts/paintings/scripts/paintings.ts"],
        painting: ["/ts/paintings/painting/painting.ts"],
        paintings_author: ["/ts/paintings/author/author.ts"],
        sculptures: ["/ts/sculptures/scripts/sculptures.ts"],
        sculpture: ["/ts/sculptures/sculpture/sculpture.ts"],
        sculptures_author: ["/ts/sculptures/author/author.ts"],
        architecture: ["/ts/architecture/scripts/architecture.ts"],
        architecture_type: ["/ts/architecture/type/type.ts"],
        architecture_exemple: ["/ts/architecture/exemple/exemple.ts"],
        404: ["/ts/404/404.ts"],
        menu: ["/ts/menu/menu.ts"],
        colors: ["@navigation/components/colors.ts"],
        menu_icon: ["@navigation/components/menu_icon.ts"],
        check_page_language: ["@navigation/components/check_page_language.ts"],
        cursor: ["/ts/cursor/cursor.ts"],
        firstLoad: ["@standartTS/checkFirstLoad.ts"],
        title: ["@standartTS/title.ts"],
        game: ["/ts/game/scripts/game.ts"],
        game_skins: ["/ts/game/skins/skins.ts"],
        last_page: ["@standartTS/lastPage.ts"],
    },

    output: { 
        filename: `./js/${filename('.js')}`,
        path: path.resolve(__dirname, 'dist/'),
 },

    plugins: [

        // HTML plagin

        // main
        generateHtmlPlugins("main/main", false, "index"),

        // paintings
        generateHtmlPlugins("paintings/paintings"),
        generateHtmlPlugins("paintings/painting"),
        generateHtmlPlugins("paintings/author", true),

        // sculptures
        generateHtmlPlugins("sculptures/sculpture"),
        generateHtmlPlugins("sculptures/sculptures"),
        generateHtmlPlugins("sculptures/author", true),

        // architecture
        generateHtmlPlugins("architecture/architecture"),
        generateHtmlPlugins("architecture/type", true),
        generateHtmlPlugins("architecture/exemple", true),

        // 404
        generateHtmlPlugins("404/404"),

        // game
        generateHtmlPlugins("game/game"),
        generateHtmlPlugins("game/skins", true),

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

        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src/3D_models"),
                    to: path.resolve(__dirname, "dist/3D_models")
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
            "@standartTS": path.resolve(__dirname, "./src/ts/global_scripts"),
            "@navigation": path.resolve(__dirname, "./src/ts/navigation")
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
                    alias: {
                        origin: path.resolve(__dirname, 'src/'),
                        originSCSS: path.resolve(__dirname, 'src/scss/'),
                        originTS: path.resolve(__dirname, 'src/ts/')
                    },
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
    },

    devServer: {
        client: {
            overlay: false,
        },
        static: {
            directory: path.join(__dirname, "./src/")
          },
        hot: true,
        open: true,
    },
    target: "web"
};

