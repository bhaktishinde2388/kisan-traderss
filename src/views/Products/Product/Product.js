// import ProductCards from "./../components/ProductCards/ProductCards"

// import{
//     createBrowserRouter,
//     RouterProvider
// } from "react-router-dom"

// const router2 = createBrowserRouter([
//     {
//         path : "/Product",
//         element:<Product/>
//     }
// ])
// root.render(
//     <>
//     <RouterProvider router={router2}/>
//     </>
//     )

import Navbar from "./../Product/Product"

const Product= () =>
    {
        return(
            <>
            <Navbar/>
            <h1>Product</h1>
            </>
        )
    }
    export default Product