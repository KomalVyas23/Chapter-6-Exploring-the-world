 import { Restaurant } from '@material-ui/icons';
import React from 'react';
 import ReactDOM from 'react-dom/client';
 import Header from './components/Header';
 import Body from './components/Body'; 

 /***
  * Header
  *     - Logo
  *     - Nav-items
  *     - Cart
  * Body
  *     - Search Input
  *     - Restaurant Container
  *         - Cards
  *             - Img, Name, Cuisines, Star Rating, Estimated time, Cost for 2
  * Footer
  *     - Copyright
  *     - Links
  *     - Address
  *     - Contact
  */

// Root Level Component
 const AppLayout = () => {
    return(
        <div className="app">
            {<Header />}
            {<Body/>}
        </div>
    );
 }

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<AppLayout/>);
