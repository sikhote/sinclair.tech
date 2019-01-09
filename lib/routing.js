const pathMatch = require('path-match');

const route = pathMatch();
const thoughtsMatch = route('/thoughts/:id');
const projectsMatch = route('/projects/:id');

module.exports = { thoughtsMatch, projectsMatch };
