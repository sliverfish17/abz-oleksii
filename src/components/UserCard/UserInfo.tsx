import { Tooltip } from 'components';

import styles from './UserCard.module.scss';

interface IUserInfoProps {
  textLimit: number;
  text: string;
  className?: string;
}

export const UserInfo = ({ textLimit, text, className = '' }: IUserInfoProps) => {
  if (text.length > textLimit) {
    return (
      <Tooltip text={text}>
        <p className={`${styles.card__text} ${className}`}>{text.slice(0, textLimit) + '...'}</p>
      </Tooltip>
    );
  }

  return <p className={`${styles.card__text} ${className}`}>{text}</p>;
};
