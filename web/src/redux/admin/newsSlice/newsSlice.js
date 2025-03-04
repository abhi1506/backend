import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import axiosInstance from '../../../utils/axiosInstance';

export const createNewsPost = createAsyncThunk(
    'news/createNewsPost',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post('/news', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response.data; 
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to create news post');
        }
    }
);


export const deleteNewsPost = createAsyncThunk(
    'news/deleteNewsPost',
    async (postId, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.delete(`/news/${postId}`);
            return postId; 
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to delete news post');
        }
    }
);


export const fetchNewsPosts = createAsyncThunk(
    'news/fetchNewsPosts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get('news');
            return response.data; 
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to fetch news posts');
        }
    }
);

export const fetchNewsById = createAsyncThunk(
    'news/fetchNewsById',
    async (id, { rejectWithValue }) => {
      try {
        const response = await axiosInstance.get(`/news/${id}`);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to fetch news post by id');
      }
    }
  );
const initialState = {
    news: [],
    selectedNews: null,
    loading: false,
    error: null,
};


const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(createNewsPost.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createNewsPost.fulfilled, (state, action) => {
                state.loading = false;
                state.news.push(action.payload); 
            })
            .addCase(createNewsPost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteNewsPost.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteNewsPost.fulfilled, (state, action) => {
                state.loading = false;
                state.news = state.news.filter(post => post._id !== action.payload); 
            })
            .addCase(deleteNewsPost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchNewsPosts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchNewsPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.news = action.payload; 
            })
            .addCase(fetchNewsPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchNewsById.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.selectedNews = null;
              })
              .addCase(fetchNewsById.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedNews = action.payload;
              })
              .addCase(fetchNewsById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
              });
    },
});

export default newsSlice.reducer;
