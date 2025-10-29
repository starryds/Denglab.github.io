import styles from './PeopleTab.module.css';
import PersonCard from './PersonCard';

const people = [
  {
    name: 'Dr. Deng',
    role: 'Principal Investigator',
    bio: 'Leading research in cancer metabolism and therapeutic development.',
    photo: '/images/with logo.jpeg'
  }
];

function PeopleTab() {
  return (
    <div className={styles.peopleGrid}>
      {people.map((person, index) => (
        <PersonCard key={index} person={person} />
      ))}
    </div>
  );
}

export default PeopleTab;

