import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { BASE_JS_PATH } from '../../config';
import * as CONFIG from '../../config';

import Html from './html';

function App(req, res) {
  const html = ReactDOMServer.renderToStaticMarkup(
    <Html baseJsPath={ BASE_JS_PATH } />,
  );
  res.send('<!DOCTYPE html>' + html);
}

console.log('CONFIG', CONFIG);

export default App;
