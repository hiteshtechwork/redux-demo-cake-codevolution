import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "./redux";

const ItemContainer = (props) => {
  return (
    <div>
      <h2>Item- {props.item} </h2>
      <button onClick={props.buyItem}>Buy Items {props.buyItem}</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCream;

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispathcFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    buyItem: dispathcFunction,
  };
};

// export default connect(null, mapDispatchToProps)(ItemContainer);
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
