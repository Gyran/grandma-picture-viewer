import path from 'path';

export const PUBLIC_DIR = 'public';
export const BUILD_DIR = `${ PUBLIC_DIR }/build`;
export const MOUNT_DIR = 'mormor';

export const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');
export const BASE_IMAGES_PATH = path.join(MOUNT_DIR, IMAGES_DIR);
export const BASE_JS_PATH = path.join(MOUNT_DIR, BUILD_DIR);
