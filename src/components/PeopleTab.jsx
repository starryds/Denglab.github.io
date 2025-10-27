import PersonCard from './PersonCard';
import styles from './PeopleTab.module.css';

const people = [
  {
    name: 'Dr. [Name]',
    role: 'Principal Investigator',
    bio: 'Lead researcher focusing on molecular biology and cancer research.',
    photo: '/images/only illustration.png'
  },
  {
    name: 'Jane Smith',
    role: 'Postdoctoral Fellow',
    bio: 'Specializing in metabolomics and proteomics analysis.',
    photo: '/images/only illustration.png'
  },
  {
    name: 'John Doe',
    role: 'Graduate Student',
    bio: 'PhD candidate working on gene regulation and epigenetics.',
    photo: '/images/only illustration.png'
  },
  {
    name: 'Sarah Johnson',
    role: 'Research Technician',
    bio: 'Supporting day-to-day lab operations and experiments.',
    photo: '/images/only illustration.png'
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
