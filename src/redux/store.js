import { configureStore } from "@reduxjs/toolkit";
import { phonebookApi } from "../services/api";
// import { contactsReducer, filterReducer } from "./reducers";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [phonebookApi.reducerPath]: phonebookApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(phonebookApi.middleware),
});



// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
// });



