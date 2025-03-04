import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsById, fetchNewsPosts } from "../../redux/admin/newsSlice/newsSlice";
import RecentPosts from "./RecentPosts";
import { newsData } from "../../data/newsMockData";
import "./featuredetail.css";

const FeatureDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);

  const { selectedNews, news, loading, error } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNewsById(id));
    dispatch(fetchNewsPosts());
  }, [dispatch, id]);

  const feature = selectedNews || news.find((f) => f.id === id) || newsData.features.find((f) => f.id === parseInt(id));

  if (loading) {
    return <div className="loading-message">Loading news post...</div>;
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  if (!feature) {
    return <div className="error-message">Feature not found.</div>;
  }

  const description = feature.description || feature.content;
  const maxLength = 150;

  return (
    <div className="feature-container-fluid">
      <div className="feature-detail-container">
        <Link to="/news" className="back-button">
          ← Back to News
        </Link>

        <div className="feature-detail-content">
          <div className="feature-detail-header">
            <h1 className="feature-detail-title">{feature.title}</h1>

           
            <p className="feature-detail-description">
              {isExpanded ? description : `${description.slice(0, maxLength)}...`}
              {description.length > maxLength && (
                <span 
                  className="see-more"
                  onClick={() => setIsExpanded(!isExpanded)}
                  style={{ color: "blue", cursor: "pointer", marginLeft: "5px" }}
                >
                  {isExpanded ? "See Less" : "See More"}
                </span>
              )}
            </p>
          </div>

          {feature.imageUrl || feature.images?.[0]?.url ? (
            <div className="feature-detail-image">
              <img src={feature.imageUrl || feature.images[0]?.url} alt={feature.title} />
            </div>
          ) : (
            <p className="no-image">No image available</p>
          )}

          {feature.fullContent?.length > 0 && (
            <div
              className="feature-detail-body"
              dangerouslySetInnerHTML={{
                __html: feature.fullContent?.[0]?.split(",").join("<br/>") || "",
              }}
            />
          )}
        </div>
      </div>

      <RecentPosts news={news} />
    </div>
  );
};

export default FeatureDetail;
