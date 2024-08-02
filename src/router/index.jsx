import {createBrowserRouter} from 'react-router-dom'
import { Auth, Login, MainLayout, Home } from '../pages'

const router = [
    {
        element: <Auth />,
        children: [
            {
                path: '/login',
                element: <Login />
            }
        ]
    },
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
        ]
    }
]

const createRouter = createBrowserRouter(router);
export default createRouter