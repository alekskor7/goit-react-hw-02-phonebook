import PropTypes from 'prop-types';
import Style from './FriendListItem.module.css';

function FriendListItem({ friends }) {
  return friends.map(friend => (
    <li className={Style.item} key={friend.id}>
      <span className={friend.isOnline ? Style.online : Style.offline}> </span>
      <img
        className={Style.avatar}
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className={Style.name}>{friend.name}</p>
    </li>
  ));
}

FriendListItem.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendListItem;