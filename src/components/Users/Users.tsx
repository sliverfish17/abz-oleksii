import { Heading } from 'components/Heading/Heading';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/UI/Button/Button';
import { UserCard } from 'components/UserCard/UserCard';
import { useFetchUsers } from 'hooks/useFetchUsers';
import { IUser } from 'types';

import styles from './Users.module.scss';

export const Users = () => {
  const { isLoading, hasMore, loadMore } = useFetchUsers();

  const users: IUser[] = [];

  return (
    <section id="users" className={styles.users}>
      <Heading tag="h2" className={styles.users__heading}>
        Working with GET request
      </Heading>
      {users.length ? (
        <div className={styles.users__list}>
          {users.map((user) => (
            <UserCard {...user} key={user.id} />
          ))}
        </div>
      ) : (
        !isLoading && (
          <Heading tag="h2" className={styles.users__heading}>
            There are no users at this moment.
          </Heading>
        )
      )}
      {users.length && hasMore && !isLoading ? (
        <Button className={styles.users__button} onClick={loadMore}>
          Show more
        </Button>
      ) : null}
      {isLoading && <Loader className={styles.users__loader} />}
    </section>
  );
};
