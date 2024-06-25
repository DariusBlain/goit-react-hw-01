import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css["container"]}>
      <div className={css["avatar-container"]}>
        <img className={css["img"]} src={image} alt="User avatar" />
        <p className={css["text-name"]}>{name}</p>
        <p className={css["text"]}>@{tag}</p>
        <p className={css["text"]}>{location}</p>
      </div>

      <ul className={css["stats-list"]}>
        <li className={css["stats-item"]}>
          <span>Followers</span>
          <span className={css["stats-item-bold"]}>{stats.followers}</span>
        </li>
        <li className={css["stats-item"]}>
          <span>Views</span>
          <span className={css["stats-item-bold"]}>{stats.views}</span>
        </li>
        <li className={css["stats-item"]}>
          <span>Likes</span>
          <span className={css["stats-item-bold"]}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
