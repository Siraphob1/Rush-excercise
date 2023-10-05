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
import { MainPage } from './pages/MainPage.jsx';
import RunningPage from './pages/Activity/RunningPage.jsx';
import ForgotpasswordPage from './pages/ForgotpasswordPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,         //First page  
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

  {
    path: "/forgotpassword",
    element: <ForgotpasswordPage />,    
  },

  {
    path: "/mainpage",
    element: <MainPage />,    
  },
  {
    path: "/profilepage",
    element: <RunningPage />,    
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
