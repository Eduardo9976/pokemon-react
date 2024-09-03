import {createBrowserRouter} from "react-router-dom"
import {Home} from "../pages/Home"
import {About} from "../components/About"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/about",
        element: <About/>,
    }
])
