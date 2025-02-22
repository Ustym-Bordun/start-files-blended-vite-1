import { format } from 'date-fns';

import styles from './CryptoHistory.module.css';

const CryptoHistory = ({ transactions }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th className={styles.th}>№</th>
          <th className={styles.th}>PRICE</th>
          <th className={styles.th}>AMOUNT</th>
          <th className={styles.th}>DATE</th>
        </tr>
      </thead>

      <tbody>
        {/* <tr className={styles.tr}>
          <td className={styles.td}>1</td>
          <td className={styles.td}>3190</td>
          <td className={styles.td}>0.24843</td>
          <td className={styles.td}>02/01/2022, 1:14 PM</td>
        </tr>
        <tr className={styles.tr}>
          <td className={styles.td}>2</td>
          <td className={styles.td}>3195</td>
          <td className={styles.td}>0.088</td>
          <td className={styles.td}>05/09/2022, 2:24 PM</td>
        </tr> */}

        {transactions.map(({ id, price, amount, date }) => {
          return (
            <tr className={styles.tr} key={id}>
              <td className={styles.td}>{id}</td>
              <td className={styles.td}>{price}</td>
              <td className={styles.td}>{amount}</td>
              <td className={styles.td}>{format(new Date(date), 'Pp')}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CryptoHistory;
