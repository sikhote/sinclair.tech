// @flow
import showdown from 'showdown';
import content from './outline';

if (process.browser) {
  const converter = new showdown.Converter();
  const context = require.context('./', true, /\.(md)$/);

  context.keys().forEach(filename => {
    const parts = filename.split('/');
    const name = parts[2].split('.')[0];
    const html = converter.makeHtml(context(filename));

    if (parts[1] === 'pages') {
      content.pages[name].content = html;
    } else {
      content.feed.find(i => i.slug === name).content = html;
    }
  });
}

export default content;
