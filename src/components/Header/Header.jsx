import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import { profile } from '../../data/profile';
import { navigation, visibleContacts } from '../../data/contacts';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.header__inner}>
        <a className={styles.header__name} href="#top">
          {profile.name}
        </a>
        <nav className={styles.header__nav} aria-label="Разделы">
          <ul className={styles.header__list}>
            {navigation.map((item) => (
              <li key={item.href}>
                <a className={styles.header__link} href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ul className={styles.header__socials}>
          {visibleContacts.map((c) => (
            <li key={c.id}>
              <a className={styles.header__social} href={c.href} target="_blank" rel="noopener noreferrer" aria-label={c.label}>
                <Icon name={c.id} size={20} />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </header>
  );
}
