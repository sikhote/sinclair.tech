import styles from './styles.module.scss';

export default function Overlay({ children }) {
  return (
    <div className={styles.overlay}>
      <div>{children}</div>
    </div>
  );
}
