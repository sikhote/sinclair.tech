const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const { thoughtsMatch, projectsMatch } = require('./lib/routing');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() =>
  createServer((req, res) => {
    const { pathname, query } = parse(req.url, true);
    const thoughtsParams = thoughtsMatch(pathname);
    const projectsParams = projectsMatch(pathname);

    if (thoughtsParams || projectsParams) {
      app.render(
        req,
        res,
        '/item',
        Object.assign(
          {
            ...(thoughtsParams || projectsParams),
            type: thoughtsParams ? 'thoughts' : 'projects',
          },
          query,
        ),
      );
    } else {
      handle(req, res);
    }
  }).listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  }),
);
