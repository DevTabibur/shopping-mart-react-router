// import React, { useState } from "react";
// import { Button } from "react-bootstrap";
// import useLadies from "../../Hooks/useLadies";
// import "bootstrap/dist/css/bootstrap.min.css";

// const OrderReview = () => {
// //   const [ladies, setLadies] = useLadies();

//   const [cart, setCart] = useState([]);

//   const resetAll = () => {
//     setCart([]);
//   };
//   const chooseOneForMe = () => {
//     console.log("choose one for me");
//   };

//   return (
//     <>
//       <h2>Order page</h2>
//       <div className="col-md-3">
//         <div className="cart-container">
//           <h4 className="p-5">Selected Items:{cart.length}</h4>
//           {cart.map((item) => (
//             <Cart key={item.id} cart={item} />
//           ))}

//           <div className="buttons text-center">
//             <Button onClick={chooseOneForMe} className="w-75 my-3">
//               Choose one for me
//             </Button>
//             <Button onClick={resetAll} className="w-75 bg-danger mb-5">
//               Reset All
//             </Button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };


// const Cart = ({cart}) => {
//     return (
//         <div>
//             <h2>Length: {cart.length}</h2>
//         </div>
//     );
// };


// export default OrderReview;
