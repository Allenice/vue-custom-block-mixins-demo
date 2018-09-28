module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          resourceQuery: /blockType=docs/,
          loader: require.resolve("./loader.js")
        }
      ]
    }
  }
};
