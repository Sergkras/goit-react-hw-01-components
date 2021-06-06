import React from 'react';
import PropTypes from 'prop-types';
import anyone from '../../img/defaultAv.jpg';

import "./friendList.css";

const FriendListItem = ({ isOnline, avatar, name }) => (
  <li className="friend__list-item">
    <span className="friend__list-status" style={{ backgroundColor: isOnline === true ? "green" : "red"}} />


    <img className="avatar" src={avatar} alt="" width="48" />
    <p className="friend__list-name">{name}</p>
  </li>
);


FriendListItem.defaultProps = {
  avatar: anyone,
};


FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;