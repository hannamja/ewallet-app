import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import AuthService from "../services/auth.service";

export const register = createAsyncThunk(
  "auth/register",
  async ({ username, email, password }, thunkAPI) => {
    try {
      const response = await AuthService.register(username, email, password);
      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error) {
      //   const message =
      //     (error.response &&
      //       error.response.data &&
      //       error.response.data.message) ||
      //     error.message ||
      //     error.toString();
      //   thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }, thunkAPI) => {
    try {
      const data = await AuthService.login(username, password);
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
  user: {
    "userInfo": {
      "phone_number": "0987123123",
      "name": "Nguyen Van A",
      "dob": "2002-01-11",
      "address": "12 Le Van Viet, phuong Hiep Phu, tp Thu Duc, tp Ho Chi Minh",
      "balance": 840000,
      "created_at": "2023-02-24T14:18:13.000000Z"
    },
    "token": "47|XIU7jdKLDmP6sIFlUqR4KS573K0GkpwsCqlP7amU"
  }
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

    },
    [register.rejected]: (state, action) => {

    },
    [login.fulfilled]: (state, action) => {

      state.user = action.payload.user;
    },
    [login.rejected]: (state, action) => {

    },
    [logout.fulfilled]: (state, action) => {
      state = action.payload.user;
    },
  },
});

export const { deposit, transfer } = authSlice.actions
const { reducer } = authSlice;
export default reducer;