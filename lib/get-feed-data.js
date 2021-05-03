import feed from 'lib/feed';
import converter from 'lib/converter';

export const getGetStaticProps = () => async (context) => {
  const { id } = context.params;
  const item = feed.find((i) => i.id === id);
  const { type } = item;
  const html = await fetch(`https://sinclair.tech/assets/md/${type}/${id}.md`)
    .then((res) => res.text())
    .then((text) => converter.makeHtml(text))
    .catch(() => null);

  return { props: { item, html }, revalidate: 86400 };
};

export const getGetStaticPaths = (kind) => () => ({
  paths: feed
    .filter(({ type }) => type === kind)
    .map(({ id }) => ({ params: { id } })),
  fallback: true,
});
