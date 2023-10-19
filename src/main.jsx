import ReactDOM from 'react-dom/client'
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

import Firstpage from './pages/Firstpage.jsx';
import ActivityPage from './pages/Activity/ActivityPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Firstpage />,         //First page  
  },
  // fill page to element
  {
    path: "/login",
    element: <LoginPage/>,    
  },
  
  {
    path: "/signup",
    element: <SignupPage />,
    children:[
      {
        path:"/verify",                 // signup/verify
        element:<SignupPage/>           // change  <SignupPage/>
      },

    ],    
  },

  {
    path: "/forgotpassword",
    element: <ForgotpasswordPage />, 
    children:[
      {
        path:"/verify",                 // forgotpassword/reset
        element:<ForgotpasswordPage/>   // change  <ForgotpasswordPage/>
      },

    ],       
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
  {
    path: "/dashboard",
    element: <DashboardPage />,    
  }, 
]);


ReactDOM.createRoot(document.getElementById('root')).render(  
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>   
  ,
)
