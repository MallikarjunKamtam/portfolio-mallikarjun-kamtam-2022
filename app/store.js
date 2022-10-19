import globalSlice from "./features/slices/globalSlice";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    global: globalSlice,
  },
});

export default store;
