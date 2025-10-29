import { useParams, Link } from 'react-router-dom';
import { getPersonById } from '../data/people';
import styles from './PersonDetail.module.css';

function PersonDetail() {
  const { id } = useParams();
  const person = getPersonById(id);

  if (!person) {
    return (
      <div className={styles.container}>
        <div className={styles.notFound}>
          <h2>Person not found</h2>
          <Link to="/" className={styles.backLink}>← Back to People</Link>
        </div>
      </div>
    );
  }

  // Ensure image path works with base URL
  const imagePath = person.photo.startsWith('/') 
    ? import.meta.env.BASE_URL + person.photo.slice(1)
    : person.photo;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link to="/" className={styles.backLink}>← Back to People</Link>
        
        <div className={styles.profile}>
          <div className={styles.photoContainer}>
            <img src={imagePath} alt={person.name} className={styles.photo} />
          </div>
          
          <div className={styles.info}>
            <h1 className={styles.name}>{person.name}</h1>
            <p className={styles.title}>{person.title}</p>
            
            <div className={styles.introduction}>
              {person.introduction.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph.trim()}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonDetail;

