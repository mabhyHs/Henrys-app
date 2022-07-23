/* eslint-disable react/prop-types */
/* eslint-disable radix */
/* eslint-disable no-restricted-syntax */
import React from 'react';

function Pagination({ burgersPerPage, burgersTotal, onSetPage }) {
  const pages = [];
  for (let i = 1; i <= Math.ceil(burgersTotal / burgersPerPage); i += 1) {
    pages.push(i);
  }

  const handleClick = (e) => {
    for (const page of pages) {
      if (page === parseInt(e.target.value)) {
        document.getElementById(page);
      } else {
        document.getElementById(page);
      }
    }
    onSetPage(e.target.value);
  };

  return (
    <div>
      {pages &&
        pages.map((page) => (
          <button
            type="button"
            id={page}
            value={page}
            key={page}
            onClick={handleClick}
          >
            {page}
          </button>
        ))}
    </div>
  );
}

export default Pagination;
