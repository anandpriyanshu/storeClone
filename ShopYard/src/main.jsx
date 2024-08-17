import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './routes/Home.jsx'
import Bags from './routes/Bags.jsx'


const router = createBrowserRouter([



  {
    path: '/', element: <App />,
    children: [
      {
        path: '/', element: <Home />
      },
      {
        path: '/bag', element: <Bags />
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
