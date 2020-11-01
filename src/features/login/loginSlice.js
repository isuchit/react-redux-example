import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, actions) => {
        state.user = actions.payload.user;
    },
    logut: state => {
        state.user = null;
    }
  },
});

export const { setUser, logut } = loginSlice.actions;

export const selectUser = state => state.user.user;

export default loginSlice.reducer;
