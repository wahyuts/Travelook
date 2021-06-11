import React from "react";
import './Checkout1a.css'
// import { MdAccountCircle, MdNotifications, MdReceipt } from "react-icons/md";
import CheckoutProgress from "./CheckoutProgress";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import EventIcon from "@material-ui/icons/Event";
import TodayIcon from "@material-ui/icons/Today";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import DescriptionIcon from "@material-ui/icons/Description";
import DateRangeIcon from "@material-ui/icons/DateRange";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function CheckoutContent() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <>
     
      <div className="checkout1a"
        // style={{
        //   backgroundColor: "transparent",
        //   display: "flex",
        //   alignItems: "center",
        
        //   marginTop: "50px",
        //   paddingBottom: "100px",
        //   justifyContent: "center",
        // }}
      >
        <div className="checkoutborder-kiri" >
          <div className="checkout-border1a" >
            <div className="checkout-border-1a">
              <div style={{ margin: "20px" }}>
                <div style={{ paddingLeft: "40px" }}>
                  <h3> Guest Details</h3>
                </div>
                <div className="checkout-fill-in" >
                  Fill in guest details below
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      padding: "10px 0px",
                      paddingTop: "30px",
                    }}
                  >
                    <TextField
                      id="outlined-basic"
                      label="FirstName"
                      variant="outlined"
                      style={{
                        width: "50%",
                        marginRight: "30px",
                        marginLeft: "35px",
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="LastName"
                      variant="outlined"
                      style={{ width: "50%", marginRight: "35px" }}
                    />
                    {/* <input placeholder="First name" />
                  <input placeholder="Last name" /> */}
                    {/* <div
                      style={{
                        borderBottom: "1px solid #eaeaea",
                      }}
                    ></div> */}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      padding: "10px 0px",
                    }}
                  >
                    <TextField
                      id="outlined-basic"
                      label="Mobile number"
                      variant="outlined"
                      style={{
                        width: "50%",
                        marginRight: "30px",
                        marginLeft: "35px",
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      style={{ width: "50%", marginRight: "35px" }}
                    />
                    {/* <input placeholder="Email" />
                    <input placeholder="Mobile" /> */}
                  </div>
                </div>
                {/* <div
                style={{
                  display: "flex",
                  padding: "10px 0px",
                }}
              >
                <div style={{ display: "flex", flex: 1 }}>
                  <div onClick={() => console.log("change password")}>
                    <u>Change Password</u>
                  </div>
                </div>
                <div style={{}}>Save Changes</div>
              </div> */}
              </div>
              <div style={{ margin: "20px", borderTop: "1px solid #eaeaea" }}>
                <div style={{ paddingLeft: "40px", paddingTop: "20px" }}>
                  <h3> Special Request</h3>
                </div>
                <div className="checkout-fill-in">
                  Have a special request that makes you more comfortable? ask
                  here. Your request is subject{" "}
                  <p>to availability and additional fees may apply.</p>
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "10px 0px",
                      paddingTop: "30px",
                      //   paddingBottom: "10px",
                      paddingRight: "250px",
                      paddingLeft: "40px",
                      // borderTop: "1px solid #eaeaea",
                    }}
                  >
                    <FormControlLabel
                      control={
                        <GreenCheckbox
                         
                          onChange={handleChange}
                          name="checkedG"
                        />
                      }
                      label="Non-smoking Room"
                      // style={{marginRight: "250px"}}
                    />
                    <FormControlLabel
                      control={
                        <GreenCheckbox
                         
                          onChange={handleChange}
                          name="checkedG"
                        />
                      }
                      label="Connection Rooms"
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "10px 0px",
                      paddingRight: "320px",
                      paddingLeft: "40px",
                      //   margin: "0 0",
                    }}
                  >
                    <FormControlLabel
                      control={
                        <GreenCheckbox
                         
                          onChange={handleChange}
                          name="checkedG"
                        />
                      }
                      label="High Floor"
                   
                    />
                    <FormControlLabel
                      control={
                        <GreenCheckbox
                         
                          onChange={handleChange}
                          name="checkedG"
                        />
                      }
                      label="Bed type"
                      //   style={{paddingLeft: "250px"}}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "10px 0px",
                      paddingRight: "273px",
                      paddingLeft: "40px",
                    }}
                  >
                    <FormControlLabel
                      control={
                        <GreenCheckbox
                         
                          onChange={handleChange}
                          name="checkedG"
                        />
                      }
                      label="Check-in Time"
                    />
                    <FormControlLabel
                      control={
                        <GreenCheckbox
                         
                          onChange={handleChange}
                          name="checkedG"
                        />
                      }
                      label="Check-out Time"
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      padding: "10px 0px",
                      paddingRight: "873px",
                      paddingLeft: "40px",
                    }}
                  >
                    <FormControlLabel
                      control={
                        <GreenCheckbox
                       
                          onChange={handleChange}
                          name="checkedG"
                        />
                      }
                      label="Others"
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-multiline-static"
                      // label="Multiline"
                      multiline
                      rows={4}
                      label="Write your special request here"
                      // defaultValue="Write your special request here"
                      variant="outlined"
                      style={{
                        width: "100%",
                        marginLeft: "15px",
                        paddingRight: "40px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginRight: "10px", flex: 2 }}>
            <div
              style={{
                border: "1px solid #eaeaea",
                backgroundColor: "#fff",
                height: "600px",
                marginLeft: "20px",
              }}
            >
              <div
                style={{
                  margin: "10px 0px",
                  //   borderBottom: "1px solid #eaeaea",
                  paddingLeft: "60px",
                  //   paddingRight: "80px",
                  paddingBottom: "10px",
                }}
              >
                <b>Cozy Apartment in center of Bandung</b>
              </div>
              <div
                style={{
                  border: "1px solid #F3F3F3",
                  backgroundColor: "#F3F3F3",
                  height: "150px",
                }}
              >
                <div style={{ display: "flex", margin: "30px 30px" }}>
                  <div>
                    <EventIcon />
                    Check-in
                  </div>
                  <div style={{ paddingLeft: "10px", display: "grid" }}>
                    Sun, 24 Apr 2021, from 12:00
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    margin: "20px 20px",
                    paddingLeft: "12px",
                  }}
                >
                  <div>
                    <HomeIcon />
                    Check-in
                  </div>
                  <div style={{ paddingLeft: "10px", display: "grid" }}>
                    Thu, 5 May 2021, before 12:00
                  </div>
                </div>
              </div>

              <div style={{ borderBottom: "1px solid #eaeaea" }}>
                <div style={{ display: "flex", margin: "30px 30px" }}>
                  <div>
                    <PersonIcon />
                    Guest(s)
                  </div>
                  <div style={{ paddingLeft: "140px", display: "grid" }}>
                    2 persons(s)
                  </div>
                </div>
                <div style={{ display: "flex", margin: "30px 30px" }}>
                  <div>
                    <HomeIcon />
                    Facility
                  </div>
                  <div style={{ paddingLeft: "50px", display: "flex" }}>
                    1 bedroom - 1 bed - 1bath
                  </div>
                </div>
              </div>

              <div style={{ margin: "30px 30px" }}>
                <a href="">
                  <div style={{ color: "green" }}>
                    <DescriptionIcon />
                    Free cancelation
                  </div>
                </a>
              </div>

              <div style={{ margin: "30px 30px" }}>
                <a href="">
                  <div style={{ color: "green" }}>
                    <DateRangeIcon />
                    Reschedule anytime
                  </div>
                </a>
              </div>

              <div style={{ margin: "30px 30px" }}>
                <Button
                  size="large"
                  variant="outlined"
                  style={{
                    // marginLeft: 25,
                    
                    width: "100%",
                    height: "50px",
                    backgroundColor: "#1e1e1e",
                    color: "white",
                    // textTransform: "normal",
                    
                  }}
                >
                  Continue to payment
                  <ArrowForwardIcon />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutContent;

// DescriptionIcon
// DateRangeIcon
