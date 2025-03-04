import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./redux/slices/jobSlice";
import contactSlice from "./redux/slices/contactSlice";
import feedbackSlice from "./redux/slices/feedbackSlice";
import languageSlice from "./redux/slices/languageSlice";
import careerAdminReducer from './redux/admin/slice/careerAdminSlice';
import authReducer from './redux/admin/slice/authSlice';
import teamReducer from './redux/admin/slice/teamSlice';
import employeeReducer from "./redux/admin/slice/employeeSlice";
import quotationReducer from "./redux/slices/quotationSlice";
import newsReducer from './redux/admin/newsSlice/newsSlice';
import productsReducer from './redux/admin/productSlice';
import applyJobReducer from "./redux/slices/applyJobSlice";
const store = configureStore({
  reducer: {
    jobApplications: jobSlice,
    contact: contactSlice,
    feedback: feedbackSlice,
    language: languageSlice,

    careerAdmin: careerAdminReducer,
    auth: authReducer,
    team: teamReducer,
    employees: employeeReducer,
    quotations: quotationReducer,
    news: newsReducer,
    products: productsReducer,
    applyJob: applyJobReducer,
  },
});

export default store;
