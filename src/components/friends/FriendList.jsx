import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from './friendListItem/FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      <FriendListItem friends={friends} />
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
    }).isRequired
  ).isRequired,
};
