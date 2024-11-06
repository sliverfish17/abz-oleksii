import { useUsersContext } from 'context/UserContext';
import { useCallback, useEffect, useState } from 'react';
import { IUser } from 'types/User';
import { httpClient } from 'utils/http-client';

const COUNT = 6;

export const useFetchUsers = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const { refetch, resetRefetch } = useUsersContext();

  const fetchUsers = useCallback(async (pageNum: number = 1, reset: boolean = false) => {
    setIsLoading(true);
    try {
      const urlParams = new URLSearchParams({ page: String(pageNum), count: String(COUNT) });
      const { users: newUsers, total_pages } = await httpClient.get<{
        users: IUser[];
        total_pages: number;
      }>('/users?' + urlParams.toString());

      setUsers((prevUsers) => (reset ? newUsers : [...prevUsers, ...newUsers]));
      setHasMore(pageNum < total_pages);
      setPage(pageNum);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const loadMore = () => {
    if (hasMore && !isLoading) {
      fetchUsers(page + 1);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  useEffect(() => {
    if (refetch) {
      fetchUsers(1, true);
      resetRefetch();
    }
  }, [refetch, fetchUsers, resetRefetch]);

  return { users, isLoading, hasMore, loadMore };
};
