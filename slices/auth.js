import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import AuthService from "../services/auth.service";

export const register = createAsyncThunk(
  "auth/register",
  async ({ username, phone, password, address, dob }, thunkAPI) => {
    try {
      const data = await AuthService.register(username, phone, password, address, dob);
      return { user: data };
    } catch (error) {
      console.log(error)
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ phone, password }, thunkAPI) => {
    try {
      const data = await AuthService.login(phone, password);
      return { user: data };
    } catch (error) {

    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  const data = await AuthService.logout();
  return { user: data }
});

const initialState = {
  user: null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    deposit: (state, action) => { state.user.userInfo.balance += action.payload },
    transfer: (state, action) => { state.user.userInfo.balance -= action.payload }
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.user = action.payload.user;
    },
    [register.rejected]: (state, action) => {

    },
    [login.fulfilled]: (state, action) => {
      state.user = action.payload.user;
    },
    [login.rejected]: (state, action) => {

    },
    [logout.fulfilled]: (state, action) => {
      state.user = action.payload.user;
    },
  },
});

export const { deposit, transfer } = authSlice.actions
const { reducer } = authSlice;
export default reducer;