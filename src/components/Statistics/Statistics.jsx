import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';

import StatisticsItem from '../StatisticsItem/StatisticsItem';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <h3 className={styles.title}>{title}</h3>}

      <ul className={styles.list}>
        {stats.map(({ id, ...stat }) => {
          let selectedIcon;
          switch (id) {
            case '1':
              selectedIcon = FaRegThumbsUp;
              break;
            case '2':
              selectedIcon = MdPeople;
              break;
            case '3':
              selectedIcon = MdOutlineProductionQuantityLimits;
              break;
            case '4':
              selectedIcon = GiTreeDoor;
              break;
          }

          return (
            <li className={styles.item} key={id}>
              <StatisticsItem {...stat} icon={selectedIcon} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Statistics;
