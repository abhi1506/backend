import { AnimatedCard, AnimatedCardList } from "../animation/animation";
import "./OurSoftwareProduct.css";
import { motion } from "framer-motion";
import { FaBuilding, FaChartLine, FaGraduationCap } from "react-icons/fa"; 

const softwareData = {
  title: "Custom Software Development",
  description:
    "In today's fast-paced digital landscape, custom software development is crucial for businesses to stay ahead of the competition. Our software development services help you design, develop, and deploy robust software solutions that meet your unique needs and goals.",
  categories: [
    {
      category: "Industry-Specific Solutions",
      icon: "🏢", 
      solutions: [
        {
          name: "Banking Software",
          icon: "🏦",
          description:
            "Secure and scalable banking solutions integrating AI-driven fraud detection, automated risk assessment, and seamless digital transactions.",
        },
        {
          name: "HR Management Software",
          icon: "👨‍💼",
          description:
            "Streamline recruitment, payroll, and employee performance management with AI-powered automation and analytics.",
        },
        {
          name: "Healthcare Software",
          icon: "🏥",
          description:
            "Advanced healthcare management solutions for patient records, telemedicine, and AI-assisted diagnostics.",
        },
        {
          name: "Retail POS Software",
          icon: "🛒",
          description:
            "Smart point-of-sale software for inventory tracking, billing automation, and AI-based customer analytics.",
        },
      ],
    },
    {
      category: "Business Productivity Solutions",
      icon: "📈",
      solutions: [
        {
          name: "E-Commerce Software",
          icon: "🛍️",
          description:
            "AI-driven e-commerce platforms with real-time inventory updates, automated marketing tools, and seamless payment integration.",
        },
        {
          name: "Billing and Invoicing Software",
          icon: "💰",
          description:
            "Automated invoicing and billing software with GST compliance, recurring billing, and AI-based financial insights.",
        },
        {
          name: "Project Management Software",
          icon: "📅",
          description:
            "Collaborative project management tools with task automation, real-time reporting, and team productivity tracking.",
        },
      ],
    },
    {
      category: "Education and Field Solutions",
      icon: "🎓",
      solutions: [
        {
          name: "School Management Software",
          icon: "🏫",
          description:
            "Comprehensive software for student enrollment, attendance tracking, and AI-powered personalized learning.",
        },
        {
          name: "Field Service Management Software",
          icon: "🚀",
          description:
            "Mobile-friendly software for real-time job scheduling, route optimization, and technician tracking.",
        },
        {
          name: "E-Learning Platforms",
          icon: "📚",
          description:
            "AI-powered virtual classrooms, interactive assessments, and adaptive learning experiences for students and professionals.",
        },
      ],
    },
  ],
};



const categoryIcons = {
  "Industry-Specific Solutions": <FaBuilding className="category-icon" />,
  "Business Productivity Solutions": <FaChartLine className="category-icon" />,
  "Education and Field Solutions": <FaGraduationCap className="category-icon" />,
};

const SoftwareProduct = () => {
  return (
    <div className="soft-product-section">
      <div className="soft-product-container">
        {/* Section Header */}
        <div className="soft-product-sect-top">
          <h1>{softwareData.title}</h1>
          <p>{softwareData.description}</p>
        </div>

        {/* Categories Mapping */}
        {softwareData.categories.map((category) => (
          <motion.div
            key={category.category}
            className="soft-category-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
           
            <h2 className="soft-ware-produt-title">
              {categoryIcons[category.category]} {category.category}
            </h2>

            
            <div className="soft-product-sec-body">
              {category.solutions.map((solution) => (
                <motion.div
                  key={solution.name}
                  className="soft-product-sec-card"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.2 }}
                >
                  <h5 className="soft-product-card-name">
                    {solution.icon} {solution.name}
                  </h5>
                  <p className="soft-product-card-title">{solution.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SoftwareProduct;

