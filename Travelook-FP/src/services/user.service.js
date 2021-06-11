import {useState} from 'react';
import axios from "axios";
import authHeader from "./auth-header";
// import { useDispatch, useSelector } from "react-redux";

  // const [desti, setDesti] = useState('');


const API_URL = "https://travelook.gabatch11.my.id/";
// const { desti } = useSelector(state => state.redDestination);

// const API_URL = "https://travelook.gabatch11.my.id/auth/";

// const handleChange = (event) => {
//   setDesti(event.target.value);
// };

const getOneUserData = () => {
  return axios.get(API_URL + "auth/", { headers: authHeader() });
};

const getUserReservation = () => {
  return axios.get(API_URL + "reservation/user?page=1", { headers: authHeader() });
};

// const bookingHotel = () => {
//   return axios.post(API_URL + "reservation/room?id_room=", { headers: authHeader() });
// };

const bookingHotel = (start, end, firstName, lastName, email, phone, number) => {
  return axios.post(API_URL + "reservation/room?id_room=", { 
    headers: authHeader(), 
    start,
    end,
    firstName,
    lastName,
    email,
    phone,
    number
  });
};

const getAllHotel = () => {
  return axios.get(API_URL + "room/");
};

const getAllHotelByStar = () => {
  return axios.get(API_URL + "room/?rating=");
};

const getAllHotelByLoc = () => {
  return axios.get(API_URL + "room/loc?loc=");
};

const getUserReview = () => {
  return axios.get(API_URL + "review/user/", { headers: authHeader() });
}
const getCoba = () => {
  return axios.get(API_URL + "room/");
}


export default {
  getOneUserData,
  getAllHotel,
  getAllHotelByLoc,
  getUserReview,
  getCoba,
  getAllHotelByStar,
  getUserReservation,
  bookingHotel

};