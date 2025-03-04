import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axiosInstance';

// Async Thunks
export const createFeedback = createAsyncThunk(
  'feedback/create', 
  async (feedbackData, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post('/feedback/', feedbackData);
      return data.feedback;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'An error occurred while creating feedback.'
      );
    }
  }
);

export const fetchFeedbacks = createAsyncThunk(
  'feedback/fetchAll', 
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get('/feedback/');
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'An error occurred while fetching feedbacks.'
      );
    }
  }
);

export const deleteFeedback = createAsyncThunk(
  'feedback/delete', 
  async (id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/feedback/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'An error occurred while deleting feedback.'
      );
    }
  }
);

const initialState = {
  feedbacks: [],
  feedback: null,
  loading: {
    create: false,
    fetch: false,
    delete: false,
  },
  error: null,
};

// Feedback Slice
const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    clearFeedbacks: (state) => {
      state.feedbacks = [];
      state.error = null;
    },
    clearFeedback: (state) => {
      state.feedback = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle create feedback
      .addCase(createFeedback.pending, (state) => {
        state.loading.create = true;
        state.error = null;
      })
      .addCase(createFeedback.fulfilled, (state, action) => {
        state.loading.create = false;
        state.feedbacks.push(action.payload);
      })
      .addCase(createFeedback.rejected, (state, action) => {
        state.loading.create = false;
        state.error = action.payload || action.error.message;
      })
      // Handle fetch all feedbacks
      .addCase(fetchFeedbacks.pending, (state) => {
        state.loading.fetch = true;
        state.error = null;
      })
      .addCase(fetchFeedbacks.fulfilled, (state, action) => {
        state.loading.fetch = false;
        state.feedbacks = action.payload;
      })
      .addCase(fetchFeedbacks.rejected, (state, action) => {
        state.loading.fetch = false;
        state.error = action.payload || action.error.message;
      })
      // Handle delete feedback
      .addCase(deleteFeedback.pending, (state) => {
        state.loading.delete = true;
      })
      .addCase(deleteFeedback.fulfilled, (state, action) => {
        state.loading.delete = false;
        state.feedbacks = state.feedbacks.filter((feedback) => feedback._id !== action.payload);
      })
      .addCase(deleteFeedback.rejected, (state, action) => {
        state.loading.delete = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const { clearFeedbacks, clearFeedback } = feedbackSlice.actions;
export default feedbackSlice.reducer;
