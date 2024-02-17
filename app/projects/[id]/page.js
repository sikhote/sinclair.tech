import Item from 'components/Item';
import feed from 'lib/feed';
import getMetadata from 'lib/getMetaData';

export function generateMetadata({ params }) {
  return getMetadata('projects', params);
}

export default Item;

export async function generateStaticParams() {
  return feed
    .filter(({ type }) => type === 'projects')
    .map(({ id }) => ({ id }));
}
