import React, { useState, useEffect } from "react";
import { Link, NavLink, Redirect, useHistory } from "react-router-dom";
import "./Content.css";
import "./pagination.css";
import { useLanguage } from "../../context/LanguageTranslator";
import { getLanguage } from "../../utils/getLanguage";

const Pagination = (props) => {
  // * pagination
  const { language } = useLanguage();
  const currentLanguage = getLanguage(language);

  const [currentPage, setCurrentPage] = useState(props.currentPage);
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

  const handleFirst = () => {
    setCurrentPage(1);
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < props.totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleLast = () => {
    setCurrentPage(props.totalPages);
  };

  return (
    <div>
      {currentPage}
      <ul className="pageNumbers">
        {/* << (first) */}
        <li>
          <Link
            className="linkPrevNext"
            onClick={handleFirst}
            to={`/events/${1}`}
          >
            &#60;&#60;
          </Link>
        </li>
        {/* < (prev) */}
        <li>
          <Link
            className="linkPrevNext"
            onClick={handlePrev}
            to={`/events/${currentPage - 1}`}
          >
            &#60;
          </Link>
        </li>
        {renderPageNumbers}
        {/* > (next) */}
        <li>
          <Link
            className="linkPrevNext"
            onClick={handleNext}
            to={`/events/${currentPage + 1}`}
          >
            &#62;
          </Link>
        </li>
        {/* >> (last) */}
        <li>
          <Link
            className="linkPrevNext"
            onClick={handleLast}
            to={`/events/${props.totalPages}`}
          >
            &#62;&#62;
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
