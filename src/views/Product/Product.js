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

import Navbar from "../../components/Navbar/Navbar"
import ProductCards from "../../components/ProductCards/ProductCards"
const Product= () =>
    {
        return(
            <>
            <Navbar/>
            <div className="cards-main-container">
<ProductCards  name="red Portable Plastic Crate"
            posterUrl="https://assets-global.website-files.com/64957750b431e096dc85ba1e/6496eeb172fa6114618de3e5_602e95666dd9ee8da90881f1_Crates-1024x576.jpeg"      
            rating="3.4..."
            mainPrice="₹560" 
            oldPrice="₹1,120 "
            percentageOff="49% off"
            cardInfo/>

<ProductCards name="Wolf Garten Handheld Gasshear (RI-LL) Cutting | head rotate by 180"
            posterUrl="https://www.kishantools.com/uploaded_files/imgae_gallery/62fe3e7c740911660829308.jpg"      
            rating="good"
            mainPrice="₹1,470" 
            oldPrice=" ₹2,300 "
            percentageOff="36% off"
            cardInfo/>

<ProductCards name="Gurudatta Portable Heavy Duty Garden Hose Reel cart (Color Red) "
            posterUrl="https://www.kishantools.com/uploaded_files/imgae_gallery/62fe3e961aa3e1660829334.jpg"      
            rating="4.1 "
            mainPrice="₹₹2,623" 
            oldPrice=" ₹4,999 "
            percentageOff="48% off"
            cardInfo/>

<ProductCards name="WOLF GARTEN Digging Shovel for Garden Works (AS-D) Spade"
            posterUrl="https://www.kishantools.com/uploaded_files/imgae_gallery/62fe3e607ac5b1660829280.jpg"      
            rating="good"
            mainPrice="₹3,260" 
            oldPrice="₹3,815 "
            percentageOff="14% off"
            cardInfo/>
 </div>
 <div className="cards-main-container">
 <ProductCards name="WOLF GARTEN Digging Shovel for Garden Works (AS-D) Spade"
            posterUrl="https://www.kishantools.com/uploaded_files/imgae_gallery/62fe3e607ac5b1660829280.jpg"      
            rating="good"
            mainPrice="₹3,260" 
            oldPrice="₹3,815 "
            percentageOff="14% off"
            cardInfo/>

<ProductCards name="WOLF GARTEN Digging Shovel for Garden Works (AS-D) Spade"
            posterUrl="https://www.kishantools.com/uploaded_files/imgae_gallery/62fe3e607ac5b1660829280.jpg"      
            rating="good"
            mainPrice="₹3,260" 
            oldPrice="₹3,815 "
            percentageOff="14% off"
            cardInfo/>

<ProductCards name="WOLF GARTEN Digging Shovel for Garden Works (AS-D) Spade"
            posterUrl="https://www.kishantools.com/uploaded_files/imgae_gallery/62fe3e607ac5b1660829280.jpg"      
            rating="good"
            mainPrice="₹3,260" 
            oldPrice="₹3,815 "
            percentageOff="14% off"
            cardInfo/>

<ProductCards name="WOLF GARTEN Digging Shovel for Garden Works (AS-D) Spade"
            posterUrl="https://www.kishantools.com/uploaded_files/imgae_gallery/62fe3e607ac5b1660829280.jpg"      
            rating="good"
            mainPrice="₹3,260" 
            oldPrice="₹3,815 "
            percentageOff="14% off"
            cardInfo/>
            </div>
            </>
        )
    }
    export default Product