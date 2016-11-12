import http from 'http';
import path from 'path';
import express from 'express';

import appEntrance from './src/server';

const DEFAULT_PORT = 3000;

const app = express();
const server = new http.Server(app);

const publicPath = path.join(__dirname, 'public');
app.use('/public', express.static(publicPath));
app.use('/', appEntrance);

app.set('port', process.env.PORT || DEFAULT_PORT);

server.listen(app.get('port'), () => {
  console.log('The main server is running at http://localhost:' + server.address().port);
});
