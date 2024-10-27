
import { PayloadAction ,  createSlice } from "@reduxjs/toolkit";

interface GuildProps {
  guildsHasAdmin: OAuthGuild[];
}

const initialState: GuildProps = {
  guildsHasAdmin: [],
};

const guildsSlice = createSlice({
  name: "guilds",
  initialState,
  reducers: {
    InsertGuilds: (state, action: PayloadAction<OAuthGuild[]>) => {
      state.guildsHasAdmin = action.payload;
    },
  },

});
export const { InsertGuilds } = guildsSlice.actions;

export default guildsSlice.reducer;
