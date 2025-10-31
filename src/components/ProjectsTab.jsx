import styles from './ProjectsTab.module.css';
import { projects } from '../data/projects'; // Import projects data

function ProjectsTab() {
  return (
    <div className={styles.projectsGrid}>
      {projects.map((project, index) => {
        // Ensure image path works with base URL
        const imagePath = project.image.startsWith('/')
          ? import.meta.env.BASE_URL + project.image.slice(1)
          : project.image;
        
        return (
          <div key={index} className={styles.projectCard}>
            <div className={styles.imageContainer}>
              <img src={imagePath} alt={project.title} className={styles.projectImage} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <button className={styles.learnMore}>Learn More</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectsTab;

