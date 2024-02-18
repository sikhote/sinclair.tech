import Item from 'components/Item';
import feed from 'lib/feed';
import getMetadata from 'lib/getMetadata';

export function generateMetadata({ params }) {
  return getMetadata('thoughts', params);
}

export default Item;

export async function generateStaticParams() {
  return feed
    .filter(({ type }) => type === 'thoughts')
    .map(({ id }) => ({ id }));
}
