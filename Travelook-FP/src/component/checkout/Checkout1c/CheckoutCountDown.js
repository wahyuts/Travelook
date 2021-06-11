import React from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";

// Random component
// const Completionist = () => <span>You are good to go!</span>;

// ReactDOM.render(
//   <Countdown date={Date.now() + 3600000}>
//     <Completionist />
//   </Countdown>,
//   document.getElementById("root")
// );

const Completionist = () => <span>You are good to go!</span>;

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span style={{ border: "1px solid #E1E1E1" }}>
        {hours} hours :{minutes} minutes :{seconds} seconds
      </span>
    );
  }
};

function CheckoutCountDown() {
  return (
    <div>
      <Countdown date={Date.now() + 86400000} renderer={renderer} />
    </div>
  );
}

export default CheckoutCountDown;
