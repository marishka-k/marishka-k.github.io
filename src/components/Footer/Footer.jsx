import Container from '../Container/Container';
import { profile } from '../../data/profile';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footer__inner}>
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>
          Сайт сделан на React —{' '}
          <a className={styles.footer__link} href="https://github.com/marishka-k/marishka-k.github.io" target="_blank" rel="noopener noreferrer">
            код на GitHub
          </a>
        </p>
      </Container>
    </footer>
  );
}
