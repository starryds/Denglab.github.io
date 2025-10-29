import styles from './PeopleTab.module.css';
import PersonCard from './PersonCard';
import { people } from '../data/people';

function PeopleTab() {
  return (
    <div className={styles.peopleGrid}>
      {people.map((person) => (
        <PersonCard key={person.id} person={person} />
      ))}
    </div>
  );
}

export default PeopleTab;

