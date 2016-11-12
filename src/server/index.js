import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Html from './html';

function App(req, res) {
  const html = ReactDOMServer.renderToStaticMarkup(
    <Html
      title="yepstr"
    />,
  );
  res.send('<!DOCTYPE html>' + html);
}

export default App;
