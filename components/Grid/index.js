import styles from './styles.module.scss';

export default function Grid({ items, ParentTag = 'ul', ChildTag = 'li' }) {
  return (
    <ParentTag className={styles.grid}>
      {items.map(({ item, key }) => (
        <ChildTag key={key}>{item}</ChildTag>
      ))}
    </ParentTag>
  );
}
