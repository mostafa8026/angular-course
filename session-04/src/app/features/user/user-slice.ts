import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    loading: false,
    users: [],
    error: ''
}

export const fetchUserInfo = createAsyncThunk(
    'users/fetchByIdStatus',
    async (userId: number, thunkAPI) => {
      const response = await new Promise(resolve=> {
        setTimeout(() => {
            resolve(56);
        }, 5000);
      })
      return response;
    }
  )

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchUserInfo.pending, state => {
            state.loading = true;
        });
        builder.addCase(fetchUserInfo.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        })
    }
});

export const userFeature = {
    reducer: slice.reducer,
    actions: slice.actions
}