const path = require('path');

module.exports = {
  entry: './sls.js', // 单入口
  mode: "production",
  output: {
    filename: 'pro.js',
    path: path.resolve(__dirname,'dist'),
    libraryTarget: 'commonjs2',
  },
  target: 'node' // 这是最关键的
};
