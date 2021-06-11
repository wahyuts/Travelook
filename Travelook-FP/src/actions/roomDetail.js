import { GET_ROOM_DETAIL_SUCCESS, GET_ROOM_DETAIL_FAIL } from "./constants";
import axios from "axios";

export const getRoomDetail = (id) => (dispatch) => {
  axios
    //   untuk get data memakai parameter "id"
    .get(`https://travelook.gabatch11.my.id/room/detail/${id}`)
    // setelah get data dan berhasil ada response akan mengirim data ke reducer dengan type "GET_ROOM_DETAIL_SUCCESS" dan datanya berisikan "response.data.data"
    .then((response) =>
      // console.log(response) untuk memuncul data dari response
      dispatch({ type: GET_ROOM_DETAIL_SUCCESS, payload: response.data.data})
    )
    // jika gagal get ada / tidak ada data akan masuk catch dimana akan mengirim data ke reducer berupa type "GET_ROOM_DETAIL_FAIL" dan object error yang berisi " error" dari callback cathc
    .catch((error) => dispatch({ type: GET_ROOM_DETAIL_FAIL, error: error }));
};
