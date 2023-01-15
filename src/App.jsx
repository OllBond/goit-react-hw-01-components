import Profile from './components/Profile';
import user from './data/user.json';
export const App = () => {
  return (
    <>
      <Profile
        key={user.username}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        // username="Jacques Gluke"
        // tag="jgluke"
        // location="Ocho Rios, Jamaica"
        // avatar="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
        // stats="5603 4827 1308"
      />
    </>
  );
};
