import React from "react";
import "./Checkout1b.css"
import EventIcon from "@material-ui/icons/Event";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import DescriptionIcon from "@material-ui/icons/Description";
import DateRangeIcon from "@material-ui/icons/DateRange";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

function Checkout1b() {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
    <div className="checkout1b">
        <h1> test </h1>
    </div>
      <div
        style={{
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "center",
          // height: "100vh",
          marginTop: "50px",
          paddingBottom: "100px",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "80%", display: "flex" }}>
          <div style={{ flex: 4, marginLeft: "10px" }}>
            <div
              style={{
                border: "1px solid #eaeaea",
                backgroundColor: "#fff",
                height: "200px",
                marginRight: "50px",
                width: "1050px",
                // display: "flex",
              }}
            >
              <div style={{ margin: "20px" }}>
                <div style={{ paddingLeft: "40px" }}>
                  <h3> Payment Method</h3>
                </div>
                <div style={{ fontSize: "12px", paddingLeft: "40px" }}>
                  Select one of this method
                </div>
                <div>
                  <div
                    style={{
                    //   display: "flex",
                      justifyContent: "space-around",
                      padding: "10px 0px",
                      paddingTop: "20px",
                      paddingLeft: "35px",
                      //   borderBottom: "1px solid #eaeaea",
                    }}
                  >
                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={value}
                    //   style={{display: "flex",}}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Bank Transfer - BCA a.n PT Jalan Jalan Santai 4273987217"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Virtual Account"
                      />
                      {/* <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      /><FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    /> */}
                      {/* <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                      />
                      <FormControlLabel
                        value="disabled"
                        disabled
                        control={<Radio />}
                        label="(Disabled option)"
                      /> */}
                    </RadioGroup>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      padding: "10px 0px",
                    }}
                  >
                    {/* <TextField
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
                    /> */}
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
              {/* <div style={{ margin: "20px", borderTop: "1px solid #eaeaea" }}> */}
              {/* <div style={{ paddingLeft: "40px", paddingTop: "20px" }}>
                  <h3> Special Request</h3>
                </div> */}
              {/* <div style={{ fontSize: "12px", paddingLeft: "40px" }}>
                  Have a special request that makes you more comfortable? ask
                  here. Your request is subject{" "}
                  <p>to availability and additional fees may apply.</p>
                </div> */}
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
                  {/* <FormControlLabel
                      control={
                        <GreenCheckbox
                          
                          onChange={handleChange}
                          name="checkedG"
                        />
                      }
                      label="Non-smoking Room"
                      
                    />
                    <FormControlLabel
                      control={
                        <GreenCheckbox
                          onChange={handleChange}
                          name="checkedG"
                        />
                      }
                      label="Connection Rooms"
                    /> */}
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
                  {/* <FormControlLabel
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
                      
                    /> */}
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
                  {/* <FormControlLabel
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
                    /> */}
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
                  {/* <FormControlLabel
                      control={
                        <GreenCheckbox
                          onChange={handleChange}
                          name="checkedG"
                        />
                      }
                      label="Others"
                    /> */}
                </div>
                <div>
                  {/* <TextField
                      id="outlined-multiline-static"
                      multiline
                      rows={4}
                      label="Write your special request here"
                      variant="outlined"
                      style={{
                        width: "100%",
                        marginLeft: "15px",
                        paddingRight: "40px",
                      }}
                    /> */}
                </div>
              </div>
              {/* </div>   ini tutup border top special request*/}
            </div>
          </div>
          <div style={{ marginRight: "10px", flex: 2 }}>
            <div
              style={{
                border: "1px solid #eaeaea",
                backgroundColor: "#fff",
                height: "600px",
                marginLeft: "20px",
                // marginRight: "100px",
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
                  <div style={{ color: "green",}}>
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
                    // borderTop: "1px solid #eaeaea",
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
      {/* <div className="checkout1b">
            <div className="checkout1b-container">
                <div className="checkout1b-container-1">
                    <div className="checkout1b-box-left">
                        <div className="checkout1b-box-leftside"
                        >

                        </div>
                    </div>
                </div>
            </div>
        </div> */}
    </>
  );
}

export default Checkout1b;
