const UrlPrettifier = require('next-url-prettifier').default;

const routes = [
  {
    page: 'thoughts',
    prettyUrl: ({ id = '' }) => `/thoughts/${id}`,
    prettyUrlPatterns: [
      { pattern: '/thoughts/:id', defaultParams: { id: '' } },
    ],
  },
];

const urlPrettifier = new UrlPrettifier(routes);
exports.default = routes;
exports.Router = urlPrettifier;
