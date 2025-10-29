import { Link } from 'react-router-dom';
import styles from './PersonCard.module.css';

function PersonCard({ person }) {
  // Ensure image path works with base URL
  const imagePath = person.photo.startsWith('/') 
    ? import.meta.env.BASE_URL + person.photo.slice(1)
    : person.photo;
  
  return (
    <Link to={`/people/${person.id}`} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.photoContainer}>
          <img src={imagePath} alt={person.name} className={styles.photo} />
        </div>
        <h3 className={styles.name}>{person.name}</h3>
        <p className={styles.title}>{person.title}</p>
      </div>
    </Link>
  );
}

export default PersonCard;

