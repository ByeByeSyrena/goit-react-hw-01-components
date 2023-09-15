import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";

import userJson from "../data/user.json";
import statisticsJson from "../data/data.json";

const statistics = statisticsJson;
console.log(statistics);

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
    </>
  );
};

