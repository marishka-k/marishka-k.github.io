import Container from '../Container/Container';
import SectionTitle from '../SectionTitle/SectionTitle';
import ProjectCard from '../ProjectCard/ProjectCard';
import { projects } from '../../data/projects';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className={styles.projects} aria-labelledby="projects-title">
      <Container>
        <SectionTitle id="projects-title">Проекты</SectionTitle>
        <p className={styles.projects__lead}>У каждого проекта — свой макет в Figma и опубликованный сайт на React.</p>
        <ul className={styles.projects__grid}>
          {projects.map((project) => (
            <li key={project.id} className={styles.projects__item}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
