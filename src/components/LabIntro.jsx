import styles from './LabIntro.module.css';

function LabIntro() {
  return (
    <section className={styles.labIntro}>
      <div className="container">
        <h2 className={styles.title}>About the Lab</h2>
        <p className={styles.content}>
          Your lab description goes here. Replace this placeholder text with information 
          about your lab's mission, research focus, and key objectives. This is where you 
          can introduce visitors to your scientific work and provide context about your 
          research program at Yale University.
        </p>
      </div>
    </section>
  );
}

export default LabIntro;

