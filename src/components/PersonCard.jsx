import { Link } from 'react-router-dom';
import styles from './PersonCard.module.css';

function PersonCard({ person }) {
  return (
    <Link to={`/people/${person.id}`} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.photoContainer}>
          <img src={person.photo} alt={person.name} className={styles.photo} />
        </div>
        <h3 className={styles.name}>{person.name}</h3>
        <p className={styles.title}>{person.title}</p>
      </div>
    </Link>
  );
}

export default PersonCard;

