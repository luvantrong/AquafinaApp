import { Warning } from "@containers";
import { MyDrawer } from "@presentation";
import { store } from "@shared-state";
import React from "react";
import { Provider } from "react-redux";
import { AppContextProvider } from "@shared-state";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppContextProvider>
        <MyDrawer />
      </AppContextProvider>
    </Provider>
  );
};

export default App;
