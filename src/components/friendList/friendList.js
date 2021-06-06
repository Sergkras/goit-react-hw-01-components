import React from 'react';
import FriendListItem from './friend';


import './friendList.css';

const FriendList = ({ friends }) => (
  <ul className="friend__list">
    {friends.map(({ id, isOnline, avatar, name }) => (
      <FriendListItem
        key={id}
        isOnline={isOnline}
        avatar={avatar}
        name={name}
      />
    ))}
  </ul>
);


export default FriendList;