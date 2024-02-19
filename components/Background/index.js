import styles from './styles.module.scss';

export default function Background() {
  return (
    <div className={styles.root}>
      <div className={styles.stars1} />
      <div className={styles.stars2} />
      <div className={styles.stars3} />
      <div className={styles.stars4} />
    </div>
  );
}
