const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./client/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  debug: true,
                  targets: "> 1%, not dead",
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./client/index.html", // 템플릿 경로를 지정
      templateParameters: {
        // 템플릿에 주입할 파라매터 변수 지정
        env: process.env.NODE_ENV === "development" ? "(개발용)" : "",
      },
    }),
  ],
  devServer: {
    client: { overlay: true, logging: "error" },
    port: 8081,
    hot: true,
    historyApiFallback: true,
  },
};
