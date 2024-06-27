import clsx from "clsx";
import css from "./FriendListItem.module.css";

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

export default FriendListItem;
