/* eslint-disable react/prop-types */
/* eslint-disable radix */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import Button from 'react-bootstrap/Button';

function Pagination({ burgersPerPage, allProducts, onSetPage }) {
  const pages = [];
  for (let i = 1; i <= Math.ceil(allProducts / burgersPerPage); i += 1) {
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
          <Button
            type="button"
            id={page}
            value={page}
            key={page}
            onClick={handleClick}
            className="btn__round__effect"
          >
            {page}
          </Button>
        ))}
    </div>
  );
}

export default Pagination;
