import { configureStore } from "@reduxjs/toolkit";
import companySlice from "./slice/companySlice";
import publicSlice from "./slice/publicSlice";

const reduxStore = configureStore({
    reducer: {
        public: publicSlice,
        company: companySlice,
    }
})
export type RootType = ReturnType<typeof reduxStore.getState>
export type DispatchType = typeof reduxStore.dispatch
export default reduxStore