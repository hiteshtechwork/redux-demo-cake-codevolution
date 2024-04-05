import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyPastry } from "./redux/pastry/pastryActions";

const PastryContainer = () => {
  const numOfPastry = useSelector((state) => state.pastry.numOfPastry);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Pastry : {numOfPastry}</h2>
      <button onClick={() => dispatch(buyPastry())}>Buy Pastry</button>
    </div>
  );
};

export default PastryContainer;
