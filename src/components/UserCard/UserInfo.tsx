import { Tooltip } from 'components';
import { memo } from 'react';

import styles from './UserCard.module.scss';

interface IUserInfoProps {
  textLimit: number;
  text: string;
  className?: string;
}

export const UserInfo = memo(({ textLimit, text, className = '' }: IUserInfoProps) => {
  const isTextOverflowing = text.length > textLimit;
  const displayText = isTextOverflowing ? `${text.slice(0, textLimit)}...` : text;

  return isTextOverflowing ? (
    <Tooltip text={text}>
      <p className={`${styles.card__text} ${className}`}>{displayText}</p>
    </Tooltip>
  ) : (
    <p className={`${styles.card__text} ${className}`}>{displayText}</p>
  );
});
