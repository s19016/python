module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'production',
  target: 'node',
  module: {
    rules: [
      {
        // 拡張子 .js or .jsx の場合
        test: /\.(js|jsx)$/,
        // node_modules は除外
        exclude: /node_modules/,
        use: [
          {
            // Babel を利用する
            loader: 'babel-loader',
            // Babel のオプションを指定する
            options: {
              presets: [
                // プリセットを指定することで、ES2019 を ES5 に変換
                '@babel/preset-env',
                // React の JSX を解釈
                '@babel/preset-react'
              ]
            }
          }
        ]
      }
    ]
  }
}

/*   // メインとなるJavaScriptファイル（エントリーポイント）
  entry: './src/index.js',
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/dist`,
    // 出力ファイル名
    filename: 'main.js'
  }, */
