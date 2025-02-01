import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { routers } from './routes'

function App() {
  return (
    <>
      <Toaster richColors />
      <HelmetProvider>
        <Helmet titleTemplate="%s | Pizza Food" />
        <RouterProvider router={routers} />
      </HelmetProvider>
    </>
  )
}

export default App
