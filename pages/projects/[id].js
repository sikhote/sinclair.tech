import Page from 'components/pages/Projects/[id]';
import { getGetStaticProps, getGetStaticPaths } from 'lib/get-feed-data';

export default Page;

export const getStaticProps = getGetStaticProps();

export const getStaticPaths = getGetStaticPaths('projects');
