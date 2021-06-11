import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import React from 'react'


export default function NotifErrorBooking(props) {
    const {notify, closeNotify} = props;

    // const {notify, setNotify} = props;

    return (
        <Snackbar
        open={notify.isOpen}
        autoHideDuration={3000}
        onClose={closeNotify}
        anchorOrigin={{vertical:'top', horizontal:'center'}}
        // style={{marginTop:75}}
        style={{marginTop:75}}
        >
    
            <Alert severity="error">
                {notify.message}
            </Alert>
        </Snackbar>
    )
}