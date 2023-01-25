import user from './data/user.json';
import Profile from './profile/Profile';

import data from './data/data.json';
import Statistics from './statistics/Statistics/Statistics';

import friends from './data/friends.json';
import FriendList from './friends/FriendList';

import transactions from './data/transactions.json';
import TransactionHistory from './transaction/TransactionHistory';

export function App() {
  return (
    <div>
      <Profile
        key={user.username}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}
