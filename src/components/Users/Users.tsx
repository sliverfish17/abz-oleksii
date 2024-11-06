import { Heading } from 'components/Heading/Heading';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/UI/Button/Button';
import { UserCard } from 'components/UserCard/UserCard';
import { useFetchUsers } from 'hooks/useFetchUsers';

import styles from './Users.module.scss';

export const Users = () => {
  const { users, isLoading, hasMore, loadMore } = useFetchUsers();

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
        !isLoading && <p>There are no users at this moment</p>
      )}
      {hasMore && !isLoading && (
        <Button className={styles.users__button} onClick={loadMore}>
          Show more
        </Button>
      )}
      {isLoading && <Loader className={styles.users__loader} />}
    </section>
  );
};
