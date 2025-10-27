import styles from './Banner.module.css';

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerOverlay}></div>
      <div className={styles.bannerContent}>
        <h1 className={styles.labName}>DENG LAB</h1>
        <p className={styles.subtitle}>Yale University</p>
      </div>
    </div>
  );
}

export default Banner;
