const path= require("path");

module.expotrs={
  mode: "development",
  entry: "./src/index.js",
  output:{
    filename:"main.js",
    path: path.resolve(__dirname, "dist"),
  },

  devServer:{
    static:{
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
  },
};