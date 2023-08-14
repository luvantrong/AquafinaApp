import { Warning } from "@containers";
import { MyDrawer } from "@presentation";
import { store } from "@shared-state";
import React from "react";
import { Provider } from "react-redux";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MyDrawer />
    </Provider>
  );
};

export default App;
