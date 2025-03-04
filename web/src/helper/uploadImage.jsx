const uploadImage = async (image) => {
  const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_NAME}/image/upload`;

  console.log("Cloudinary name:", process.env.REACT_APP_CLOUDINARY_NAME);
  console.log("Cloudinary preset:", process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);

  try {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);

    const response = await fetch(url, {
      method: "POST",
      body: formData
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || "Image upload failed");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error uploading image:", error.message);
    throw new Error(`Image upload failed: ${error.message}`);
  }
};

export default uploadImage;
