export default function authHeader() {
    // const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    // const token = JSON.parse(localStorage.getItem('token'));
    // const user = JSON.parse(localStorage.getItem('user'));
  
    if (token) {
    // if (user && token) {
      return { Authorization: 'Bearer ' + localStorage.getItem('token')};

      // return { Authorization: 'Bearer ' + localStorage.getItem('token'), "Access-Control-Allow-Origin":"x"};
      // return { Authorization: token };
    } else {
      return {};
    }
  }