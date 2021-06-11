import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "./Checkout.css";
import CheckoutProgress from "./CheckoutProgress";
import CheckoutCard2 from "./CheckoutCard2";
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'

// import IconButton from '@material-ui/core/IconButton';

function CheckoutNav() {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }
  const BigScreen = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 1800, })
    return isTablet ? children : null
  }

  return (
    <>

    
      <div className="checkout-container">
        <Link to = "/">
          <img
            src="/images/logo2.png"
            alt="Travelook"
            className="travelook-logo2"
          />
        </Link>
      </div>
      <div style={{ display: "flex",  justifyContent: "center", backgroundColor: "transparent",}}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            height: "25px",
            width: "25px",
            backgroundColor: "black",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            marginRight: "5px",
          }}
        >
          1
        </div>

        <div>Details</div>
        <div style={{border: "1px solid #C2C3C6", width: "50px", margin: "0 5px" , marginLeft: "15px" }}>

        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            height: "25px",
            width: "25px",
            backgroundColor: "black",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "15px",
            marginRight: "5px",
            color: "white"
          }}
        >
          2
        </div>
        
        <div>Payment</div>
        <div style={{border: "1px solid #C2C3C6", width: "50px", margin: "0 5px" , marginLeft: "15px" }}>

        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            height: "25px",
            width: "25px",
            backgroundColor: "black",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            marginLeft: "15px",
            marginRight: "5px",
            
          }}
        >
          3
        </div>
        <div>Process</div>
      </div>
      
    </div>
    
      {/* <CheckoutProgress /> */}
      


      {/* <Desktop>
      <div className="checkout-container">
        <img
          src="/images/logo2.png"
          alt="Travelook"
          className="travelook-logo2"
        />
      </div>
      <div style={{ display: "flex",  justifyContent: "center", backgroundColor: "transparent",}}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            height: "25px",
            width: "25px",
            backgroundColor: "black",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            marginRight: "5px",
          }}
        >
          1
        </div>

        <div>Details</div>
        <div style={{border: "1px solid #C2C3C6", width: "50px", margin: "0 5px" , marginLeft: "15px" }}>

        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            height: "25px",
            width: "25px",
            backgroundColor: "black",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "15px",
            marginRight: "5px",
            color: "white"
          }}
        >
          2
        </div>
        
        <div>Payment</div>
        <div style={{border: "1px solid #C2C3C6", width: "50px", margin: "0 5px" , marginLeft: "15px" }}>

        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            height: "25px",
            width: "25px",
            backgroundColor: "black",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            marginLeft: "15px",
            marginRight: "5px",
            
          }}
        >
          3
        </div>
        <div>Process</div>
      </div>
      
    </div>
    
      </Desktop> */}

    </>
    
  );
}

export default CheckoutNav;
