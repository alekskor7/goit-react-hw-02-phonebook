import PropTypes from 'prop-types';
import Style from './TransactionHistory.module.css';
import Transaction from './Transaction';

export default function TransactionHistroy({ items }) {
  return (
    <table className={Style.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <Transaction
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionHistroy.propTypes = {
  items: PropTypes.array,
};