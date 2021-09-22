const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const prod = process.env.NODE_ENV === "production";

module.exports = {
  devServer: {
    historyApiFallback: false,
    port: 3000,
    hot: true,
  },
  mode: prod ? "production" : "development",
  devtool: prod ? "hidden-source-map" : "eval",
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_module/,
        use: ["babel-loader", "ts-loader"],
      },
    ],
  },

  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html", // 템플릿 경로 설정
      templateParameters: {
        // 템플릿에 주입할 파라매터 변수 지정
        env: prod ? "" : "(개발용)",
      },
      minify: prod
        ? {
            // 운영시 최적화
            collapseWhitespace: true, // 빈칸 제거
            removeComments: true, // 주석 제거
          }
        : false,
    }),
    new webpack.HotModuleReplacementPlugin(), // 개발 모드 핫로드 기능
    new CleanWebpackPlugin(), // 이전 빌드 결과물 제거
  ],
};
