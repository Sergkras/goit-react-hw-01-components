import React from 'react';

import "./App.css";

import Profile from './components/Profile'
import Statistics from './components/Statistics';
import FriendList from './components/Friendlist';
import TransactionHistory from './components/TransactionHistory';

import user from './components/Profile/dataUser/user.json';
// import statisticalData from './components/Statistics.json';
// import friends from './components/friend-list/friends.json';
// import transactions from './components/transaction-history/transactions.json';

const App = () => {
  return (
    <>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        // followers={user.stats.followers}
        // views={user.stats.views}
        // likes={user.stats.likes}
        stats={user.stats}

      />

      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;