/* eslint-disable react/prop-types */
import React, { useMemo } from "react";
import { useLocalObservable } from "mobx-react-lite";
import { createStore } from "./store/store";

const StoreProvider = ({ children }) => {
  const mainStore = useLocalObservable(createStore);

  const store = useMemo(() => ({ mainStore }), [mainStore]);

  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};

const storeContext = React.createContext(null);

export { StoreProvider, storeContext };
