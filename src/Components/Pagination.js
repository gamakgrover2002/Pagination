import React from "react";

function Pagination({ page, totalPages, onPageChange }) {
  if (totalPages <= 0) return null;

  const pageNumbers = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div className="pagination">
      <button
        className="side-btn"
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
      >
        Previous
      </button>
      {pageNumbers.map((num) => (
        <button
          key={num}
          onClick={() => onPageChange(num)}
          className={num === page ? "active" : "btn"}
        >
          {num}
        </button>
      ))}
      <button
        className="side-btn"
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
