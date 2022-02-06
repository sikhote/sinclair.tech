import feed from 'lib/feed';
import converter from 'lib/converter';
import { promises as fs } from 'fs';

export const getGetStaticProps = () => async (context) => {
  const { id } = context.params;
  const item = feed.find((i) => i.id === id);
  const { type } = item;
  const md = await fs.readFile(`public/assets/md/${type}/${id}.md`, 'utf8');
  const html = converter.makeHtml(md);
  return { props: { item, html }, revalidate: 86400 };
};

export const getGetStaticPaths = (kind) => () => ({
  paths: feed
    .filter(({ type }) => type === kind)
    .map(({ id }) => ({ params: { id } })),
  fallback: true,
});
