import glob from 'glob';
import path from 'path';

import { IMAGES_DIR, BASE_IMAGES_PATH } from '../../config';

const IMAGES_FOLDER = path.join(__dirname, '../..', IMAGES_DIR);
const IMAGES_EXT = '.JPG';
const IMAGES_GLOB = `${ IMAGES_FOLDER }/*${ IMAGES_EXT }`;

const toFileName = (fullPath) => {
  return path.basename(fullPath);
};

const fullPathToPublicPath = (fullPath) => {
  const fileName = toFileName(fullPath);

  return path.join(BASE_IMAGES_PATH, fileName);
};

const metaFromFullPath = (fullPath) => {
  const fileName = toFileName(fullPath);
  const base64 = fileName.split('.')[0];
  const str = new Buffer(base64, 'base64').toString('binary');
  const [title, message] = str.split('-');

  return { title, message };
};

const Images = (req, res) => {
  glob(IMAGES_GLOB, function (err, files) {
    const images = files.map((file) => {

      return {
        path: fullPathToPublicPath(file),
        ...metaFromFullPath(file),
      };
    });
    res.send(images);
  })
};

export default Images;
