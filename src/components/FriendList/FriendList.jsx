import FriendListItem from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';
const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
};
export default FriendList;

FriendList.propType = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
    })
  ),
};

// return friends.map(friend => {
//     return (
//       <ul className={css.friendList} key={friend.id}>
//         <FriendListItem
//           avatar={friend.avatar}
//           name={friend.name}
//           isOnline={friend.isOnline}
//         />
//       </ul>
//     );
//   });
