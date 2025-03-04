import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewsPost } from "../../redux/admin/newsSlice/newsSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Container,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Stack,
} from "@mui/material";

const NewsForm = () => {
  const dispatch = useDispatch();
  const [newsData, setNewsData] = useState({
    title: "",
    category: "",
    content: "",
    fullContent: [], 
    featured: false,
    images: [],
  });
  

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
  
    setNewsData((prev) => ({
      ...prev,
      [name]: name === "fullContent" ? value.split("\n") : type === "checkbox" ? checked : value,
    }));
  };
  

  const handleFileChange = (e) => {
    setNewsData({ ...newsData, images: e.target.files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!newsData.title || !newsData.category || !newsData.content) {
      toast.error("Title, category, and content are required!");
      return;
    }
  
    const formData = new FormData();
    formData.append("title", newsData.title);
    formData.append("category", newsData.category);
    formData.append("content", newsData.content);
    formData.append("featured", newsData.featured);
  
    
    newsData.fullContent.forEach((item) => {
      formData.append("fullContent[]", item);
    });
  
    for (let i = 0; i < newsData.images.length; i++) {
      formData.append("images", newsData.images[i]);
    }
  
    try {
      await dispatch(createNewsPost(formData)).unwrap();
      toast.success("News created successfully!");
      setNewsData({
        title: "",
        category: "",
        content: "",
        fullContent: [], 
        featured: false,
        images: [],
      });
    } catch (error) {
      toast.error(error.message || "Failed to create news!");
    }
  };
  
  
  
  

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Create News
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Title"
            name="title"
            variant="outlined"
            fullWidth
            required
            value={newsData.title}
            onChange={handleChange}
          />
          <TextField
            label="Category"
            name="category"
            variant="outlined"
            fullWidth
            required
            value={newsData.category}
            onChange={handleChange}
          />
          <TextField
            label="Content"
            name="content"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            required
            value={newsData.content}
            onChange={handleChange}
          />
          <TextField
            label="Full Content"
            name="fullContent"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            required
            value={newsData.fullContent}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Checkbox
                name="featured"
                checked={newsData.featured}
                onChange={handleChange}
              />
            }
            label="Featured News"
          />
          <input type="file" multiple accept="image/*" onChange={handleFileChange} />
          <Button type="submit" variant="contained" color="primary">
            Submit News
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default NewsForm;
