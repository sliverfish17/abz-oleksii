import fallbackImage from "assets/icons/user-fallback.svg";
import { IUser } from "types/User";

import styles from "./UserCard.module.scss";

// TODO add custom tooltip

export const UserCard = ({ name, email, position, photo, phone }: IUser) => (
  <div className={styles.card}>
    <img
      width={70}
      height={70}
      className={styles.card__photo}
      src={photo}
      onError={(e) => {
        (e.target as HTMLImageElement).src = fallbackImage;
      }}
      alt={`${name}'s profile image`}
    />
    <h3 className={styles.card__name} title={name}>
      {name}
    </h3>
    <div className={styles.card__info}>
      <p className={styles.card__position} title={position}>
        {position}
      </p>
      <p className={styles.card__email} title={email}>
        {email}
      </p>
      <p className={styles.card__phone} title={phone}>
        {phone}
      </p>
    </div>
  </div>
);
