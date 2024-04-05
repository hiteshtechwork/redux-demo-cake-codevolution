import React from "react";
import { buyIceCream } from "./redux";
import { connect } from "react-redux";

const IceCreamContainer = (props) => {
  return (
    <div>
      <h2>Numbers of IceCream : {props.numOfIceCream}</h2>
      <button onClick={props.buyIceCream}>buy iceCream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
