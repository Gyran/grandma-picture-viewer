import React from 'react';

const HTML = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,user-scalable=no" />
        <title>React App</title>
      </head>
      <body>
        <div id="root" />
        <script src="/public/build/app-manifest.js" />
        <script src="/public/build/vendor.js" />
        <script src="/public/build/client.js" />
      </body>
    </html>
  );
};

export default HTML;
