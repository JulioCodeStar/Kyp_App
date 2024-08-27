import {createBrowserRouter} from 'react-router-dom'
import { 
    Auth, 
    Login, 
    MainLayout, 
    Home,
    List, 
    Register
} from '../pages'

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
            {
                path: '/pacientes',
                element: <List />
            },
            {
                path: '/pacientes/nuevo',
                element: <Register />
            }
        ]
    }
]

const createRouter = createBrowserRouter(router);
export default createRouter