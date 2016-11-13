import React from 'react';

const HTML = ({ baseJsPath }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,user-scalable=no" />
        <title>Mormor</title>
      </head>
      <body>
        <div id="root" />
        <script src={ `${ baseJsPath }/app-manifest.js` } />
        <script src={ `${ baseJsPath }/vendor.js` } />
        <script src={ `${ baseJsPath }/client.js` } />
      </body>
    </html>
  );
};

export default HTML;
