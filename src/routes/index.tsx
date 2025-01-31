import { createBrowserRouter } from 'react-router-dom'

import { DashboardPage } from '@/pages/auth/Dashboard'
import { AuthLayout } from '@/pages/layouts/auth'
import { PublicLayout } from '@/pages/layouts/public'
import { LoginPage } from '@/pages/public/Login'

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/',
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <PublicLayout />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
])
