import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

import { connect } from "react-redux";

const App = props => {

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
    
      </div>
    </div>
  );
};

const mapStateToProps = state => {

  console.log("MapStateToProps: ", state);
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  };
};

export default connect(mapStateToProps, {})(App);
