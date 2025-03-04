import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//import axios from 'axios';

import axiosInstance from '../../utils/axiosInstance'; 

export const submitcontentMessage = createAsyncThunk(
    'content/submitcontentMessage',
    async (contentData, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.post('/content', contentData); 
            return data.message;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 
                'An error occurred while sending your message.');
        }
    }
);

export const fetchcontentMessages = createAsyncThunk(
    'content/fetchcontentMessages',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get('/content');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message ||
                'An error occurred while fetching messages.');
        }
    }
);

export const deletecontentMessage = createAsyncThunk(
    'content/deletecontentMessage',
    async (id, { rejectWithValue }) => {
        try {
            await axiosInstance.delete(`/content/${id}`);
            return id;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message ||
                'An error occurred while deleting the message.');
        }
    }
);

// Create the content slice
const contentSlice = createSlice({
    name: 'content',
    initialState: {
        loading: false,
        success: false,
        error: null,
        contents: [], 
    },
    reducers: {
        resetcontentState: (state) => {
            state.success = false;
            state.error = null;
        },
        resetcontentMessages: (state) => {
            state.contents = [];
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitcontentMessage.pending, (state) => {
                state.loading = true;
            })
            .addCase(submitcontentMessage.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;
            })
            .addCase(submitcontentMessage.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchcontentMessages.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchcontentMessages.fulfilled, (state, action) => {
                state.loading = false;
                state.contents = action.payload.data; 
                state.error = null;
            })
            .addCase(fetchcontentMessages.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deletecontentMessage.fulfilled, (state, action) => {
                state.contents = state.contents.filter(content => content._id !== action.payload);
            })
    },
});

// Export actions and reducer
export const { resetcontentState, resetcontentMessages } = contentSlice.actions;
export default contentSlice.reducer;
