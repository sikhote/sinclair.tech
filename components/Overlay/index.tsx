import styles from './styles.module.scss';

export interface Props {
  children: React.ReactNode;
}

export default function Overlay({ children }: Props) {
  return (
    <div className={styles.overlay}>
      <div>{children}</div>
    </div>
  );
}
