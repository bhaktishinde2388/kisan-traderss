import Button from "../Buttons/Button"
import "./../ProductCards/ProductCard.css"
import CrateImg from "./product-card-img/crate3.jpg"
import "./../Buttons/Button.css"
import About from "./../../views/About/About"
const ProductCards =({ name,posterUrl,rating,cardInfo,mainPrice,oldPrice,percentageOff})=>
    {
        return(
            <>
            <div className="cards-container">
           <img className="card-img" src={posterUrl}/>
           <div className="card-body">
             <h3>{name}</h3>
             <p>{cardInfo}</p>            
             <span className="price">{mainPrice}</span><br/><br></br>
             <span className="old-price"><del>{oldPrice}</del></span>
             <span className="percentage-off">{percentageOff}</span>
             <a href="/about"></a><Button text="view more"/><a/>
             <h4>Rating:{rating}{rating=="good" ? "⭐⭐" : "⭐⭐⭐⭐"}
             
             </h4>
           </div>
      </div>
            </>
        )
    }

    export default ProductCards