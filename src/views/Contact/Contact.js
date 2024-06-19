import ContactImg from "./contactImg/contactus2.jpg"
import Navbar from "./../../components/Navbar/Navbar"
import "./../Contact/Contact.css"
import Footer from "../../components/Footer/Footer"
import Button from "../../components/Buttons/Button"
import { Link } from "react-router-dom"
const Contact= () =>
    {
        return(
            <>
            <Navbar/>
            <div  className="contact-container">
           
            <img className="contact-backgrounf-img" src={ContactImg}/>
            <div  className="info">
            <p className="main-heading">Wholesaler in Sangamner, Maharashtra</p>
            <p  className="sub-heading"><b>Address:</b> Shop No 9, Marketyard, Ganesh Nagar, Sangamner, Maharashtra 422605</p>
            </div>
            <div>
                <div className="BODY">
                    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3759.1479427206846!2d74.2010737742652!3d19.578161536018072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd019e811a28f5%3A0xc42d12c772eac672!2sKisan%20Traders!5e0!3m2!1sen!2sin!4v1715539588407!5m2!1sen!2sin"
                    width="500" height="530" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
           </div>

            <div className="heading ">
            <h1>Contact Us</h1>
            <input className="text-box" type="text" placeholder="Enter Full Name"/><br></br><br></br>
            <input className="text-box" type="text" placeholder="Enter city"/><br></br><br></br>
            <input className="text-box" type="number" placeholder="Enter mobile number"/><br></br><br></br>
            <input className="text-box" type="text" placeholder="product name"/>
            <Link className="c-btn" to="/"> <Button  text="Order Now"/></Link>
            </div>
            </div>
            <Footer/>
            </>
        )
    }
    export default Contact