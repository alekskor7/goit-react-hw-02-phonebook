import PropTypes from 'prop-types';
import Style from './FriendList.module.css';
import FriendItem from './FriendListItem';

function FriendList({ friends }) {
  return (
    <div className={Style.friends}>
      <div className={Style.titleContainer}>
        <h2 className={Style.title}>Friends</h2>
      </div>
      <ul className={Style.friendsList}>
        {friends.map(friend => (
          <FriendItem
            key={friend.id}
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
        ))}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;