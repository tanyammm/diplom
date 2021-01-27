export const createStore = () => {
  const store = {
    onClick() {
      // eslint-disable-next-line no-alert
      alert("Это Mobx!");
    },
  };

  return store;
};
