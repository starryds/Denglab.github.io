import styles from './LabIntro.module.css';

function LabIntro() {
  return (
    <section className={styles.labIntro}>
      <div className="container">
        <h2 className={styles.title}>From Mechanism to Therapy</h2>
        <p className={styles.content}>
          The Deng Lab focuses on understanding and overcoming therapy resistance in advanced prostate cancer. By integrating functional genomics, metabolomics, and tumor modeling, the lab investigates how alterations at the transcriptional and translational levels drive lineage plasticity and metabolic rewiring that enable tumors to evade androgen receptor–targeted therapies. Through these studies, the Deng Lab seeks to identify key molecular vulnerabilities and translate mechanistic insights into novel therapeutic strategies for lethal prostate cancer.
        </p>
      </div>
    </section>
  );
}

export default LabIntro;

