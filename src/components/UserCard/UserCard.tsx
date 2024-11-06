import fallbackImage from 'assets/icons/user-fallback.svg';
import { memo, SyntheticEvent } from 'react';
import { IUser } from 'types/User';

import styles from './UserCard.module.scss';
import { UserInfo } from './UserInfo';

const handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
  (e.target as HTMLImageElement).src = fallbackImage;
};

export const UserCard = memo(({ name, email, position, photo, phone }: IUser) => (
  <div className={styles.card}>
    <img
      width={70}
      height={70}
      className={styles.card__photo}
      src={photo || fallbackImage}
      onError={handleImageError}
      alt={`${name}'s profile`}
      loading="lazy"
    />
    <UserInfo className={styles.card__name} text={name} textLimit={29} />
    <div className={styles.card__info}>
      <UserInfo text={position} textLimit={37} />
      <UserInfo text={email} textLimit={37} />
      <p className={styles.card__text}>{phone}</p>
    </div>
  </div>
));
