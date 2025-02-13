import { User } from '@/lib/types/users.types';

export const usersApi = {
  async getUser(): Promise<User> {
    const response = await fetch('https://dummyjson.com/users/4');

    if (response.status !== 200) {
      throw Error('Failed to fetch user');
    }

    return await response.json();
  },
};
