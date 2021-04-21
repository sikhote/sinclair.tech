const { execSync, exec } = require('child_process');
const path = require('path');
const appRoot = require('app-root-path');
const express = require('express');

execSync('yarn next build && yarn next export -o build');

const app = express();
const port = 8000;
const url = `http://localhost:${port}`;
const file = './assets/downloads/David-Sinclair-Resume.pdf';
const root = path.join(appRoot.toString(), '/build');

app.use('/', express.static(root));

const server = app.listen(port, () => {
  exec(`yarn electron-pdf -p A3 -m 0 -b false ${url}/resume ${file}`, () =>
    server.close(),
  );
});
