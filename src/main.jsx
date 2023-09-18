import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignupPage from './pages/SignupPage.jsx';
import LoginPage from './pages/LoginPage.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,    
  },
  // fill page to element
  {
    path: "/login",
    element: <LoginPage/>,    
  },
  
  {
    path: "/signup",
    element: <SignupPage />,    
  },

  // {
  //   path: "/mainpage",
  //   element: <App />,    
  // },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
