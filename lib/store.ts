
import { configureStore } from "@reduxjs/toolkit";
import guildsSlice from "./slice/guildSlice";
import  BarsChange  from "./slice/dashboardinfobarslice";

export const store = configureStore({
  reducer: {
    guilds: guildsSlice,
    bars : BarsChange
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
