import {
    CHANGE_DATE_CHECKIN,
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
    getCekin:""
}

export default function (state=initialState,action) { 
    const { type, payload } = action;
    switch (type) {
        case CHANGE_DATE_CHECKIN: 
        return {
            ...state,
            getCekin: payload
          };
        default : 
            return state;
    }
}