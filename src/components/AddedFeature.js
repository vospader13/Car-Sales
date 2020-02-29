import React from 'react';
import { connect } from "react-redux";
import { removeFeature } from "../actions.js/action";

const AddedFeature = props => {
  return (
    <li>
      {} 
      <button className="button" onClick={() => {props.removeFeature(props.feature)}}>Remove</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures,
  }
}


export default connect(mapStateToProps, { removeFeature })(AddedFeature);
