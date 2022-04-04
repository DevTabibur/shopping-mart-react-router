import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Counter.css";
import { useTimer } from "reactjs-countdown-hook";


const Counter = () => {
  return (
    <div className="container-fluid my-5">
      <div className="counter-bg w-100 mx-0 px-0">
        <div className="row gx-3">
          <div className="col-md-6 ps-5">
            <div className="counter-left w-100">
              <img
                className="w-100"
                src="https://cdn.shopify.com/s/files/1/0326/6517/4152/files/Banner_custom_900x.jpg?v=1645154816"
                alt="counter__bg__img"
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="counter-right">
              <h4>MESSEY COLLECTION (2022)</h4>
              <h1>Greatest Prices & Deals Save 20% Off Baby & Kids Wears...</h1>
              <p>Working on the details, twisting & playing with year staying same track. Kalles Baby’s inspiration comes from her large British family in-law. “We enjoy seeing our children look like children”.</p>
              <hr />
              <div className="count-down-timer">
                  <h4>IT'LL BE WORTH THE WAIT VERY SOON!</h4>
                  <CounterTimer/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CounterTimer = () => {
    const {
      isActive,
      counter,
      seconds,
      minutes,
      hours,
      days,
      pause,
      resume,
      reset,
    } = useTimer(5000000, handleTimerFinish);
  
    function handleTimerFinish() {
      alert("times up!");
    }
    return (
      <div>
        <div>{`${days} : ${hours} : ${minutes} : ${seconds}`}</div>
        {/* <button onClick={() => (isActive ? pause() : resume())}>
          {isActive ? "Pause" : "Resume"}
        </button>
        <button onClick={reset}>Reset</button> */}
      </div>
    );
  };
  
export default Counter;

