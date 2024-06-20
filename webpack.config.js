const path = require("path");

module.exports = (env) => {
  return {
    mode: "production",
    entry: "./src/index",
    output: {
      path: path.resolve("dist"),
      filename: `[name].${env.moduleType}.js`,
      libraryTarget: env.moduleType === "commonjs" ? "commonjs2" : "umd",
      globalObject: "this",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          use: {
            loader: "swc-loader",
            options: {
              // Options can be read from .swcrc or passed here
            },
          },
        },
      ],
    },
    externals:
      env.moduleType === "commonjs"
        ? []
        : {
            react: "React",
            "react-dom": "ReactDOM",
          },
  };
};
