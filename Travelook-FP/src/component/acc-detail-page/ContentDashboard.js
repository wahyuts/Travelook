import React from 'react'
import Dashboard from './Dashboard';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AccountDetail from './AccountDetail';
import NotificationDetail from './NotificationDetail';
import OrderDetail from './OrderDetail';
import ReviewDetail from './ReviewDetail';
import NotificationPage from './NotificationPage'


import './ContentDashboard.css'

const ContentDashboard = () => {
    return(
        <div>
            <main className="dashdash">
                <div id="menu-dashboard">
                {/* <Router> */}
                    <Dashboard/>
                {/* </Router> */}
                </div>

                <div id="content-dashboard">
                    {/* <Router> */}
                        <Switch>
                            <Route exact path='/user-dashboard/my-account'>
                                <AccountDetail/>
                            </Route>

                            <Route exact path='/user-dashboard/notifications'>
                                <NotificationPage/>
                                {/* <NotificationDetail/> */}
                            </Route>

                            <Route exact path='/user-dashboard/orders'>
                                <OrderDetail/>
                            </Route>

                            <Route exact path='/user-dashboard/review'>
                                <ReviewDetail />
                            </Route>


                        </Switch>



                    {/* </Router> */}
                </div>
            </main>
        </div>        
    )
}

export default ContentDashboard