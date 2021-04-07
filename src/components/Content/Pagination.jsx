import React, { useState, useEffect } from "react";
import { Link, NavLink, Redirect, useHistory } from "react-router-dom";
import "./Content.css";
import "./pagination.css";

const Pagination = (props) => {
  // * pagination

  const [currentPage, setCurrentPage] = useState(1);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);

  const pages = new Array(props.totalPages).fill();

  const handleClick = (number) => {
    setCurrentPage(number);
  };

  const renderPageNumbers = pages.map((_, index) => {
    const number = index + 1;
    return (
      <li className={currentPage == number ? "gggg" : null}>
        <Link
          className="linkPrevNext"
          to={`/events/${number}`}
          onClick={() => {
            handleClick(number);
          }}
        >
          {number}
        </Link>
      </li>
    );
  });

  console.log(props);
  return (
    <div>
      {props.currentPage}
      <ul className="pageNumbers">{renderPageNumbers}</ul>
    </div>
  );
};

export default Pagination;
