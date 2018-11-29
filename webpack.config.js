module.exports = {
  entry: "./src/ts/app.ts",
  mode: "production",
  devtool: "source-map",
  watch: true,
  
  output: {
    path: "/home/igor/doc/git/finControl/dist",
    filename: "bundle.js"    
  },
  
  module: {
    rules: [{
      test: /\.ts?$/,
      loader: "awesome-typescript-loader"
    }]
  },
  
  resolve: {
    extensions: [".ts", ".js", ".json", ".html"]
  }
};
