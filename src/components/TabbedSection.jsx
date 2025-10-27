import { useState } from 'react';
import styles from './TabbedSection.module.css';
import PeopleTab from './PeopleTab';
import ProjectsTab from './ProjectsTab';
import NewsTab from './NewsTab';

function TabbedSection() {
  const [activeTab, setActiveTab] = useState('people');

  return (
    <section className={styles.tabbedSection}>
      <div className="container">
        <div className={styles.tabsContainer}>
          <button
            className={`${styles.tab} ${activeTab === 'people' ? styles.active : ''}`}
            onClick={() => setActiveTab('people')}
          >
            Lab People
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'projects' ? styles.active : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Lab Projects
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'news' ? styles.active : ''}`}
            onClick={() => setActiveTab('news')}
          >
            Lab News
          </button>
        </div>

        <div className={styles.tabContent}>
          {activeTab === 'people' && <PeopleTab />}
          {activeTab === 'projects' && <ProjectsTab />}
          {activeTab === 'news' && <NewsTab />}
        </div>
      </div>
    </section>
  );
}

export default TabbedSection;
