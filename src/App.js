import React from "react";
import Profile from './components/profile/profile';
import Statistics from './components/statistics/StatisticsData';
import FriendList from './components/friendList/friendList';
import TransactionHistory from './components/transactionHistory/TransactionHistory';


import user from './components/profile/user.json';
import statisticalData from './components/statistics/statistical-data.json';
import friends from './components/friendList/friends.json';
import transactions from './components/transactionHistory/transactions.json';

const App = () => {
  return (
    <>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
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
