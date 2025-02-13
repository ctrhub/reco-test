import { createFileRoute, Outlet } from '@tanstack/react-router';

import { TopHeader } from '@/components/organisms/top-header';
import { AppProviders } from '@/components/providers/app-provider';
import { userQueryOptions } from '@/lib/state/users.state';

export const Route = createFileRoute('/(app)/_app')({
  loader: async ({ context }) => {
    const user = await context.queryClient.ensureQueryData(userQueryOptions());

    return { user };
  },
  component: AppLayout,
});

function AppLayout() {
  return (
    <AppProviders>
      <TopHeader />
      <Outlet />
    </AppProviders>
  );
}
