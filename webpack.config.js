/**
 * Used to compile a js build
 */
const path = require('path');

module.exports = {
  entry: './src/sonar.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'sonar.js',
    library: '',
    libraryTarget: 'umd'
  }
};
