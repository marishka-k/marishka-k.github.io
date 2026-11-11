import { formatDuration, formatMonth } from '../../utils/duration';
import styles from './ExperienceCard.module.css';

export default function ExperienceCard({ job }) {
  const { company, position, start, end, duties } = job;
  const period = `${formatMonth(start)} — ${end ? formatMonth(end) : 'по настоящее время'}`;
  return (
    <article className={styles['experience-card']}>
      <h3 className={styles['experience-card__company']}>{company}</h3>
      <p className={styles['experience-card__position']}>{position}</p>
      <p className={styles['experience-card__period']}>
        {period} <span className={styles['experience-card__duration']}>· {formatDuration(start, end)}</span>
      </p>
      <ul className={styles['experience-card__duties']}>
        {duties.map((duty) => (
          <li key={duty} className={styles['experience-card__duty']}>
            {duty}
          </li>
        ))}
      </ul>
    </article>
  );
}
