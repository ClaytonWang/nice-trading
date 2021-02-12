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
    const query = {
      trading_plan_id: this.ctx.helper.parseInt(stream.fields.trading_plan_id),
      trading_detail_id: this.ctx.helper.parseInt(stream.fields.trading_detail_id),
    };
    const filename = encodeURIComponent(moment().format('HH-mm-SSSS')) + path.extname(stream.filename).toLowerCase();
    const folder = path.join(this.config.baseDir, 'app' + imgFolder);
    const target = path.join(folder, filename);
    if (!fs.existsSync(folder)) {
      this.ctx.helper.mkdirsSync(folder);
    }
    const writeStream = fs.createWriteStream(target);
    await pump(stream, writeStream);

    const image_url = imgFolder + '/' + filename;
    if (query.trading_plan_id || query.trading_detail_id) {
      await this.ctx.service.imageService.create({
        image_url,
        ...query,
      });
    }
    this.ctx.body = { url: image_url };
  }

}

module.exports = FileStoreController;
