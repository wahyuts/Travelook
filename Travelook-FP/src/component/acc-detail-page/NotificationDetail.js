import React, { useState } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import CloseIcon from '@material-ui/icons/Close';
import InfoIcon from '@material-ui/icons/Info';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';


const NotificationDetail = () => {
  const paperStyle = {
    padding: "13px 20px",
    height: 800,
    width: 720,
    overflow:'scroll'
  };

  const useStyles = makeStyles((theme) => ({
    style2: {
      marginLeft: "1px",
      color: "#5DEF78",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",

      [theme.breakpoints.down("lg")]: {
        color: "red",
      },
    },
    style1: {
      background: "black",
      borderRadius: 3,
      border: 0,
      color: "white",
      height: 48,
      float: "right",
      marginTop: "25px",
      marginRight: "1px",
      [theme.breakpoints.down("lg")]: {
        color: "red",
      },
      
    },
  }));
  
  
  return (
    <div
      style={{ display: "flex", width: 500, paddingTop: 20, paddingLeft: 20 }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid black",
        }}
      >
        <div>
          <Grid>
            <Paper style={paperStyle}>
              <Grid>
                <h5 style={{ fontSize: "22px" }}>Notifications</h5>
                <div style={{ fontSize: "13px" }}>
                  You will get the latest info and updates from us.
                </div>

                <div>
                    
                    <div style={{marginTop:'40px'}}>
                        <div style={{display:'flex', alignItems:'center'}}>
                          <InfoIcon style={{fontSize:'17px', color:'grey'}}/> &nbsp;
                          <span style={{color:'grey', fontSize:'16px'}}>Info | 16:09</span>
                        </div>
                        
                        <div style={{fontWeight:600, fontSize:'16px'}}>
                        Booking Confirmation
                        </div>

                        <div style={{fontWeight:400, fontFamily:'nunito', fontSize:'16px'}}>
                          Yay! Your booking request has been received and confirmed
                        </div>

                    </div>
                            
                    <div style={{marginTop:'40px'}}>
                        <div style={{display:'flex', alignItems:'center'}}>
                          <InfoIcon style={{fontSize:'17px', color:'grey'}}/> &nbsp;
                          <span style={{color:'grey', fontSize:'16px'}}>Info | 16:09</span>
                        </div>
                        
                        <div style={{fontWeight:600, fontSize:'16px'}}>
                        Booking Confirmation
                        </div>

                        <div style={{fontWeight:400, fontFamily:'nunito', fontSize:'16px'}}>
                          Yay! Your booking request has been received and confirmed
                        </div>

                    </div>

                    <div style={{marginTop:'40px'}}>
                        <div style={{display:'flex', alignItems:'center'}}>
                          <InfoIcon style={{fontSize:'17px', color:'grey'}}/> &nbsp;
                          <span style={{color:'grey', fontSize:'16px'}}>Info | 16:09</span>
                        </div>
                        
                        <div style={{fontWeight:600, fontSize:'16px'}}>
                        Booking Confirmation
                        </div>

                        <div style={{fontWeight:400, fontFamily:'nunito', fontSize:'16px'}}>
                          Yay! Your booking request has been received and confirmed
                        </div>

                    </div>

                    <div style={{marginTop:'40px'}}>
                        <div style={{display:'flex', alignItems:'center'}}>
                          <InfoIcon style={{fontSize:'17px', color:'grey'}}/> &nbsp;
                          <span style={{color:'grey', fontSize:'16px'}}>Info | 16:09</span>
                        </div>
                        
                        <div style={{fontWeight:600, fontSize:'16px'}}>
                        Booking Confirmation
                        </div>

                        <div style={{fontWeight:400, fontFamily:'nunito', fontSize:'16px'}}>
                          Yay! Your booking request has been received and confirmed
                        </div>

                    </div>
                        
                    <div style={{marginTop:'40px'}}>
                        <div style={{display:'flex', alignItems:'center'}}>
                          <InfoIcon style={{fontSize:'17px', color:'grey'}}/> &nbsp;
                          <span style={{color:'grey', fontSize:'16px'}}>Info | 16:09</span>
                        </div>
                        
                        <div style={{fontWeight:600, fontSize:'16px'}}>
                        Booking Confirmation
                        </div>

                        <div style={{fontWeight:400, fontFamily:'nunito', fontSize:'16px'}}>
                          Yay! Your booking request has been received and confirmed
                        </div>

                    </div>
                        
                    <div style={{marginTop:'40px'}}>
                        <div style={{display:'flex', alignItems:'center'}}>
                          <InfoIcon style={{fontSize:'17px', color:'grey'}}/> &nbsp;
                          <span style={{color:'grey', fontSize:'16px'}}>Info | 16:09</span>
                        </div>
                        
                        <div style={{fontWeight:600, fontSize:'16px'}}>
                        Booking Confirmation
                        </div>

                        <div style={{fontWeight:400, fontFamily:'nunito', fontSize:'16px'}}>
                          Yay! Your booking request has been received and confirmed
                        </div>

                    </div>
                        
                    <div style={{marginTop:'50px'}}>
                        <u style={{display:'flex', fontSize:'16px', fontWeight:700, color:'#5def78', justifyContent:'center' }}>
                          
                              Load More
                          
                        </u>
                      
                    </div>
                    
                 
                </div>
               
              </Grid>
            </Paper>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default NotificationDetail;
