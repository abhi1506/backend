import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./newscarousel.css";
import carouselHome1 from "../../../assets/cloud22 (8).jpg";
import carouselHome2 from "../../../assets/cloud22 (7).jpg";
import carouselHome3 from "../../../assets/cloud22 (6).jpg";
// import carouselHome4 from "../../assets/cloud22 (2).jpg";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsPosts } from "../../../redux/admin/newsSlice/newsSlice";

import { Link } from "react-router-dom";

const NewsCarousel = () => {
  const dispatch = useDispatch();
  
  const { news, loading, error } = useSelector((state) => state.news);

  
       
       
   

    useEffect(() => {
        dispatch(fetchNewsPosts());
    }, [dispatch]);

  const [activeTab, setActiveTab] = useState("news");
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const data = {
    news: news?.length ? news : [
      {
        title: "Witness the industry 4.0",
        description:
          "Feel the combination of digitalization, automation and data exchange.",
        image: carouselHome1,
      },
      {
        title: "Infrastructure & Data migration",
        description:
          "Improve infrastructure reliability, scalability, and performance.",
        image: carouselHome2,
      },
    ],
    // products:products?.length ? products : [
    //   {
    //     name: "Product Feature 1",
    //     description: "Innovative solutions for modern enterprises.",
    //     image: carouselHome3,
    //   },
    //   {
    //     name: "Product Feature 2",
    //     description: "Streamlined productivity and performance.",
    //     image: carouselHome2,
    //   },
    // ],
  };

  const handleSlide = (direction) => {
    const container = containerRef.current;
    const cards = container.getElementsByClassName("card-home-news");
    const cardWidth = cards[0].offsetWidth + 24;

    if (direction === "left" && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      container.style.transform = `translateX(-${
        (currentIndex - 1) * cardWidth
      }px)`;
    } else if (
      direction === "right" &&
      currentIndex < data[activeTab].length - 1
    ) {
      setCurrentIndex((prev) => prev + 1);
      container.style.transform = `translateX(-${
        (currentIndex + 1) * cardWidth
      }px)`;
    }
  };

  return (
    <div className="carousel-container-home-news">
      <h1 className="carousel-title-home-news">News and Insights</h1>

      <div className="tab-buttons">
        {["news"].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setCurrentIndex(0);
              if (containerRef.current) {
                containerRef.current.style.transform = "translateX(0)";
              }
            }}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="carousel-wrapper-home-news">
  <div ref={containerRef} className="card-container-home-news">
    {data[activeTab].map((item, index) => (
      <div key={index} className="card-home-news">
        
        <Link to={`/${activeTab}`} className="card-link">
          <img
            src={item?.image || item?.images?.[0]?.url}
            alt={item?.title || item?.name}
            className="card-image-home-news"
          />
        </Link>

        <div className="card-content-home-news">

        <Link to={`/${activeTab}/${item._id}`} className="card-title-link">
  <h3 className="card-title-home-news text-white">
    {item?.title || item?.name}
  </h3>
</Link>


          <p className="card-description-home-news">{item.description}</p>

          {/* Additional Details */}
          {activeTab === "news" && (
            <div className="card-meta">
              <span className="card-category">Category: {item?.category}</span>
              <span className={`card-featured ${item?.featured ? "featured-yes" : "featured-no"}`}>
                Featured: {item?.featured ? "Yes" : "No"}
              </span>
              <span className="card-date">
                Date: {item?.publishDate ? new Date(item.publishDate).toLocaleDateString() : "N/A"}
              </span>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>

  {/* Navigation Buttons */}
  <div className="navigation-buttons-home-news">
    <button
      onClick={() => handleSlide("left")}
      disabled={currentIndex === 0}
      className={`nav-button ${currentIndex === 0 ? "disabled" : ""}`}
    >
      <ChevronLeft size={24} />
    </button>
    <button
      onClick={() => handleSlide("right")}
      disabled={currentIndex === data[activeTab].length - 1}
      className={`nav-button ${
        currentIndex === data[activeTab].length - 1 ? "disabled" : ""
      }`}
    >
      <ChevronRight size={24} />
    </button>
  </div>
</div>
    </div>
  );
};

export default NewsCarousel;

