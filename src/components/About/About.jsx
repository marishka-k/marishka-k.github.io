import Container from '../Container/Container';
import SectionTitle from '../SectionTitle/SectionTitle';
import { profile, services, skills } from '../../data/profile';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <Container>
        <SectionTitle id="about-title">Обо мне</SectionTitle>
        <div className={styles.about__grid}>
          <div className={styles.about__card}>
            <h3 className={styles.about__subtitle}>{services.title}</h3>
            <ul className={styles.about__list}>
              {services.items.map((item) => (
                <li key={item} className={styles.about__item}>
                  {item}
                </li>
              ))}
            </ul>
            <ul className={styles.about__facts}>
              {profile.facts.map((fact) => (
                <li key={fact} className={styles.about__fact}>
                  {fact}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.about__card}>
            <h3 className={styles.about__subtitle}>{skills.title}</h3>
            <div className={styles.about__groups}>
              {skills.groups.map((group) => (
                <div key={group.name}>
                  <p className={styles.about__group}>{group.name}</p>
                  <ul className={styles.about__list}>
                    {group.items.map((item) => (
                      <li key={item} className={styles.about__item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
