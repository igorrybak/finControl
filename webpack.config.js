module.exports = {
  entry: "./src/ts/app.ts",
  devtool: "source-map",

  module: {
    rules: [{
      test: /\.ts?$/,
      use: "awesome-typescript-loader"
    }]
  },

  resolve: {
    extensions: [".ts", ".js", ".json", ".html"]
  },

  output: {
    filename: "bundle.js",
    path: __dirname + "/dist/js"
  },

  node: {
    fs: "empty",
    tls: "empty",
    net: "empty"
  }

};
