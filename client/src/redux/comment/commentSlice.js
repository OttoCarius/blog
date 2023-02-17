import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState = {
  comments: [],
  loading: false,
  status: null,
};

export const createComment = createAsyncThunk(
  "comment/createComment",
  async ({ postId, comment }) => {
    try {
      const { data } = await axios.post(`/comments/${postId}`, {
        postId,
        comment,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getPostComments = createAsyncThunk(
  "comment/getPostComments",
  async (postId) => {
    try {
      const { data } = await axios.get(`/posts/comments/${postId}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: {
    // Создание комента
    [createComment.pending]: (state) => {
      state.loading = true;
      state.status = null;
    },
    [createComment.fulfilled]: (state, action) => {
      state.loading = false;
      state.comments.push(action.payload);
      state.status = action.payload.message;
    },
    [createComment.rejected]: (state, action) => {
      state.loading = false;
      state.status = action.payload.message;
    },
    // Получение комментов
    [getPostComments.pending]: (state) => {
      state.loading = true;
      state.status = null;
    },
    [getPostComments.fulfilled]: (state, action) => {
      state.loading = false;
      state.comments = action.payload;
      state.status = action.payload.message;
    },
    [getPostComments.rejected]: (state, action) => {
      state.loading = false;
      state.status = action.payload.message;
    },
  },
});

export default commentSlice.reducer;
