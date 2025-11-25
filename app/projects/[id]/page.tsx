import Item from 'components/Item';
import feed from 'lib/feed';
import getMetadata from 'lib/getMetadata';

export type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
  const pageParams = await params;
  return getMetadata('projects', pageParams);
}

export default Item;

export async function generateStaticParams() {
  return feed
    .filter(({ type }) => type === 'projects')
    .map(({ id }) => ({ id }));
}
