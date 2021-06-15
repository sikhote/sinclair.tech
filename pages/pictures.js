import Page from 'components/pages/Pictures';
import { readdirSync } from 'fs';

export const getServerSideProps = () => {
  const pictures = readdirSync(`${process.cwd()}/public/assets/img/pictures/`)
    .reverse()
    .filter((picture) => picture !== '.DS_Store');
  return { props: { pictures } };
};

export default Page;
