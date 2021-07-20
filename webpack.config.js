const {resolve} = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV;


const path = {
    src: resolve(__dirname, "src"),
    dist: resolve(__dirname, "dist"),
    entry: resolve(__dirname, "src/index.ts"),
    public: resolve(__dirname, "public/index.html")
}

module.exports = {
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
    },
    mode: NODE_ENV ? NODE_ENV : "development",
    entry: path.entry,
    output: {
        path: path.dist,
        filename: "main-[hash].js"
    },
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                exclude: /node_modules/,
                use: ["ts-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    'css-modules-typescript-loader?modules',
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                mode: "local",
                                localIdentName: "[name]__[local]__[hash:base64:5]",
                                auto: /\.module\.\w+$/i
                            }
                        }
                    },
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.public
        })
    ],
    devServer: {
        port: 3000,
        open: true,
        hot: true
    },
    devtool: "source-map"
}