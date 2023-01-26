import { FaCircle } from 'react-icons/fa';
import css from './FriendListItem.module.css';

export function FriendListItem({ friends }) {
  return (
    <>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className={css.item} key={id}>
          <span className={css.status}>
            {isOnline ? <FaCircle color="green" /> : <FaCircle color="red" />}
          </span>
          <img
            className={css.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{name} </p>
        </li>
      ))}
    </>
  );
}
