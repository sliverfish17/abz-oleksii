import { createContext, ReactNode, useCallback, useContext, useState } from 'react';

interface UsersContextProps {
  triggerRefetch: () => void;
  refetch: boolean;
  resetRefetch: () => void;
}

const UsersContext = createContext<UsersContextProps | undefined>(undefined);

export const UsersProvider = ({ children }: { children: ReactNode }) => {
  const [refetch, setRefetch] = useState(false);

  const triggerRefetch = useCallback(() => {
    setRefetch(true);
  }, []);

  const resetRefetch = useCallback(() => {
    setRefetch(false);
  }, []);

  return (
    <UsersContext.Provider value={{ refetch, triggerRefetch, resetRefetch }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUsersContext = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error('useUsersContext must be used within a UsersProvider');
  }
  return context;
};
