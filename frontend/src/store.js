import { configureStore } from "@reduxjs/toolkit";
import { companyReducer } from "./services/reducers/companyReducer";
import { serviceReducer } from "./services/reducers/serviceReducer";

const store = configureStore({
  reducer: {
    company: companyReducer,
    service: serviceReducer
  },
});

export default store;
