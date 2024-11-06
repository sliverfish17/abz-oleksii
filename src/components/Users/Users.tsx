import { Heading } from 'components/Heading/Heading';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/UI/Button/Button';
import { UserCard } from 'components/UserCard/UserCard';
import { useUsersContext } from 'context/UserContext';
import { useCallback, useEffect, useState } from 'react';
import { IUser } from 'types/User';
import { httpClient } from 'utils/http-client';

import styles from './Users.module.scss';

const COUNT = 6;

export const Users = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const { refetch, resetRefetch } = useUsersContext();

  const fetchUsers = useCallback(async (pageNum = 1, reset = false) => {
    setIsLoading(true);
    try {
      const url = new URLSearchParams({ page: String(pageNum), count: String(COUNT) });
      const { users: newUsers, total_pages } = await httpClient.get<{
        users: IUser[];
        total_pages: number;
      }>('/users?' + url.toString());

      setUsers((prevUsers) => (reset ? newUsers : [...prevUsers, ...newUsers]));
      setHasMore(pageNum < total_pages);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  useEffect(() => {
    if (refetch) {
      fetchUsers(1, true);
      resetRefetch();
    }
  }, [refetch, fetchUsers, resetRefetch]);

  const loadMore = () => {
    if (hasMore && !isLoading) {
      setPage((prevPage) => prevPage + 1);
      fetchUsers(page + 1);
    }
  };

  return (
    <section id="users" className={styles.users}>
      <Heading tag="h2" className={styles.users__heading}>
        Working with GET request
      </Heading>
      <div className={styles.users__list}>
        {users.map((user) => (
          <UserCard {...user} key={user.id} />
        ))}
      </div>
      {hasMore && !isLoading && (
        <Button className={styles.users__button} onClick={loadMore}>
          Show more
        </Button>
      )}
      {isLoading && <Loader className={styles.users__loader} />}
    </section>
  );
};
