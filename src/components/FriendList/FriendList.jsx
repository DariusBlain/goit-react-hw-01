import css from "./FriendList.module.css";
import clsx from "clsx";

const FriendList = ({ friends }) => {
  return (
    <ul className={css["friend-list"]}>
      {friends.map((item) => {
        return (
          <li key={item.id} className={css["friend-item"]}>
            <FriendListItem friends={item} />
          </li>
        );
      })}
    </ul>
  );
};

const FriendListItem = ({ friends: { avatar, name, isOnline } }) => {
  return (
    <div className={css["friend-item-container"]}>
      <img src={avatar} alt="Avatar" width="64" />
      <p className={css["text-title"]}>{name}</p>
      <p
        className={clsx(css["text"], {
          [css.online]: isOnline,
          [css.offline]: !isOnline,
        })}
      >
        {isOnline ? "Online " : "Offline "}
      </p>
    </div>
  );
};

export default FriendList;

// {
//   avatar, name, isOnline;
// }
