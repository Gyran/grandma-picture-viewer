Quick project for creating an simple picture viewer

put all images in public/images/*.JPG
with the extension `.JPG` and name them `base64([title]-[message]).JPG`

To install run `npm run install`

To start run `npm run start` and it will start the app and listen to
the port set in the env variable `PORT`.

in `config.js` some different configs can be set, the most relevant is
`MOUNT_DIR` to be able to support a non absolute path
