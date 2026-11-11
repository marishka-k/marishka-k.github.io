import { cx } from '../../utils/cx';
import styles from './Container.module.css';

export default function Container({ className, children }) {
  return <div className={cx(styles.container, className)}>{children}</div>;
}
