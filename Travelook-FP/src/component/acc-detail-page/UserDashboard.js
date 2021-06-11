import React from 'react'
import JumboUserDash from './JumboUserDash'

const UserDashboard = () => {
    return(
        <div>
            <JumboUserDash/>

        {/* Bagian dibawah ini nanti di routing untuk gonta ganti acc, notif, order dsb,..kek di mini project */}
            {/* <AccountDetail/>
            <NotificationDetail/>
            <OrderDetail/> */}
        </div>
    )
}

export default UserDashboard