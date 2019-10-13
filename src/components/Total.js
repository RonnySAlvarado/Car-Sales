import React from "react";
// import { connect } from 'react-redux';
import { useSelector } from "react-redux";

const Total = () => {
  const price = useSelector(state => state.car.price);
  const additionalPrice = useSelector(state => state.additionalPrice);

  return (
    <div className="content">
      <h4>Total Amount: ${price + additionalPrice}</h4>
    </div>
  );
};

// const mapStateToProps = state => {
//   return {
//       price: state.car.price,
//       additionalPrice: state.additionalPrice
//   }
// }

//export default(mapStateToProps, {})(Total);

export default Total;
