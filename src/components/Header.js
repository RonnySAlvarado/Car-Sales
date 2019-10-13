import React from "react";
// import { connect } from 'react-redux';
import { useSelector } from "react-redux";

const Header = () => {
  const image = useSelector(state => state.car.image);
  const name = useSelector(state => state.car.name);
  const price = useSelector(state => state.car.price);

  return (
    <>
      <figure className="image is-128x128">
        <img src={image} alt={name} />
      </figure>
      <h2>{name}</h2>
      <p>Amount: ${price}</p>
    </>
  );
};

// const mapStateToProps = state => {
//   return {
//     car: state.car
//   }
// }

// export default connect(mapStateToProps, {})(Header)

export default Header;
