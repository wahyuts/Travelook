// import logo from './logo.svg';
// import Homepage from '../component/homepage/Homepage'
// import HeadNav from '../component/homepage/HeadNav';
import Homepage from '../component/homepage/Homepage';
// import {Route,Switch} from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignInPage from '../component/sign-regis-page/SignInPage';
import SignUpPage from '../component/sign-regis-page/SignUpPage';
import Searchpage from '../component/searchpage/Searchpage';
import UserDashboard from '../component/acc-detail-page/UserDashboard';
import OrderDetail from '../component/acc-detail-page/OrderDetail';
import DetailPage from '../component/detailpage/DetailPage';
import Checkout from '../component/checkout/Checkout';
import NetworkErrorPage from '../component/network-err-page/NetworkErrorPage';
import ThankYouPage from '../component/ThanksPage/ThankYouPage';
import ErrorReviewPage from '../component/network-err-page/ErrorReviewPage';





import './App.css';

function App() {
  return (
    <div>
      <Router>
       <Switch>
            <Route exact path="/" component={Homepage}/>

            <Route exact path="/user-signup" component={SignUpPage}/>
            
            <Route exact path="/user-signin" component={SignInPage}/>

            <Route exact path="/search-page" component={Searchpage}/>

            <Route exact path="/under-construction" component={NetworkErrorPage}/>

            <Route exact path="/user-dashboard/:tabs" component={UserDashboard}/>

            <Route exact path="/user-dashboard/orders/:tabs" component={OrderDetail}/>


            <Route exact path="/detail-hotel/:id" component={DetailPage} />

            <Route exact path="/check-out" component={Checkout} />

            <Route exact path="/thanks-for-choose-us" component={ThankYouPage} />
            
            <Route exact path="/Error-display-review" component={ErrorReviewPage} />



         

            
        </Switch>
        </Router>
         {/* <Checkout/> */}
        {/* <Homepage/> */}
                    {/* <Route exact path="/user-dashboard/my-account" component={UserDashboard} /> */}

    </div>
    

      
      // <SignInPage/>
  )
}

export default App;
