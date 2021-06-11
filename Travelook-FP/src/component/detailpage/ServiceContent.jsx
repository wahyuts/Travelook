import React from 'react'
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

function ServiceContent() {
    return (
        <>
        <Grid item xs={3}  >
              <p style={{ fontSize: 20 }}>Bathroom</p>
              <Box display="flex">
                <ul style={{ marginBottom: 10 }}>
                  <li>Hair dryer</li>
                  <li>Shampoo & Shower gel</li>
                  <li>Hot Water</li>
                </ul>
              </Box>
              <p style={{ fontSize: 20 }}>Entertainment</p>
              <ul>
                <li>Tv</li>
              </ul>

              <div style={{ paddingTop: 50 }}>
                {/* <input type="button" onClick={handleOpen}>CLICK HERE TO OPEN MODAL</input>
            <ModalAmenities open={open} onClose={handleClose} /> */}
                {/* <div>
           
             <div> */}
                <button
                //   onClick={handleModal}
                  className="button-amenities"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Show all amenities
                </button>
              </div>
            </Grid>

            <Grid item xs={3}  style={{backgroundColor: "blue"}}>
              <div style={{ display: "inline-block" }}>
                <p style={{ fontSize: 20 }}>Bedroom & Laundry</p>
                <ul>
                  <li>Iron</li>
                  <li>Washer & Hangers</li>
                </ul>

                <p style={{ fontSize: 20, paddingTop: 20 }}>
                  Internet & Office
                </p>

                <ul>
                  <li>Wifi</li>
                </ul>
              </div>
            </Grid>
        </>
    )
}

export default ServiceContent


