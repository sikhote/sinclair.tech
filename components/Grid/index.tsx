import styles from './styles.module.scss';
import type { GridItem } from 'lib/types';

export interface Props {
  items: GridItem[];
  source?: string;
  ChildTag?: keyof React.JSX.IntrinsicElements;
  ParentTag?: keyof React.JSX.IntrinsicElements;
}

export default function Grid({
  items,
  ParentTag = 'ul',
  ChildTag = 'li',
}: Props) {
  return (
    <ParentTag className={styles.grid}>
      {items.map(({ item, key }) => (
        <ChildTag key={key}>{item}</ChildTag>
      ))}
    </ParentTag>
  );
}
