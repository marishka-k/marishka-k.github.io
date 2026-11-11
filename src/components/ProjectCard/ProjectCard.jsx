import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import { asset } from '../../utils/asset';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
  const { title, subtitle, text, tags, preview, bg, site, code } = project;
  return (
    <article className={styles['project-card']}>
      <div className={styles['project-card__preview']} style={{ background: bg }}>
        {preview ? (
          <img className={styles['project-card__image']} src={asset(`images/projects/${preview}`)} alt={`Обложка проекта ${title}`} loading="lazy" />
        ) : (
          <span className={styles['project-card__placeholder']}>{title}</span>
        )}
      </div>
      <div className={styles['project-card__body']}>
        <h3 className={styles['project-card__title']}>{title}</h3>
        <p className={styles['project-card__subtitle']}>{subtitle}</p>
        <p className={styles['project-card__text']}>{text}</p>
        <ul className={styles['project-card__tags']}>
          {tags.map((tag) => (
            <li key={tag} className={styles['project-card__tag']}>
              {tag}
            </li>
          ))}
        </ul>
        {(site || code) && (
          <div className={styles['project-card__actions']}>
            {site && (
              <Button href={site} size="s" external>
                Открыть сайт <Icon name="arrow" size={16} />
              </Button>
            )}
            {code && (
              <Button href={code} size="s" variant="outline" external>
                <Icon name="github" size={16} /> Код
              </Button>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
