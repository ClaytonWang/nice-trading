'use strict';

const fs = require('fs');
const path = require('path');
const pump = require('mz-modules/pump');
const moment = require('moment');
const Controller = require('egg').Controller;

class FileStoreController extends Controller {
  async show() {
    await this.ctx.render('page/ajax.html');
  }

  async upload() {
    const imgFolder = '/public/images/' + encodeURIComponent(moment().format('YYYY-MM-DD'));
    const stream = await this.ctx.getFileStream();
    const filename = encodeURIComponent(moment().format('HH-mm-SSSS')) + path.extname(stream.filename).toLowerCase();
    const folder = path.join(this.config.baseDir, imgFolder);
    const target = path.join(folder, filename);
    if (!fs.existsSync(folder)) {
      this.ctx.helper.mkdirsSync(folder);
    }
    const writeStream = fs.createWriteStream(target);
    await pump(stream, writeStream);

    this.ctx.body = { url: imgFolder + '/' + filename };
  }

}

module.exports = FileStoreController;
