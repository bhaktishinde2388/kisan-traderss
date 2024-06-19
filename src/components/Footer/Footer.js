import './Footer.css';
import { Link } from 'react-router-dom';
import Logo from "./../../views/Home/image/logo.png"
import Contact from '../../views/Contact/Contact';

const Footer = ({logo,companyInfo}) => {
    return (
        <>
        <footer className="footer">
            <div className="container">
                <div className="footer-section">
                    <img className='logo' src={Logo}/>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/about">About</a></li>
                        <li><a href="/Contact">Contact</a></li>
                        <li><a href="/Product">product</a></li>
                        <li><a href="/Blog">Blogs</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4 className=' owner-info'>Contact Us</h4>
                    <p className=' owner-info'>Email: kisantraders@gmail.com</p>
                    <Link href="9822179828" className=' owner-info'><p>Contact:--Mr.Nilesh Rahane: +91 9822179828</p></Link>
                    <p className='owner-info'>Shop No 9, Marketyard, Ganesh Nagar, Sangamner, Maharashtra 422605</p>
                </div>
               
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 [Kisan Traders]. All rights reserved.</p>
                <p><a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a></p>
            </div>
     
        </footer>
        </>
    )
  
}

export default Footer;