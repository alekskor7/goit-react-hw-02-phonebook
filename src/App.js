import React from "react";
import Profile from "./components/SocialProfile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import FriendListItem from './components/FriendList/FriendListItem';
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import data from "./data/user.json";
import statisticalData from "./data/statistical-data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";
import Style from "./App.module.css";

function App() {
  return (
    <>
      <div className={Style.wrapper}>
        <div className={Style.item}>
          <Profile users={data} />
        </div>
        <div className={Style.item}>
          <Statistics stats={statisticalData} title="Upload stats" />
        </div>
        <div className={Style.item}>
          <FriendList>
            <FriendListItem friends={friends} />
          </FriendList>
        </div>
        <div className={Style.item}>
          <TransactionHistory items={transactions} />
        </div>
      </div>
    </>
  );
}

export default App;