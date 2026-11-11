import Container from '../Container/Container';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import { asset } from '../../utils/asset';
import { profile } from '../../data/profile';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <picture className={styles.hero__picture}>
        <source media="(min-width: 1024px)" srcSet={asset('images/hero-wide.webp')} width="1680" height="900" />
        <img className={styles.hero__image} src={asset('images/hero-square.webp')} width="900" height="900" alt="Иллюстрация: девушка за ноутбуком, из экрана вылетают элементы интерфейса" fetchpriority="high" />
      </picture>
      <Container className={styles.hero__inner}>
        <div className={styles.hero__content}>
          <h1 id="hero-title" className={styles.hero__title}>
            {profile.name}
          </h1>
          <p className={styles.hero__role}>{profile.role}</p>
          <p className={styles.hero__lead}>{profile.lead}</p>
          <div className={styles.hero__actions}>
            <Button href="#projects">
              Проекты <Icon name="arrow" size={20} />
            </Button>
            <Button href="#contacts" variant="outline">
              Связаться
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
