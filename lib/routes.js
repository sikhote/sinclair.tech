const pathMatch = require('path-match');

const routes = {
  about: '/',
  projects: '/projects',
  project: '/projects/:id',
  thoughts: '/thoughts',
  thought: '/thoughts/:id',
};

module.exports = Object.keys(routes).reduce((acc, key) => {
  const route = pathMatch();
  acc[key] = {
    route: routes[key],
    match: route(routes[key]),
  };
  return acc;
}, {});
