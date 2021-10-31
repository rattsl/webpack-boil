# Webpack boilderplate

このリポジトリはweb制作を効率的に行うためのwebpackの設定ファイルです。

## how to use
```
// ローカルサーバー立ち上げ
[linux] $ npm start

// 開発環境用ビルド
[linux] $ npm run build:dev

// 本番用ビルド
[linux] $ npm run build
```

## branch

| branch name |  role  |
| ---- | ---- |
|  main  |  基本的なloaderが入ったブランチ  |
|  react  |  main + Reactが書けるブランチ  |
|  vue  |  main + Vueが書けるブランチ  |
|  ts  |  main + TypeScriptが書けるブランチ  |
|  ts-react  |  main + React + TypeScriptが書けるブランチ  |

### main

mainには以下のモジュールをインストールしています

-  "@babel/core": "^7.9.6",
-  "@babel/preset-env": "^7.9.6",
-  "babel-loader": "^8.2.3",
-  "clean-webpack-plugin": "^4.0.0",
-  "css-loader": "^6.4.0",
-  "file-loader": "^6.2.0",
-  "html-loader": "^2.1.2",
-  "html-webpack-plugin": "^5.4.0",
-  "image-webpack-loader": "^8.0.1",
-  "mini-css-extract-plugin": "^2.4.2",
-  "node-sass": "^6.0.1",
-  "pug-html-loader": "^1.1.5",
-  "sass-loader": "^12.2.0",
-  "style-loader": "^3.3.0",
-  "url-loader": "^4.1.1",
-  "webpack": "^5.58.2",
-  "webpack-cli": "^4.9.0",
-  "webpack-dev-server": "^4.3.1"