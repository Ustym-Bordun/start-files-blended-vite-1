import styles from './StatisticsItem.module.css';

const StatisticsItem = ({ title, total, icon }) => {
  const Icon = icon;
  return (
    <>
      <Icon size="30" />
      <span className={styles.counter}>{total}</span>
      <p className={styles.text}>{title}</p>
    </>
  );
};

export default StatisticsItem;
