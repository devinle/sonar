/**
 * Used to compile a js build
 */
const path = require('path');

module.exports = {
  entry: './src/sonar.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'sonar.js',
    library: 'sonar',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
  }
};
