import React from "react";
import PropTypes from 'prop-types';
import anyone from './profile.png';

import "./profile.css"


const Profile = ({ avatar, name, tag, location, stats }) => {

  return (
    <div className="profile">
      <div className="profile-description">
        <img
          src={avatar}
          alt="Аватар пользователя"
          className="profile-img"
        />
        <p className="profile-name">{name}</p>
        <p className="profile__tag">@{tag}</p>
        <p className="profile-location">{location}</p>
      </div>

      <ul className="profile-statistics">
        <li className="profile-statistics-item">
          <span className="profile-statistics-label">Followers</span>
          <span className="profile-statistics-quantity">{stats.followers}</span>
        </li>
        <li className="profile-statistics-item">
          <span className="profile-statistics-label">Views</span>
          <span className="profile-statistics-quantity">{stats.views}</span>
        </li>
        <li className="profile-statistics-item">
          <span className="profile-statistics-label">Likes</span>
          <span className="profile-statistics-quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  )
}

Profile.defaultProps = {
  avatar: anyone,
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
   stats: PropTypes.object,
};

export default Profile;