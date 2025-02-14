import React from "react";
import { removeFeature } from "../actions/actions";
import { useDispatch } from "react-redux";

const AddedFeature = ({ feature }) => {
  const dispatch = useDispatch();

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        onClick={() => dispatch(removeFeature(feature))}
        className="button"
      >
        X
      </button>
      {feature.name}
    </li>
  );
};

export default AddedFeature;
