import {
  GET_ROOM_DETAIL_SUCCESS,
  GET_ROOM_DETAIL_FAIL,
} from "../actions/constants";

// menampung data dari reducer
const initialState = { error: null, detail: []};
// untuk membaca data dari action 
const roomDetailData = (state=initialState, action) => {
    // menginisialisasi payload dan type sebagai bagian dari action 
    const {payload,type,error} = action
    switch (type) {
        // jika ada type success maka array kosong "detail" dari initialState akan terisi oleh objectpayload dari action 
        case GET_ROOM_DETAIL_SUCCESS : 
        return {...state, detail:payload}
        // jika ada type fail akan muncul object array kosong 
        case GET_ROOM_DETAIL_FAIL : 
        return {...state, detail: [], error:error}
        default : 
        return {...state}
    }
}
export default roomDetailData;