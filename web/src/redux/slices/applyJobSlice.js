import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance"; 

// Async thunk for applying for a job
export const applyJob = createAsyncThunk(
    "job/apply",
    async (jobData, { rejectWithValue }) => {
      try {
        const response = await axiosInstance.post("/apply", jobData,{
          headers: {
              'Content-Type': 'multipart/form-data',
          },
      });
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data || "Something went wrong");
      }
    }
  );
  export const fetchAppliedJobs = createAsyncThunk(
    "job/fetchApplied",
    async (_, { rejectWithValue }) => {
      try {
        const response = await axiosInstance.get("/apply");
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data || "Something went wrong");
      }
    }
  );
  
  export const deleteJob = createAsyncThunk(
    "job/delete",
    async (jobId, { rejectWithValue }) => {
      try {
        const response = await axiosInstance.delete(`/apply/${jobId}`);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data || "Something went wrong");
      }
    }
  );
  

  const applyJobSlice = createSlice({
    name: "applyJob",
    initialState: {
      loading: false,
      success: false,
      error: null,
      appliedJobs: [], 
    },
    reducers: {
      clearJobState: (state) => {
        state.loading = false;
        state.success = false;
        state.error = null;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(applyJob.pending, (state) => {
          state.loading = true;
          state.success = false;
          state.error = null;
        })
        .addCase(applyJob.fulfilled, (state) => {
          state.loading = false;
          state.success = true;
          state.error = null;
        })
        .addCase(applyJob.rejected, (state, action) => {
          state.loading = false;
          state.success = false;
          state.error = action.payload;
        })
        .addCase(deleteJob.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(deleteJob.fulfilled, (state) => {
          state.loading = false;
          state.success = true;
          state.error = null;
        })
        .addCase(deleteJob.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        // Handle fetchAppliedJobs actions
        .addCase(fetchAppliedJobs.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchAppliedJobs.fulfilled, (state, action) => {
          state.loading = false;
          state.appliedJobs = action.payload;
        })
        .addCase(fetchAppliedJobs.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });
  
  export const { clearJobState } = applyJobSlice.actions;
  export default applyJobSlice.reducer;
  
