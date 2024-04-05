import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "./redux";

const HooksCakeContainer = () => {
  // useSelector hook takes function as the argument, and it return the states from the store
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);

  // useDispatch hook returns a reference to a dispatch function from the redux store

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Num of Cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}> Buy Cake</button>
    </div>
  );
};

export default HooksCakeContainer;
