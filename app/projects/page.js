import Feed from 'components/Feed';
import getMetadata from 'lib/getMetaData';

export const metadata = getMetadata('projects');

export default async function Page() {
  return <Feed type="projects" />;
}
