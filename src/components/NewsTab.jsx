import styles from './NewsTab.module.css';

const newsItems = [
  {
    date: 'January 2025',
    title: 'PCF Young Investigator Award',
    description: 'Our group receives a PCF Young Investigator Award to accelerate metabolism-driven research projects in prostate cancer.',
    type: 'award'
  },
  {
    date: 'December 2024',
    title: 'New Publication: IWS1-CPS1 Axis Publication',
    description: 'Mechanistic study in mCRPC uncovering metabolic rewiring and resistance mechanisms.',
    type: 'publication'
  },
  {
    date: 'November 2024',
    title: 'Welcome New Postdoc - Alex Lee',
    description: 'Alex joins the lab to lead epigenomics and CUT&RUN efforts, bringing expertise in chromatin biology.',
    type: 'news'
  },
  {
    date: 'October 2024',
    title: 'Dual-PROTACs Targeting GR & AR',
    description: 'Preprint describing a degrader platform to overcome AR-therapy resistance in prostate cancer.',
    type: 'publication'
  }
];

function NewsTab() {
  return (
    <div className={styles.newsContainer}>
      {newsItems.map((item, index) => (
        <div key={index} className={styles.newsItem}>
          <div className={styles.newsIcon}>
            {item.type === 'award' && '🏆'}
            {item.type === 'publication' && '📄'}
            {item.type === 'news' && '📢'}
          </div>
          <div className={styles.newsContent}>
            <span className={styles.date}>{item.date}</span>
            <h3 className={styles.newsTitle}>{item.title}</h3>
            <p className={styles.newsDescription}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsTab;
