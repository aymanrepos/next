
import { PayloadAction ,  createSlice } from "@reduxjs/toolkit";

interface Bars {
  value: boolean;
}

const initialState: Bars = {
    value: true,
};

const barsSlice = createSlice({
  name: "guilds",
  initialState,
  reducers: {
    BarsChange: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },

    Bartoogle : (state) => {
        state.value = !state.value;
    }
  },

});
export const { BarsChange , Bartoogle } = barsSlice.actions;

export default barsSlice.reducer;
