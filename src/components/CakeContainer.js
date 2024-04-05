import React from "react";
import { connect } from "react-redux";
// import { buyCake } from "./redux/cake/cakeActions";
import { buyCake } from "./redux";

const CakeContainer = (props) => {
  return (
    <div>
      <h2>num of cakes : {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>buy cake</button>
    </div>
  );
};

// this gets the redux state as a parameter and returns an object
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
