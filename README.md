# CodeBoilerplate 💾

개인 공부를 하거나 프로젝트를 진행하면서

추후, 개발의 용이성과 복습을 위해
 
작성한 **코드 로직**을 저장해 놓는 곳입니다. 👍

> 📌 **모든 코드 로직의 default = (React + Typescript / Webpack 5 + Babel 7)**

# 목차 📝

- ### 1. [Webpack](#Webpack)

- ### 2. [Storybook](#Storybook)

- ### 3. Jest

- ### 3. Reduxtoolkit / RTK

- ### 4. Reduxtoolkit query / RTK query

----

# **Webpack**

**Webpack 5, Babel 7** 기본 설정, Boilerplate

## 주요 구성 ⚙️

```json
 "dependencies": {
    "@babel/runtime": "^7.15.4",
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  },
  "devDependencies": {
    "@babel/core": "^7.15.5",
    "@babel/plugin-transform-runtime": "^7.15.8",
    "@babel/preset-env": "^7.15.6",
    "@babel/preset-react": "^7.14.5",
    "@babel/preset-typescript": "^7.15.0",
    "@types/react": "^17.0.22",
    "@types/react-dom": "^17.0.9",
    "@typescript-eslint/eslint-plugin": "^4.33.0",
    "@typescript-eslint/parser": "^4.33.0",
    "babel-loader": "^8.2.2",
    "clean-webpack-plugin": "^4.0.0",
    "css-loader": "^6.3.0",
    "dotenv-webpack": "^7.0.3",
    "eslint": "^7.32.0",
    "eslint-config-airbnb": "^18.2.1",
    "eslint-config-prettier": "^8.3.0",
    "eslint-import-resolver-typescript": "^2.5.0",
    "eslint-plugin-import": "^2.24.2",
    "eslint-plugin-jsx-a11y": "^6.4.1",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-react": "^7.26.1",
    "eslint-plugin-react-hooks": "^4.2.0",
    "file-loader": "^6.2.0",
    "html-webpack-plugin": "^5.3.2",
    "mini-css-extract-plugin": "^2.3.0",
    "prettier": "^2.4.1",
    "sass": "^1.42.1",
    "sass-loader": "^12.1.0",
    "style-loader": "^3.3.0",
    "typescript": "^4.4.3",
    "url-loader": "^4.1.1",
    "webpack": "^5.53.0",
    "webpack-cli": "^4.8.0",
    "webpack-dev-server": "^4.2.1",
    "webpack-merge": "^5.8.0"
  }
```

---

# Storybook

**Storybook** 기본 설정, Boilerplate

## 주요 구성 ⚙️

```json
  "dependencies": {
    "@babel/runtime": "^7.15.4",
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  },
  "devDependencies": {
    "@babel/core": "^7.15.5",
    "@babel/plugin-transform-runtime": "^7.15.8",
    "@babel/preset-env": "^7.15.6",
    "@babel/preset-react": "^7.14.5",
    "@babel/preset-typescript": "^7.15.0",
    "@storybook/addon-actions": "^6.3.8",
    "@storybook/addon-essentials": "^6.3.8",
    "@storybook/addon-links": "^6.3.8",
    "@storybook/builder-webpack5": "^6.3.8",
    "@storybook/manager-webpack5": "^6.3.8",
    "@storybook/react": "^6.3.12",
    "@types/react": "^17.0.22",
    "@types/react-dom": "^17.0.9",
    "babel-loader": "^8.2.2",
    "classnames": "^2.3.1",
    "clean-webpack-plugin": "^4.0.0",
    "css-loader": "^6.3.0",
    "dotenv-webpack": "^7.0.3",
    "file-loader": "^6.2.0",
    "html-webpack-plugin": "^5.3.2",
    "mini-css-extract-plugin": "^2.3.0",
    "sass": "^1.42.1",
    "sass-loader": "^12.1.0",
    "style-loader": "^3.3.0",
    "typescript": "^4.4.3",
    "url-loader": "^4.1.1",
    "webpack": "^5.53.0",
    "webpack-cli": "^4.8.0",
    "webpack-dev-server": "^4.2.1",
    "webpack-merge": "^5.8.0"
  }
```
