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

import ForgotpasswordPage from './pages/ForgotpasswordPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import { MemberProvider } from './context/MemberContext.jsx';
import ActivityPage from './pages/Activity/ActivityPage.jsx';



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
    element: <ProfilePage />,    
  }, 
  {
    path: "/activity",
    children:[
      {
        path: "biking",
        element:<ActivityPage/>
      },
      {
        path: "hiking",
        element:<ActivityPage/>
      },
      {
        path: "running",
        element:<ActivityPage/>
      },
      {
        path: "swimming",
        element:<ActivityPage/>
      },      
      {
        path: "walking",
        element:<ActivityPage/>
      },
      
    ],    
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(  
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>   
  ,
)
