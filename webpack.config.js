const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = {
    build: path.resolve(__dirname, "dist/client"),
    src: path.resolve(__dirname, "src/client"),
    assets: path.resolve(__dirname, "src/client/assets"),
    components: path.resolve(__dirname, "src/client/components")
};

const webpackConfig = {
    // https://webpack.js.org/concepts/#mode
    mode: "development",

    // https://babeljs.io/docs/en/babel-polyfill
    entry: ["@babel/polyfill", path.resolve(paths.src, "App.jsx")],
    output: {
        path: paths.build,
        filename: "bundle.js"
    },

    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: [/node_modules/, /proto/], loader: "babel-loader" },
            // https://github.com/webpack-contrib/file-loader --See for config
            { test: /\.(png|jpg|jpeg|gif|ttf|otf|svg|pdf|gltf|bin)$/, loader: "file-loader" },
            // https://www.npmjs.com/package/eslint-loader --See "Usage"
            { test: /\.(js|jsx)$/, exclude: [/node_modules/, /proto/], loader: "eslint-loader" },
            { test: /\.css$/, use: [{ loader: "style-loader" }, { loader: "css-loader" }] }
        ]
    },

    plugins: [
        // https://github.com/jantimon/html-webpack-plugin#options --See for config.
        new HtmlWebpackPlugin({
            template: path.join(paths.src, "index.html")
        })
    ],

    resolve: {
        extensions: [".js", ".jsx"]
    }
};

module.exports = webpackConfig;
