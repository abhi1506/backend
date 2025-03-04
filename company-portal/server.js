const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cloudinary = require("cloudinary").v2;
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

dotenv.config();

// Validate environment variables
if (
  !process.env.CLOUDINARY_NAME ||
  !process.env.CLOUDINARY_API_KEY ||
  !process.env.CLOUDINARY_API_SECRET
) {
  console.error(
    "Cloudinary configuration missing. Check environment variables."
  );
  process.exit(1);
}

// Initialize app
// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// CORS Configuration
const allowedOrigins = [
  "https://ambispinetechnologies.com",
  "http://localhost:3000",
  "http://localhost:5173",
  "http://localhost",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

// Import Routes
const companyRoutes = require("./routes/companyRoutes");
const teamRoutes = require("./routes/teamRoutes");
const careerRoutes = require("./routes/careerRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");
const jobRoutes = require("./routes/jobRoutes");
const jobFormRoutes = require("./routes/jobFormRoutes");
const contactRoutes = require("./routes/contactRoutes");
const contentRoutes = require("./routes/contentRoutes");
const authRoutes = require("./routes/authRoutes");
const employeeRoutes = require("./routes/employeeRoute");
const imageRoutes = require("./routes/imageRoute");
const newsRoutes = require("./routes/newsRoutes");
const productRoutes = require("./routes/productRoutes");
const quotationRoutes = require("./routes/quotationRoutes");
const errorHandler = require("./middlewar/errorHandler");
// Routes
app.use("/api", imageRoutes);
app.use("/api", companyRoutes);
app.use("/api", employeeRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/admin/careers", careerRoutes);
app.use("/api", jobRoutes);
app.use("/api", jobFormRoutes);
app.use("/api", newsRoutes);
app.use("/api/products", productRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/content", contentRoutes);
app.use("/api/admin", authRoutes);
app.use("/api/quotations", quotationRoutes);

// Health check endpoint
app.get("/health", async (req, res) => {
  const dbStatus = (await connectDB.isConnected()) ? "UP" : "DOWN";
  res.status(200).json({
    status: "UP",
    database: dbStatus,
    timestamp: new Date(),
  });
});

// Error handling middleware
app.use(errorHandler);

// Handle uncaught exceptions and rejections
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  process.exit(1);
});

// Graceful shutdown
process.on("SIGINT", async () => {
  console.log("Shutting down server...");
  await mongoose.connection.close();
  process.exit(0);
});

// Start the server
// app.listen(port, () => {
//   console.log(`Server running on ${port} in ${envMode} mode.`);
// });
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));