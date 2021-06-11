import {
    CHANGE_ID_HOTEL,
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
    getOnlyIdHotel:[]
}

export default function (state=initialState,action) { 
    const { type, payload } = action;
    switch (type) {
        case CHANGE_ID_HOTEL: 
        return {
            ...state,
            getOnlyIdHotel: payload
          };
        default : 
            return state;
    }
}