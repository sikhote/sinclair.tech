import Page from 'components/pages/Pictures';
import path from 'path';
import { readdirSync } from 'fs';

export const getServerSideProps = () => {
  const pictures = readdirSync(
    path.join(__dirname, '../../../public/assets/img/pictures/'),
  )
    .reverse()
    .filter((picture) => picture !== '.DS_Store');
  return { props: { pictures } };
};

export default Page;
