import reactDOM from "react-dom/client"
import Home from "./views/Home/Home"
import About from "./views/About/About"
import Contact from "./views/Contact/Contact"


import{
    createBrowserRouter,
    RouterProvider
} from "react-router-dom"


const root = reactDOM.createRoot(document.getElementById("root"))
// const path = window.location.pathname

// if(path=="/")
//     {
//         root.render(<Home/>)
//     }

//     else if(path=="/about")
//         {
//             root.render(<About/>)
//         }

//     else if(path=="/contact")
//             {
//                 root.render(<Contact/>)
//             }

//     else{
//         root.render(
//             <h1>page not found</h1>
//         )
//     }

const router = createBrowserRouter([
    {
        path : "/",
        element:<Home/>
    },
    {
        path : "/About",
        element:<About/>
    },
    {
        path : "/Contact",
        element:<Contact/>
    }
])

root.render(<RouterProvider router={router}/>)