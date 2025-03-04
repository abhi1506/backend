

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { newsData } from "../../data/newsMockData";
import newsHero1 from "../../assets/AI.jpg";
import "./newssection.css";

const NewsSection = ({ news }) => {
  const data = news.length > 0 ? news : newsData;
  const eventData = Array.isArray(data) ? data[0] : data;

  // Reusable component for "See More" and "See Less" functionality
  const ExpandableText = ({ text, maxWords = 30 }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Function to truncate the text to a specified number of words
    const truncateText = (text, maxWords) => {
      const words = text.split(" ");
      if (words.length > maxWords) {
        return words.slice(0, maxWords).join(" ") + "...";
      }
      return text;
    };

    // Toggle expanded state
    const toggleExpand = (e) => {
      e.preventDefault(); // Prevent default behavior (e.g., Link navigation)
      setIsExpanded(!isExpanded);
    };

    const truncatedText = truncateText(text, maxWords);
    const showSeeMore = text.split(" ").length > maxWords;

    return (
      <>
        <p>{isExpanded ? text : truncatedText}</p>
        {showSeeMore && (
          <button onClick={toggleExpand} className="see-more-button-ambi-news">
            {isExpanded ? "See Less" : "See More"}
          </button>
        )}
      </>
    );
  };

  return (
    <section className="news-section-ambi-news">
      <div className="news-container-ambi-news">
        {/* Left Column */}
        <div className="main-content-news-ambi-news">
          <h2 className="section-title-ambi-news">Upcoming Event & Launches</h2>
          <div className="event-details-ambi-news">
            <h3 className="event-title-ambi-news">
              {data?.mainEvent?.title || eventData?.title}
            </h3>
            <p className="event-subtitle-ambi-news">
              {data?.mainEvent?.eventData?.title}
            </p>
          </div>

          <div className="featured-image-ambi-news">
            <img
              src={data?.mainEvent?.imageUrl || eventData?.images[0]?.url}
              alt="Featured news"
              className="main-image-ambi-news"
            />
          </div>
          <div className="link-subtitle-ambi-news">
            <ExpandableText
              text={data?.mainEvent?.linkText || eventData?.content || ""}
            />
          </div>
        </div>

        {/* Right Column - Feature List */}
        <div className="features-list-ambi-news">
          {(Array.isArray(data) ? data : data?.features || []).map(
            (feature) => (
              <Link
                to={`/news/${feature?.id || feature?._id}`}
                key={feature?.id}
                className="feature-card-ambi-news"
              >
                <div className="feature-image-ambi-news">
                  <img
                    src={feature?.imageUrl || feature?.images?.[0]?.url}
                    alt={feature?.title}
                  />
                </div>
                <div className="feature-content-ambi-news">
                  <h3 className="feature-title-ambi-news">{feature?.title}</h3>
                  <div
                    className="feature-description-ambi-news"
                    style={{ color: "#fff" }}
                  >
<p>
  {feature?.description?.length > 100 || feature?.content?.length > 100
    ? (feature?.description || feature?.content)?.slice(0, 100) + "..."
    : feature?.description || feature?.content || ""}
  
  {((feature?.description?.length > 100) || (feature?.content?.length > 100)) && (
    <Link 
      to={`/news/${feature._id}`} 
      className="see-more-link"
    >
      {" "}See More
    </Link>
  )}
</p>
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
