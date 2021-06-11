import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';  // saluran untuk menyalurkan tempat penyimpanan
import {createStore, applyMiddleware, combineReducers} from 'redux';  // untuk nambahin tool untuk buat store / tempatpat penyimpanan
// import {searchRobots, requestRobots} from './Reducers';

import redAuthSignInRegis from "../src/reducers/redAuthSignInRegis";
import redDestination from "../src/reducers/redDestination";
import reducerMessage from "../src/reducers/reducerMessage";
import redGetLoc from "../src/reducers/redGetLoc";
import redBudget from "./reducers/redBudget";
import redStarRate from "../src/reducers/redStarRate";
import redOnlyID from "../src/reducers/redOnlyID";
import redOnlyGuest from "../src/reducers/redOnlyGuest";
import redCheckOutDate from "../src/reducers/redCheckOutDate";
import redCekin from "../src/reducers/redCekin";
import redTotalPrice from "../src/reducers/redTotalPrice";
import redGetOrderId from "../src/reducers/redGetOrderId";




import roomDetailData from "../src/reducers/reducerGetRoomDetail";

// import rootReducers from '../src/reducers'; // ini buat pake combine reducer di file sendiri


import thunkMiddleware from 'redux-thunk';


import reportWebVitals from './reportWebVitals';


const rootReducers = combineReducers({ redAuthSignInRegis, 
                                        reducerMessage, 
                                        redDestination, 
                                        redGetLoc, 
                                        redStarRate, 
                                        redBudget, 
                                        roomDetailData,
                                        redOnlyID,
                                        redOnlyGuest,
                                        redCheckOutDate,
                                        redCekin,
                                        redTotalPrice })  //combineReducers buat menggabungkan seluruh reducers (state) yang ada di file reducer.js

// export default combineReducers({
//   redAuthSignInRegis,
//   reducerMessage,
// });

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware))

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store = {store}>
              <App />
          </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
