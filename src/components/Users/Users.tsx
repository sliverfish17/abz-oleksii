import { Button } from "components/Button/Button";
import { Heading } from "components/Heading/Heading";
import { Loader } from "components/Loader/Loader";
import { UserCard } from "components/UserCard/UserCard";
import { useEffect, useState, useCallback } from "react";
import { IApiResponse } from "types/Api";
import { IUser } from "types/User";
import { httpClient } from "utils/http-client";

import styles from "./Users.module.scss";

const COUNT = 6;

interface IUserResponse extends IApiResponse {
  users: IUser[];
}

export const Users = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchUsers = useCallback(async (pageNum: number) => {
    setIsLoading(true);
    try {
      const { users: newUsers, total_pages } =
        await httpClient.get<IUserResponse>(
          `/users?page=${pageNum}&count=${COUNT}`
        );

      setUsers((prevUsers) => [...prevUsers, ...newUsers]);
      setHasMore(pageNum < total_pages);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (hasMore) {
      fetchUsers(page);
    }
  }, [fetchUsers, page, hasMore]);

  const loadMore = useCallback(() => {
    if (hasMore && !isLoading) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [hasMore, isLoading]);

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
