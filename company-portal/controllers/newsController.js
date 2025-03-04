const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const News = require('../models/NewsModel'); 


const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage }).array('images'); 


const createNewsWithImages = (req, res) => {
    upload(req, res, async (err) => {
      if (err) {
        console.error("Error during file upload:", err);  
        return res.status(400).json({ message: 'Error uploading files', error: err });
      }
  
      console.log("Files received:", req.files);  
  
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: 'No files uploaded' });
      }
  
      try {
        const imagePromises = req.files.map((file) => {
          return new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream({ resource_type: 'auto' }, (error, result) => {
              if (error) {
                console.error("Error uploading to Cloudinary:", error);  
                return reject({ message: 'Error uploading to Cloudinary', error });
              }
              resolve(result); 
            });
  
            stream.end(file.buffer);
          });
        });
  
      
        const imageResults = await Promise.all(imagePromises);
        console.log("Cloudinary upload results:", imageResults);  
  
       
        const images = imageResults.map((result) => ({
          public_id: result.public_id,
          url: result.secure_url,
        }));
  
        const parsedFullContent = Array.isArray(req.body.fullContent)
         ? req.body.fullContent
         : JSON.parse(req.body.fullContent || "[]");

        const news = new News({
          title: req.body.title,
          category: req.body.category,
          content: req.body.content,
          fullContent: parsedFullContent,
          featured: req.body.featured || false,
          images: images,
        });
  
       
        await news.save();
        //console.log("News created successfully:", news);  
  
    
        res.status(201).json({
          message: 'News created successfully!',
          news: news,
        });
      } catch (error) {
        console.error("Error creating news:", error);  
        res.status(500).json({ message: 'Error creating news', error: error.message || error });
      }
    });
  };
  
  const updateNewsById = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, category, content, fullContent, featured } = req.body;

        // Find the existing news article
        let news = await News.findById(id);
        if (!news) {
            return res.status(404).json({ message: "News not found" });
        }

        // Handle file uploads if there are new images
        let images = news.images; // Keep old images by default

        if (req.files && req.files.length > 0) {
            const imagePromises = req.files.map((file) => {
                return new Promise((resolve) => {
                    const stream = cloudinary.uploader.upload_stream(
                        { resource_type: "auto" },
                        (error, result) => {
                            if (error) {
                                console.error("Error uploading to Cloudinary:", error);
                                return resolve(null);
                            }
                            resolve(result);
                        }
                    );
                    stream.end(file.buffer);
                });
            });

            const imageResults = await Promise.all(imagePromises);
            images = imageResults.filter((img) => img !== null).map((result) => ({
                public_id: result.public_id,
                url: result.secure_url,
            }));
        }

        
        news = await News.findByIdAndUpdate(
            id,
            {
                title,
                category,
                content,
                fullContent: Array.isArray(fullContent) ? fullContent : [fullContent],
                featured: featured || false,
                images,
            },
            { new: true, runValidators: true }
        );

        res.status(200).json({ message: "News updated successfully!", news });
    } catch (error) {
        console.error("Error updating news:", error);
        res.status(500).json({ message: "Error updating news", error: error.message });
    }
};


const getAllNews = async (req, res) => {
  try {
    const news = await News.find();
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching news', error });
  }
};


const getNewsById = async (req, res) => {
  const { id } = req.params;

  try {
    const news = await News.findById(id);
    if (!news) {
      return res.status(404).json({ message: 'News not found' });
    }
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching news', error });
  }
};


const deleteNews = async (req, res) => {
  try {
    const newsId = req.params.id;

    const news = await News.findByIdAndDelete(req.params.id)
    if (!news) {
      return res.status(404).json({ message: 'News post not found' });
    }

    if (news.images && news.images.length > 0) {
      const deletionPromises = news.images.map((image) =>
        cloudinary.uploader.destroy(image.public_id)
      );
      await Promise.all(deletionPromises);
      console.log('Images deleted from Cloudinary');
    }

    
   
    console.log('News post deleted:', newsId);

    res.status(200).json({
      message: 'News post deleted successfully!',
    });
  } catch (error) {
    console.error("Error deleting news:", error);
    res.status(500).json({ message: 'Error deleting news post', error: error.message || error });
  }
};

module.exports = {
  createNewsWithImages,
  getAllNews,
  getNewsById,
  deleteNews,
  updateNewsById,
  upload,
};
