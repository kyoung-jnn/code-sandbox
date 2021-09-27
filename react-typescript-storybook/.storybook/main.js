const path = require("path");
const sass = require("sass");
const fibers = require("fibers");

module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          options: {
            implementation: sass, //dart-sass 적용
            sassOptions: {
              fiber: fibers, // fibers 적용, sass 컴파일 속도 향상
            },
          },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });

    return config;
  },
};
