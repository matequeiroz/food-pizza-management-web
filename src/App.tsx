import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { routers } from './routes'

function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Pizza Food" />
      <RouterProvider router={routers} />
    </HelmetProvider>
  )
}

export default App
