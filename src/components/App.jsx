import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import userJson from "../data/user.json";
import statisticsJson from "../data/data.json";
import friendsJson from "../data/friends.json";
import transactionsJson from "../data/transactions.json";


const friends = friendsJson;
const statistics = statisticsJson;
const transactions = transactionsJson;

const { username, tag, location, avatar, stats } = userJson;
const { followers, views, likes } = stats;

export const App = () => {
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={followers}
        views={views}
        likes={likes}
      />
      <Statistics
        title="Upload stats"
        statistics={statistics} />
      <FriendList
        friends={friends} />
      <TransactionHistory
        items={transactions} />
    </>
  );
};

