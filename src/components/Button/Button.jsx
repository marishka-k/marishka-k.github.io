import { cx } from '../../utils/cx';
import styles from './Button.module.css';

/** Кнопка-ссылка. variant: 'primary' | 'outline'; size: 'm' | 's' */
export default function Button({ href, variant = 'primary', size = 'm', external, children, className }) {
  const ext = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <a href={href} className={cx(styles.button, styles[`button_variant_${variant}`], styles[`button_size_${size}`], className)} {...ext}>
      {children}
    </a>
  );
}
