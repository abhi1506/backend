import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NewsRoom.css";
import Pagination from "./Pagination";
import mockPaginationData from "../../data/mockPagination";

const NewsRoom = ({ news }) => {
  const [newsItems, setNewsItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (news && Array.isArray(news) && news.length > 0) {
      // Use the provided news prop if it exists and is not empty
      setNewsItems(news);
      setTotalPages(1); // Assuming one page when using provided news
    } else {
      // Otherwise, fetch data using the mockPaginationData function
      fetchNewsData(currentPage);
    }
  }, [news, currentPage]);

  const fetchNewsData = async (page) => {
    setIsLoading(true);
    try {
      const response = await mockPaginationData(page);
      setNewsItems(response.items);
      setTotalPages(response.totalPages);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="news-room">
      <div className="news-room-container">
        <h1 className="news-room-title">News Room</h1>
        <div className="news-room-underline"></div>

        {isLoading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="news-grid">
            {newsItems.map((item) => (
              <Link
                to={`/news/${item.id || item._id}`}
                key={item.id || item._id}
                className="news-card"
              >
                <div className="news-image-container">
                  <img
                    src={item.imageUrl || item?.images[0]?.url}
                    alt={item.heading || item.title}
                    className="news-image"
                  />
                  <div className="news-overlay">
                    <span className="read-more">Read More</span>
                  </div>
                </div>
                <div className="news-content">
                  <h3 className="news-heading">
                    {item.heading || item.title}
                  </h3>
                  <p className="news-subtitle">
                    {item.subtitle || item.content}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}

       
        {(!news || (Array.isArray(news) && news.length === 0)) && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default NewsRoom;
