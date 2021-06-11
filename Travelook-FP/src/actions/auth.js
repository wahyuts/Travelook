import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    SIGNIN_SUCCESS,
    SIGNIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
    CHANGE_STATE_DESTI,
    CHANGE_STATE_GETLOC,
    CHANGE_STATE_STARRATE,
    CHANGE_BUDGET,
    CHANGE_ID_HOTEL,
    CHANGE_NUMBER_GUEST,
    CHANGE_CHECKOUT_DATE,
    UPDATE_INFOUSER_SUCCESS,
    UPDATE_INFOUSER_FAILED,
    CHANGE_DATE_CHECKIN,
    CHANGE_TOTAL_PRICE,
    BOOKING_HOTEL_SUCCESS,
    BOOKING_HOTEL_FAILED,
    GET_ORDER_ID


  } from "./constants";
  
  import AuthService from "../services/auth.service";
  import UserService from "../services/user.service";

  
  export const register = (first_name, last_name, email, password, confirmPassword) => (dispatch) => {
    return AuthService.register(first_name, last_name, email, password, confirmPassword).then(
      (response) => {
        dispatch({
          type: REGISTER_SUCCESS,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: REGISTER_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };

  

  export const updateUserInfo = (first_name, last_name, email, phone_number, password, confirmPassword) => (dispatch) => {
    return AuthService.updateUserInfo(first_name, last_name, email, password, phone_number, confirmPassword).then(
      (response) => {
        dispatch({
          type: UPDATE_INFOUSER_SUCCESS,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: UPDATE_INFOUSER_FAILED,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };

  export const bookingHotel = (start, end, firstName, lastName, email, phone, number) => (dispatch) => {
    return UserService.bookingHotel(start, end, firstName, lastName, email, phone, number).then(
      (response) => {
        dispatch({
          type: BOOKING_HOTEL_SUCCESS,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: BOOKING_HOTEL_FAILED,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
  
  export const login = (email, password) => (dispatch) => {
    return AuthService.login(email, password).then(
      (data) => {
        console.log("data", data);

        if (data === undefined) {
        dispatch({
          type: SIGNIN_FAIL,
        });
      } else {
        dispatch({
          type: SIGNIN_SUCCESS,
          payload: { user: data },
        });
  
        // return Promise.resolve();
        return data;

      }

        

      },
      (error) => {
        console.log("error", error);
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: SIGNIN_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
  
  export const logout = () => (dispatch) => {
    AuthService.logout();
  
    dispatch({
      type: LOGOUT,
    });
  };

//*************************Action Redux tanpa hooks *******************************************/

//   export const setDesti = (text) => {  // baris ini itu merupakan nama Action nya  dan (text) disini itu adalah parameter inputannya
//     // console.log(text);
//     return{
//         type: CHANGE_STATE_DESTI,            // nah jadi setelah dijalankan actionnya  maka akan me return sebuah object 
//                                         //dengan property dalam cth ini type yang value nya 'CHANGE_SEARCH_FIELD'
//                                 // 'CHANGE_SEARCH_FIELD' ini adalah the real actionnya,..jadi ketika setSearchfield active maka  action 'CHANGE_SEARCH_FIELD' akan dijalankan 
//                                 // mengapa 'CHANGE_SEARCH_FIELD' huruf gede semua ? supaya lebih mudah mengingatnya karena itu action
//         payload: text   // payload ini gini maksudnya kalo actionnya aktif maka isi yang ada dipayload ini akan dikirim
//                      // ke store reduxnya karena yg dikirim ini sama dengan yg di input maka isinya sama yaotu text
//     }
    
// }

//****************************************************************************************************** */

export const setDesti = (text) => (dispatch) => {  
  // console.log(text);

  dispatch({
          type: CHANGE_STATE_DESTI,
          payload: text,
        });
}

export const setGetLoc = (text) => (dispatch) => {  
  // console.log(text);

  dispatch({
          type: CHANGE_STATE_GETLOC,
          payload: text,
        });
}

export const setGetStarRate = (text) => (dispatch) => {  
  // console.log(text);

  dispatch({
          type: CHANGE_STATE_STARRATE,
          payload: text,
        });
}

export const setBudget = (text) => (dispatch) => {  
  // console.log(text);

  dispatch({
          type: CHANGE_BUDGET,
          payload: text,
        });
}

export const setOnlyIdHotel = (text) => (dispatch) => {  
  // console.log(text);

  dispatch({
          type:CHANGE_ID_HOTEL,
          payload: text,
        });
}

export const setOnlyGuest = (text) => (dispatch) => {  
  // console.log(text);

  dispatch({
          type:CHANGE_NUMBER_GUEST,
          payload: text,
        });
}

export const setCheckOutDate = (text) => (dispatch) => {  
  // console.log(text);

  dispatch({
          type:CHANGE_CHECKOUT_DATE,
          payload: text,
        });
}

export const setCekin = (text) => (dispatch) => {  
  // console.log(text);

  dispatch({
          type:CHANGE_DATE_CHECKIN,
          payload: text,
        });
}

export const setTotalPrice = (text) => (dispatch) => {  
  // console.log(text);

  dispatch({
          type:CHANGE_TOTAL_PRICE,
          payload: text,
        });
}

export const setOrderId = (text) => (dispatch) => {  
  // console.log(text);

  dispatch({
          type:GET_ORDER_ID,
          payload: text,
        });
}

