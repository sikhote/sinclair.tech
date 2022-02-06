import Page from 'components/pages/Pictures';
import { promises as fs } from 'fs';
import path from 'path';
import { parseISO, format } from 'date-fns';

export async function getStaticProps() {
  const picturePaths = await fs.readdir(
    path.join(process.cwd(), 'public/assets/img/pictures/'),
  );
  const pictures = picturePaths
    .filter((picture) => picture !== '.DS_Store')
    .map((picture) => {
      const src = `/assets/img/pictures/${picture}`;
      const [rawDate, location, name] = picture.split(' - ');
      const date = format(parseISO(rawDate), 'MMMM do, yyyy');
      return { src, date, location, name };
    })
    .reverse();

  return { props: { pictures } };
}

export default Page;
