import Container from '../Container/Container';
import SectionTitle from '../SectionTitle/SectionTitle';
import ProjectCard from '../ProjectCard/ProjectCard';
import { projects } from '../../data/projects';
import { cx } from '../../utils/cx';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className={styles.projects} aria-labelledby="projects-title">
      <Container>
        <SectionTitle id="projects-title">Проекты</SectionTitle>
        <p className={styles.projects__lead}>У каждого проекта — свой макет в Figma и опубликованный сайт на React.</p>
        <ul className={styles.projects__grid}>
          {projects.map((project, index) => {
            // нечётное количество: последняя карточка на всю ширину, чтобы сетка оставалась симметричной
            const wide = projects.length % 2 === 1 && index === projects.length - 1;
            return (
              <li key={project.id} className={cx(styles.projects__item, wide && styles.projects__item_wide)}>
                <ProjectCard project={project} wide={wide} />
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
