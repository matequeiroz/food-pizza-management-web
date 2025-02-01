import { createBrowserRouter } from 'react-router-dom'

import { DashboardPage } from '@/pages/auth/Dashboard'
import { AuthLayout } from '@/pages/layouts/auth'
import { PublicLayout } from '@/pages/layouts/public'
import { LoginPage } from '@/pages/public/Login'
import { RegisterPage } from '@/pages/public/Register'

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/',
        index: true,
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
])
