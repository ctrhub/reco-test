import { TopHeader } from '@/components/organisms/top-header'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/_app')({
  component: AppLayout,
})

function AppLayout() {
  return (
    <>
      <TopHeader />
      <Outlet />
    </>
  )
}
