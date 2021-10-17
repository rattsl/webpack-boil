const path = require("path");
const MinCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "./js/bundle.js",
        path: path.resolve(__dirname, "./dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MinCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                    },
                ]
            }
        ]
    },
    plugins: [
        new MinCssExtractPlugin({
            filename: "./styles/style.css"
        }),
        new HtmlWebpackPlugin({
            template: "./src/templetes/index.html",
        }),
        new CleanWebpackPlugin()
    ]
}