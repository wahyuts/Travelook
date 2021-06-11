import axios from "axios";

const API_URL = "https://travelook.gabatch11.my.id/auth/";

// const API_URL_SIGNIN = "https://travelook.gabatch11.my.id/auth/signin";
// const API_URL_SIGNUP = "https://travelook.gabatch11.my.id/auth/signup";


const register = (first_name, last_name, email, password, confirmPassword) => {
  return axios.post(API_URL + "signup", {
    first_name,
    last_name,
    email,
    password,
    confirmPassword,
  });
};

const login = async (email, password, first_name, last_name) => {

  const response = await axios
  .post(API_URL + "signin",  {
    email,
    password,
    first_name,
    last_name,
  }).then(function (res){
    console.log(res)
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('user', res.config.data);
    return res
    // localStorage.setItem("user", JSON.stringify(res.data));

    }).catch(function (err){
        console.log(err);
    })
    console.log("response", response)
  return response
  }

  const updateUserInfo = (first_name, last_name, email, phone_number, password, confirmPassword) => {
    return axios.put(API_URL + "auth/update/", {
      first_name,
      last_name,
      email,
      phone_number,
      password,
      confirmPassword,
    });
  };

// ***************cara bezkoder kagak mau wkwkw*****************************

//   .post(API_URL + "signin", {
//     email,
//     password,
//   })
//   .then((response) => {
//     if (response.data.accessToken) {
//       localStorage.setItem("user", JSON.stringify(response.data));
//     }

//     return response.data;
//   });
// };


const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  localStorage.removeItem("idHotel");
  localStorage.removeItem("CheckOutDate");
  localStorage.removeItem("CheckIN-Date");
};

export default {
  register,
  login,
  logout,
  updateUserInfo
  
};