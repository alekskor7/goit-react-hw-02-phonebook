import React from "react";
import PropTypes from "prop-types";
import Style from "./Profile.module.css";

function Profile({ users }) {
  return (
    <div className={Style.profile}>
      <div className={Style.description}>
        <img
          src={users.avatar}
          alt="Аватар пользователя"
          className={Style.avatar}
        />
        <p className={Style.name}>{users.name}</p>
        <p className={Style.tag}>@{users.tag}</p>
        <p className={Style.location}>{users.location}</p>
      </div>

      <ul className={Style.stats}>
        <li className={Style.item}>
          <span className={Style.label}>Followers</span>
          <span className={Style.quantity}>{users.stats.followers}</span>
        </li>
        <li className={Style.item}>
          <span className={Style.label}>Views</span>
          <span className={Style.quantity}>{users.stats.views}</span>
        </li>
        <li className={Style.item}>
          <span className={Style.label}>Likes</span>
          <span className={Style.quantity}>{users.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  users: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }),
};

export default Profile;