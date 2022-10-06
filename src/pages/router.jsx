import{
    createBrowserRouter,
    RouterProvider,
    Route,
} from 'react-router-dom'

import { Home } from './Home'
import { Login } from './Login'
import { SignUp } from './SignUp'
import { Dashboard } from './Dashboard'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
    {
        path: "/signup",
        element: <SignUp></SignUp>,
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
    },
    
])

export const Router = () => (<RouterProvider router={router}/>) 