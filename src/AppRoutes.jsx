import Home from "./home";
import Project from "./project";
import Skills from "./Skills";
import About from "./About";
import { Navigate } from "react-router-dom";

let AppRoutes = [
    {
        path:'/home',
        element:<Home/>
    },
    {
        path:'/projects',
        element:<Project/>
    },
    {
        path:'/skills',
        element:<Skills/>
    },
    {
        path:'/about',
        element:<About/>
    },
    {
        path:"*",
        element:<Navigate to='home'/>
    }
]

export default AppRoutes