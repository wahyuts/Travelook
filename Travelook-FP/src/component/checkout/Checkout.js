import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckoutContent from "./Checkout1a/CheckoutContent";
import CheckoutNav from "./CheckoutNav";
import "./Cekcek.css";
import Checkout1b from "./Checkout1b/Checkout1b";
import Checkout1c from "./Checkout1c/Checkout1c";
import Checkout1d from "./Checkout1d/Checkout1d";
import DetailPage from "../detailpage/DetailPage";
import UserDashboard from '../acc-detail-page/UserDashboard';
import ThankYouPage from '../ThanksPage/ThankYouPage';
import Homepage from '../homepage/Homepage';
import Searchpage from '../searchpage/Searchpage';
// import DetailPage from '../detailpage/DetailPage';




// import {Switch, Route} from 'react-router-dom';

function Checkout() {
  return (
    <div className="cekcek cekcek1">
      <Router>
        <Switch>
          <Route exact path="/check-out/">
            <CheckoutContent />
          </Route>
          <Route exact path="/check-out/checkout1b">
            <Checkout1b />
          </Route>
          <Route exact path="/check-out/checkout1c">
            <Checkout1c />
          </Route>
          <Route exact path="/check-out/checkout1d">
            <Checkout1d />
          </Route>
          <Route exact path="/detail-hotel">
            <DetailPage />
          </Route>
          <Route exact path="/user-dashboard/:tabs" component={UserDashboard}/>
          <Route exact path="/thanks-for-choose-us" component={ThankYouPage} />
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/search-page" component={Searchpage}/>
          <Route exact path="/detail-hotel/:id" component={DetailPage} />

          



          
        </Switch>
      </Router>
      {/* <CheckoutNav />  */}
      {/* <CheckoutContent /> */}
      {/* <Checkout1b />
      <Checkout1c />
      <Checkout1d /> */}
    </div>
  );
}

export default Checkout;
