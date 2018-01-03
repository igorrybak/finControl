module.exports = {
  entry: "./src/ts/app.ts",
  devtool: "source-map",

  module: {
    rules: [{
        test: /\.ts?$/,
        use: "awesome-typescript-loader"
      },

      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },

  resolve: {
    extensions: [".ts", ".js", ".json"]
  },

  output: {
    filename: "bundle.js",
    path: __dirname + "/dist/js"
  }

};
