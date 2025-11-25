import feed from 'lib/feed';
import type { UnknownObject } from 'lib/types';

export default function getMetadata(page?: string, params?: UnknownObject) {
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
      description = item?.description || description;
      break;
    case 'thoughts':
      title = item
        ? `${item.title}${divider}${name}`
        : `Thoughts${divider}${name}`;
      description = item?.description || description;
      break;
  }

  return { title, description };
}
