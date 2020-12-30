'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
  parseInt(string) {
    if (typeof string === 'number') return string;
    if (!string) return string;
    return parseInt(string) || 0;
  },

  // 递归创建目录 异步方法
  mkdirs(dirname, mode, callback) {
    fs.exists(dirname, function(exists) {
      if (exists) {
        callback();
      } else {
        console.log(path.dirname(dirname));
        this.mkdirs(path.dirname(dirname), mode, function() {
          fs.mkdir(dirname, mode, callback);
        });
      }
    });
  },

  // 递归创建目录 同步方法
  mkdirsSync(dirname, mode) {
    console.log(dirname);
    if (fs.existsSync(dirname)) {
      return true;
    }
    if (this.mkdirsSync(path.dirname(dirname), mode)) {
      fs.mkdirSync(dirname, mode);
      return true;
    }
  },
};
