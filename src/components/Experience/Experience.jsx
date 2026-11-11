import Container from '../Container/Container';
import SectionTitle from '../SectionTitle/SectionTitle';
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import { experience } from '../../data/experience';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="experience" className={styles.experience} aria-labelledby="experience-title">
      <Container>
        <SectionTitle id="experience-title">Опыт работы</SectionTitle>
        <ul className={styles.experience__list}>
          {experience.map((job) => (
            <li key={job.company}>
              <ExperienceCard job={job} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
