import { TopHeader } from '@/components/organisms/top-header'
import { AppProviders } from '@/components/providers/app-provider'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/_app')({
  component: AppLayout,
})

function AppLayout() {
  return (
    <AppProviders>
      <TopHeader />
      <Outlet />
    </AppProviders>
  )
}
