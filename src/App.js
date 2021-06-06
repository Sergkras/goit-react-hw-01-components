import React from "react";

import Profile from './components/profile/profile';

import user from './components/profile/user.json';

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
    </>
  );
};



export default App;
