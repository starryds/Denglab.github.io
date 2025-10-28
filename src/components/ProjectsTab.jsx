import styles from './ProjectsTab.module.css';

const projects = [
  {
    title: 'Metabolic Reprogramming',
    description: 'Investigating how cancer cells alter their metabolism to support growth and survival.',
    image: '/images/reprogram.png'
  },
  {
    title: 'Protein Translation',
    description: 'Understanding translational control mechanisms in disease progression.',
    image: '/images/translation.png'
  },
  {
    title: 'Targeted Mutagenesis',
    description: 'Developing precision genome editing approaches for therapeutic applications.',
    image: '/images/mutagenesis.png'
  },
  {
    title: 'Ubiquitin Signaling',
    description: 'Exploring protein degradation pathways and their role in cellular homeostasis.',
    image: '/images/ubiquitin.png'
  }
];

function ProjectsTab() {
  return (
    <div className={styles.projectsGrid}>
      {projects.map((project, index) => (
        <div key={index} className={styles.projectCard}>
          <div className={styles.imageContainer}>
            <img src={project.image} alt={project.title} className={styles.projectImage} />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <button className={styles.learnMore}>Learn More</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsTab;

