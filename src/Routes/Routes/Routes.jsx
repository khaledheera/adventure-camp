import { createBrowserRouter } from 'react-router-dom'
import Main from '../../Layout/Main'
import Home from '../../Pages/Home/Home/Home'
import Login from '../../Pages/Login/Login'
import SignUp from '../../Pages/SignUp/SignUp'
import Dashboard from '../../DashboardLayout/Dashboard'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import AllUsers from '../../Dashboard/AllUsers'
import Classes from '../../Pages/Classes/Classes'
import AddClasses from '../../Dashboard/AddClasses'
import ManageClasses from '../../Dashboard/ManageClasses'

import InstructorClasses from '../../Dashboard/InstructorClasses'
import SelectedClass from '../../Dashboard/SelectedClasses'
import EnrolledClasses from '../../Dashboard/EnrolledClasses'
import Instructor from '../../Pages/Instructor/Instructor'
import Payment from '../../Dashboard/Payment/Payment'
import ErrorPage from '../../Pages/ErrorPage/ErrorPage'
import PaymentHistory from '../../Dashboard/Payment/PaymentHistory'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:"/",
            element:<Home/>
        },
        {
          path:"/classes",
          element:<Classes/>
        },
        {
          path:"/instructor",
          element:<Instructor/>
        }
    ]
  },

  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },

  {
    path:"/dashboard",
    element:<PrivateRoute><Dashboard/></PrivateRoute>,
    children:[
        {
           path:"/dashboard/addClasses",
           element:<AddClasses/>
        },
        {
          path:"/dashboard/myClasses",
          element:<InstructorClasses/>
        },
        {
          path:"/dashboard/AllUsers",
          element:<PrivateRoute><AllUsers/></PrivateRoute>
        },
        {
          path:"/dashboard/manageClasses",
          element:<PrivateRoute> <ManageClasses/> </PrivateRoute>
        },
        {
          path:"/dashboard/selectedClasses",
          element:<PrivateRoute> <SelectedClass/> </PrivateRoute>
        },
        {
          path:"/dashboard/enrollClass",
          element:<PrivateRoute> <EnrolledClasses/> </PrivateRoute>
        },
        {
          path:"/dashboard/paymentHistory",
          element:<PrivateRoute> <PaymentHistory/> </PrivateRoute>
        },
        {
          path:"/dashboard/payment/:id",
          element:<Payment/>
        },
    ]
        
  
    
  }


])