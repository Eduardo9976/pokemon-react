import {RouterProvider} from "react-router-dom"
import {router} from "./router"
import "./scss/index.scss"
import {GlobalProvider} from "./context/GlobalContext/GlobalContext.tsx";

function App() {
    return (
        <GlobalProvider>
            <RouterProvider router={router}/>
        </GlobalProvider>
    )
}

export default App
