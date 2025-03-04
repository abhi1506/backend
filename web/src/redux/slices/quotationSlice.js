import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from '../../utils/axiosInstance';

// Async thunk for creating a quotation
export const createQuotation = createAsyncThunk(
  "quotations/create",
  async (quotationData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "quotations/create",
        quotationData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data; // Success response
    } catch (error) {
      // Reject with error message
      return rejectWithValue(
        error.response?.data?.message || "Failed to create quotation"
      );
    }
  }
);
export const fetchQuotations = createAsyncThunk(
    "quotations/fetchAll",
    async (_, { rejectWithValue }) => {
      try {
        const response = await axiosInstance.get("/quotations/");
        return response.data; 
      } catch (error) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to fetch quotations"
        );
      }
    }
  );

  export const deleteQuotation = createAsyncThunk(
    "quotations/delete",
    async (quotationId, { rejectWithValue }) => {
      try {
        const response = await axiosInstance.delete(
          `/quotations/${quotationId}`
        );
        return response.data; // Success response (message or status)
      } catch (error) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to delete quotation"
        );
      }
    }
  );
  
  const quotationSlice = createSlice({
    name: "quotations",
    initialState: {
      quotations: [],
      quotation: null,
      loading: false,
      error: null,
    },
    reducers: {
      clearQuotationState: (state) => {
        state.quotation = null;
        state.loading = false;
        state.error = null;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(createQuotation.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(createQuotation.fulfilled, (state, action) => {
          state.loading = false;
          state.quotation = action.payload;
        })
        .addCase(createQuotation.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(fetchQuotations.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchQuotations.fulfilled, (state, action) => {
          state.loading = false;
          state.quotations = action.payload;
        })
        .addCase(fetchQuotations.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        // Handle delete quotation
        .addCase(deleteQuotation.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(deleteQuotation.fulfilled, (state, action) => {
          state.loading = false;
          // Update the state by removing the deleted quotation
          state.quotations = state.quotations.filter(
            (quotation) => quotation._id !== action.payload._id
          );
        })
        .addCase(deleteQuotation.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });
  


export const { clearQuotationState } = quotationSlice.actions;
export default quotationSlice.reducer;
