import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

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

export default FriendList;
