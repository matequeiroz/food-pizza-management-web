import { Outlet } from 'react-router-dom'

export const PublicLayout = () => (
  <>
    <h1>Public</h1>
    <section>
      <Outlet />
    </section>
  </>
)
