import {
    GET_ORDER_ID,
} from '../actions/constants';

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
    getOrderId:[]
}

export default function (state=initialState,action) { 
    const { type, payload } = action;
    switch (type) {
        case GET_ORDER_ID: 
        return {
            ...state,
            getOrderId: payload
          };
        default : 
            return state;
    }
}