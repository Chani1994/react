import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import AdminPage from './components/admin/AdminPage.jsx'
import MeetingList from './components/meetings/MeetingList.jsx'
import ServicesList from './components/services/ServiceList.jsx'
import HomePage from './components/HomePage.jsx'
import UserHome from './components/user/UserHome.jsx'
import AddMeeting from './components/meetings/AddMeeting.jsx'
const routesArray = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
    errorElement: <div>error page</div>
  },
  {
    path: '/admin',
    element: <AdminPage />,
    children: [
      {
        path: 'services',
        element: <ServicesList />
      },

      {
        path: 'meetings',
        element: <MeetingList />

      }
    ]
  },
  {
    path: '/user',
    element: <UserHome />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={routesArray} />
  </React.StrictMode>,
)

