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

const transactions = transactionsJson.map(transaction => ({
  ...transaction,
  amount: Number(transaction.amount),
}));

const { username, tag, location, avatar, stats } = userJson;


export const App = () => {
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
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

