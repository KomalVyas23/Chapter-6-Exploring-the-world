import { LOGO_URL } from "../utils/constants";

import { LOGO_URL } from "../utils/constants";
import {useState} from 'React';

const loggedInUser = () => {
    return true;
};
//Header Component
const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className='header'>
            <div className="logo-container">
                <img className='logo' alt='Company Logo' src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
            {
                // Won't work - We can't write statements, but we can write expressions
                //let a = 10; console.log(a);

                //Will work
                //((a = 10), console.log(a))

                isLoggedIn ?  <button className="log-btn" onClick={() => setIsLoggedIn(false)}>Logout</button> :  <button className="log-btn" onClick={() => setIsLoggedIn(true)}>Login</button>
            }
           
           
        </div>
    );
 }

 export default Header;