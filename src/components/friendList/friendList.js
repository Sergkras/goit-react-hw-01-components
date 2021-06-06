import React from 'react';
import FriendListItem from './friend';


import './friend.css';

const FriendList = ({ friends }) => (
  <ul className="friend-list">
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