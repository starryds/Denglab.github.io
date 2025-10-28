import styles from './PersonCard.module.css';

function PersonCard({ person }) {
  return (
    <div className={styles.card}>
      <div className={styles.photoContainer}>
        <img src={person.photo} alt={person.name} className={styles.photo} />
      </div>
      <h3 className={styles.name}>{person.name}</h3>
      <p className={styles.role}>{person.role}</p>
      <p className={styles.bio}>{person.bio}</p>
    </div>
  );
}

export default PersonCard;

