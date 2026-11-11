import styles from './SectionTitle.module.css';

export default function SectionTitle({ id, children }) {
  return (
    <h2 id={id} className={styles['section-title']}>
      {children}
    </h2>
  );
}
