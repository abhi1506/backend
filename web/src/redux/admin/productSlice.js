import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axiosInstance';

// Create a new product post
export const createProductsPost = createAsyncThunk(
    'products/createProductsPost',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post('/products', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            return response.data; 
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to create product post');
        }
    }
);

// Delete a product post
export const deleteProductsPost = createAsyncThunk(
    'products/deleteProductsPost',
    async (postId, { rejectWithValue }) => {
        try {
            await axiosInstance.delete(`/products/${postId}`);
            return postId; 
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to delete product post');
        }
    }
);

// Fetch all product posts
export const fetchProductsPosts = createAsyncThunk(
    'products/fetchProductsPosts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get('/products'); // Fixed URL
            return response.data; 
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to fetch product posts');
        }
    }
);

const initialState = {
    products: [],
    loading: false,
    error: null,
};

const productsSlice = createSlice({
    name: 'products', 
    initialState,
    reducers: {
        resetProductsState: (state) => {
            state.products = [];
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createProductsPost.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createProductsPost.fulfilled, (state, action) => {
                state.loading = false;
                state.products.push(action.payload);
            })
            .addCase(createProductsPost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteProductsPost.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteProductsPost.fulfilled, (state, action) => {
                state.loading = false;
                state.products = state.products.filter(post => post._id !== action.payload);
            })
            .addCase(deleteProductsPost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchProductsPosts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductsPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProductsPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { resetProductsState } = productsSlice.actions; 
export default productsSlice.reducer;
