import React from "react";
import "./Checkout1.css";

function CheckoutCard1() {
  return (
    <div style={{ display: "flex",  justifyContent: "center", backgroundColor: "#F3F3F3",}}>
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
    // <div className="checkout-card">
    //     <div className="checkout-card-1">
    //     <h1>card 1</h1>
    //     </div>

    //     <div className="checkout-card-2">
    //     <h1>card 2</h1>
    //     </div>

    // </div>
  );
}

export default CheckoutCard1;
