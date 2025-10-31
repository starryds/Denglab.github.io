import styles from './NewsTab.module.css';
import { newsItems } from '../data/news'; // Import news data

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

