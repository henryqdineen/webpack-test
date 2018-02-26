const path = require('path');

module.exports = {
  entry: {
    project: './src/project.js',
    specs: './src/specs.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};