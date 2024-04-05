import React, { useState } from "react";
import { connect } from "react-redux";
// import { buyCake } from "./redux/cake/cakeActions";
import { buyCake } from "./redux";

const NewCakeContainer = (props) => {
  const [number, setNumber] = useState(1);

  return (
    <div>
      <h2>num of cakes : {props.numOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button
        onClick={() => {
          props.buyCake(number);
        }}
      >
        buy {number} cakes
      </button>
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
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
