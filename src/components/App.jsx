import "../components/App.css";
import Profile from "./Profile/Profile";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";

const App = () => {
  let { username, tag, location, avatar, stats } = userData;
  return (
    <>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
export default App;
