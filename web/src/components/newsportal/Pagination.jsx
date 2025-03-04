import React from "react";
import "./Pagination.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  return (
    <div className="pagination-container">
      <button
        className={`pagination-btn prev-next ${
          currentPage === 1 ? "disabled" : ""
        }`}
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <span className="arrow-pagination">←</span>
        <span className="btn-text">Previous</span>
      </button>

      <div className="pagination-numbers">
        {getPageNumbers().map((number, index) => (
          <button
            key={index}
            className={`pagination-btn number ${
              number === currentPage ? "active" : ""
            } ${number === "..." ? "dots" : ""}`}
            onClick={() => number !== "..." && onPageChange(number)}
            disabled={number === "..."}
          >
            {number}
          </button>
        ))}
      </div>

      <button
        className={`pagination-btn prev-next ${
          currentPage === totalPages ? "disabled" : ""
        }`}
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
      >
        <span className="btn-text">Next</span>
        <span className="arrow-pagination">→</span>
      </button>
    </div>
  );
};

export default Pagination;
