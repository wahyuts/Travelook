import React,{useState,useEffect} from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EventIcon from '@material-ui/icons/Event';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import ReplayIcon from "@material-ui/icons/Replay";
import CancelIcon from "@material-ui/icons/Cancel";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import dateFormat from 'dateformat';
import NotifErrorOrderDetail from './NotifErrorOrderDetail'
import './OrderDetail.css'

const CardOrder = ({listOrder}) => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    
    const dateCekin  = listOrder.map((user,i)=>{
        const start = listOrder[i].start_date
        const convertDate = dateFormat(`${start}`, "ddd, dd mmm yyyy")
        return convertDate
    })

    const dateCekout  = listOrder.map((user,i)=>{
        const end = listOrder[i].end_date
        const convertEndDate = dateFormat(`${end}`, "ddd, dd mmm yyyy")
        return convertEndDate
    })

    const [notifyError, setNotifyError] = useState({isOpen:false, message:'', type:''})

    const closeNotifyError = () => {
        setNotifyError({
        isOpen: false,
        message: '',
        })
    };

    const handleNewFeature = () => {
        setNotifyError({
            isOpen: true,
            message: 'Coming soon !',
            })
            setAnchorEl(null)

    }



    // proses convert cth tgl 2021/6/23 ke tgl ori nya yang pake waktu  (new Date()).toISOString().slice(0,10).replace(/-/g,"")

    // console.log("start dddd", trueCekin)

    return(
        <div>
            {listOrder.map((user,i)=>{
                return (
            <div className="card-order" key={i}>
                    <div className="only-pic"> {/* className only-pic ga ada flex*/ }
                        <img src={`https://travelook.gabatch11.my.id/${listOrder[i].Room.Media[0].file_name}`} alt="Travelook-preview-hotel" className="pic-in-order"/>
                    </div>

                    <div className="detail-booking-card">
                    
                        <p>{listOrder[i].order_id}</p>
                        {/* <p>ORDER ID #XXXXX </p> */}
                        <h5>{listOrder[i].Room.name}</h5>
                        <p><EventIcon style={{marginRight:10}}/> {dateCekin[i]} - {dateCekout[i]} <span style={{marginLeft:2,marginRight:2}}>|</span> <InsertEmoticonIcon style={{marginLeft:1,marginRight: 1}}/> {listOrder[i].guest_number} Guest</p>
                        <p></p>
                        <p>{listOrder[i].Room.location.city}, {listOrder[i].Room.location.state}</p>
                    </div>


                    {
                        listOrder[i].status === "not approved"
                        ?
                        <div className="only-margin-triplle-dot">
                            <ul className="ul-tripple-dot">
                                <li className="statusRed">{listOrder[i].status}</li>
                                <li className="hover-tripple-dot"><MoreVertIcon
                                                                      aria-controls="simple-menu"
                                                                      aria-haspopup="true"
                                                                      onClick={handleClick}
                                                                    /> </li>
                            </ul>
                        </div>
                        : 
                        <div className="only-margin-triplle-dot">
                            <ul className="ul-tripple-dot">
                                <li className="status">{listOrder[i].status}</li>
                                <li className="hover-tripple-dot"><MoreVertIcon
                                                                        aria-controls="simple-menu"
                                                                        aria-haspopup="true"
                                                                        onClick={handleClick}
                                                                      /></li>
                            </ul>
                        </div>
                    }
                    {/* <div className="only-margin-triplle-dot">
                        <ul className="ul-tripple-dot">
                             <li className="status">{listOrder[i].status}</li>
                             <li className="hover-tripple-dot"><MoreVertIcon/></li>
                         </ul>
                     </div> */}
                    {/* <p>Cardlistnya disini</p> */}
                </div>
                )
            })
            }

        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={handleNewFeature}>
            <ReplayIcon href="" />
            Reschedule
            </MenuItem>
            <MenuItem onClick={handleClose}>
            <CancelIcon href="" />
            Cancel
            </MenuItem>
        </Menu>

        <NotifErrorOrderDetail
                      style={{marginTop:50, paddingLeft:500}}
                      notify={notifyError}
                      closeNotify={closeNotifyError}
                      />
                
        </div>
    )
}

export default CardOrder