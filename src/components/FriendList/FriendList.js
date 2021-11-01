import PropTypes from 'prop-types';
import Style from './FriendList.module.css';

function FriendList({ children }) {
  return (
    <div className={Style.friends}>
      <div className={Style.titleContainer}>
        <h2 className={Style.title}>Friends</h2>
      </div>
      <ul>{children}</ul>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.node,
};

export default FriendList;