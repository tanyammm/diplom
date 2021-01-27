/* eslint-disable react/prop-types */
import React, { useMemo } from "react";
import { useLocalStore } from "mobx-react-lite";
import { store } from "./store";

const StoreProvider = ({ children }) => {
  const mainStore = useLocalStore(store);

  const stores = useMemo(() => ({ mainStore }), [mainStore]);

  return (
    <storeContext.Provider value={stores}>{children}</storeContext.Provider>
  );
};

const storeContext = React.createContext(null);

export { StoreProvider, storeContext };
