import css from "./TransactionHistory.module.css";

const TransactionHistory = (items) => {
  return (
    <table className={css["table"]}>
      <thead className={css["thead"]}>
        <tr className={css["tr"]}>
          <th className={css["th"]}>Type</th>
          <th className={css["th"]}>Amount</th>
          <th className={css["th"]}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={css["tr-body"]} key={id}>
              <td className={css["td"]}>{type}</td>
              <td className={css["td"]}>{amount}</td>
              <td className={css["td"]}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
