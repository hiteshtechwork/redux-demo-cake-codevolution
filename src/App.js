import React from "react";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import PastryContainer from "./components/PastryContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <UserContainer />
        {/* <CakeContainer />
        <HooksCakeContainer />
        <NewCakeContainer />
        <hr />
        <IceCreamContainer />
        <hr />
        <PastryContainer />
        <hr />
        <h1>items-with-own-props</h1>
        <ItemContainer cake />
        <ItemContainer /> */}
      </div>
    </Provider>
  );
};

export default App;
