import { Outlet } from 'react-router-dom'

export const AuthLayout = () => (
  <>
    <h1>header</h1>
    <section>
      <Outlet />
    </section>
  </>
)
