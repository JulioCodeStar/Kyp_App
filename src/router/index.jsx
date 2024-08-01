import {createBrowserRouter} from 'react-router-dom'
import { Login, MainLayout } from '../pages'


const router = [
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/',
        element: <MainLayout />,
        children: [
            
        ]
    }
]

const createRouter = createBrowserRouter(router);
export default createRouter