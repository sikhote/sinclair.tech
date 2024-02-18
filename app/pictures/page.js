import { promises as fs } from 'fs';
import path from 'path';
import { parseISO, format } from 'date-fns';
import Pictures from 'components/Pictures';
import getMetadata from 'lib/getMetadata';

export const metadata = getMetadata('pictures');

export default async function Page() {
  const picturePaths = await fs.readdir(
    path.join(process.cwd(), 'public/assets/img/pictures/'),
  );
  const pictures = picturePaths
    .filter((picture) => picture !== '.DS_Store')
    .map((picture) => {
      const src = `/assets/img/pictures/${picture}`;
      const [rawDate, location, name] = picture.split(' - ');
      const date = format(parseISO(rawDate), 'MMMM do, yyyy');
      return { src, alt: date, date, location, name };
    })
    .reverse();

  return <Pictures pictures={pictures} height="tall" />;
}
