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

// import InstructorClasses from '../../Dashboard/InstructorClasses'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children:[
        {
            path:"/",
            element:<Home/>
        },
        {
          path:"/classes",
          element:<Classes/>
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
          // element:<InstructorClasses/>
        },
        {
          path:"/dashboard/AllUsers",
          element:<PrivateRoute><AllUsers/></PrivateRoute>
        }
    ]
    
  }


])