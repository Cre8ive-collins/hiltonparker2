const assets = {
  import: {
    mapper(r) {
      return r.keys().map(r);
    },
    all() {
      assets.import.mapper(require.context("@/user/assets/img", false, /\.(png|jpe?g|gif)$/));
      assets.import.mapper(require.context("@/user/assets/css", false, /\.(scss|css)$/));
      // assets.import.mapper(
      //   require.context("@/user/assets/fonts", false, /\.(eot|svg|ttf|woff)$/)
      // );
    },
  },
};

export default assets;
