import glob from 'glob';
import path from 'path';

const IMAGES_FOLDER = path.join(__dirname, '../../public/images');
const IMAGES_EXT = '.JPG';
const IMAGES_GLOB = `${ IMAGES_FOLDER }/*${ IMAGES_EXT }`;

const PUBLIC_URL = '/public/images';

console.log('image fo', IMAGES_FOLDER);
console.log('asdasdasd', IMAGES_GLOB);

const Images = (req, res) => {
  glob(IMAGES_GLOB, function (err, files) {
    const images = files.map((file) => {
      const fileName = path.basename(file, IMAGES_EXT);
      const [title, message] = fileName.split('-');
      return {
        path: `${ PUBLIC_URL }/${ fileName }${ IMAGES_EXT }`,
        title,
        message,
      };
    });
    res.send(images);
  })
};

export default Images;
