import { Outlet } from 'react-router-dom'

export const PublicLayout = () => (
  <main className="min-h-screen min-w-full">
    <Outlet />
  </main>
)
