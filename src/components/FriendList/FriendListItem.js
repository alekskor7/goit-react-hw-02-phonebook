import PropTypes from 'prop-types';
import Style from './FriendListItem.module.css';

function FriendItem({ isOnline, avatar, name }) {
  return (
    <li className={Style.item}>
      <span
        className={Style.status}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>

      <img className={Style.avatar} src={avatar} alt={name} width="48" />
      <p className={Style.name}>{name}</p>
    </li>
  );
}

FriendItem.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};

export default FriendItem;