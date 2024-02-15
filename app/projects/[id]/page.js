import Item from 'components/Item';
import feed from 'lib/feed';

export default Item;

export async function generateStaticParams() {
  return feed
    .filter(({ type }) => type === 'projects')
    .map(({ id }) => ({ id }));
}
