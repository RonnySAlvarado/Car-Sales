import React from "react";
import { buyItem } from "../actions/actions";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

const AdditionalFeature = ({ feature }) => {
  const dispatch = useDispatch();

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => dispatch(buyItem(feature))} className="button">
        Add
      </button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default AdditionalFeature;
// export default connect(null, { buyItem })(AdditionalFeature);
