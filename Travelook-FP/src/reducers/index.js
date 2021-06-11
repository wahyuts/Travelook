import redAuthSignInRegis from "./redAuthSignInRegis";
import redDestination from "./redDestination";
import reducerMessage from "./reducerMessage";
import redGetLoc from "./redGetLoc";
import redBudget from "./redBudget";
import redStarRate from "./redStarRate";
import {combineReducers} from 'redux';


const rootReducer = combineReducers({ 
    redAuthSignInRegis, 
    reducerMessage, 
    redDestination, 
    redGetLoc, 
    redStarRate, 
    redBudget })  //combineReducers buat menggabungkan seluruh reducers (state) yang ada di file reducer.js

export default rootReducer