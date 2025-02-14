import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';

import { usersApi } from '@/lib/api/users.api';

const STATE_KEYS = {
  USER: 'user',
};

export const userQueryOptions = () =>
  queryOptions({
    queryKey: [STATE_KEYS.USER],
    queryFn: usersApi.getUser,
  });

export const useUser = () => {
  const { data, error } = useSuspenseQuery({
    queryKey: [STATE_KEYS.USER],
    queryFn: usersApi.getUser,
    staleTime: Infinity,
  });

  return { user: data, error };
};
