import {
    CHANGE_CHECKOUT_DATE,
} from '../actions/constants';
import moment from "moment"


//************ini adalah reducer redux tanpa hooks********************* */

// const initialStateSearch = {
//     desti:'',
    
// }

// export const searchDesti = (state=initialStateSearch,action={}) => {   
//     switch (action.type) {
//         case CHANGE_STATE_DESTI:  
//             return Object.assign({}, state, {desti:action.payload});
//         default : 
//             return state;
//     }
// }

// ********************************************************************

//***************ini reducer Redux with Hooks****************************** */
const initialState = {
    getCheckOutDate:[]
}

export default function (state=initialState,action) { 
    const { type, payload } = action;
    switch (type) {
        case CHANGE_CHECKOUT_DATE: 
        return {
            ...state,
            getCheckOutDate: payload
          };
        default : 
            return state;
    }
}