import feed from 'lib/feed';

export default function getMetadata(page, params) {
  const divider = ' · ';
  const name = 'David Sinclair';
  let description = `Personal website of ${name}`;
  let title = description;
  const item = params && feed.find(({ id }) => id === params.id);

  switch (page) {
    case 'resume':
      title = `Resume${divider}${name}`;
      break;
    case 'pictures':
      title = `Pictures${divider}${name}`;
      break;
    case 'projects':
      title = item
        ? `${item.title}${divider}${name}`
        : `Projects${divider}${name}`;
      break;
    case 'thoughts':
      title = item
        ? `${item.title}${divider}${name}`
        : `Thoughts${divider}${name}`;
      break;
  }

  return { title, description };
}
