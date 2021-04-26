import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./pagination.css";

const Pagination = (props) => {
  // * pagination

  const initialPage = props.currentPage;
  const totalPages = props.totalPages;

  const [currentPage, setCurrentPage] = useState(initialPage);

  const [prevPage, setPrevPage] = useState(
    initialPage === 1 ? initialPage : initialPage - 1
  );

  // ! BUG: when loading the last page from url (which is unlikely),
  // ! this comparison fails(currentPage != totalPages) and I have no idea why
  // ! probably it is type problem, but is shouldn't be
  const [nextPage, setNextPage] = useState(
    currentPage === totalPages ? initialPage : initialPage + 1
  );

  const [maxPages, setMaxTotalPages] = useState(5);

  const arrayToMatrix = (array, rowsSize) => {
    let matrix = [],
      i,
      k;
    for (i = 0, k = -1; i < array.length; i++) {
      if (i % rowsSize === 0) {
        k++;
        matrix[k] = [];
      }
      matrix[k].push(array[i]);
    }
    return matrix;
  };

  // [1,2,3,4,5,6,7,8]
  const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  // [[1,2,3,4,5],
  // [6,7,8],]
  const pagesMatrix = arrayToMatrix(pagesArray, maxPages);

  // fills array with trash, size===totalPages
  const pages = new Array(totalPages).fill();

  // ! this is a CRUTCH as a BUGFIX
  if (
    currentPage === initialPage &&
    currentPage === totalPages &&
    nextPage === currentPage + 1
  ) {
    setNextPage(currentPage);
  }
  // !______________________________

  const handleClick = (number) => {
    setCurrentPage(number);
    setNextPage(number === totalPages ? number : number + 1);
    setPrevPage(number === 1 ? number : number - 1);
  };

  const renderPageNumbers = pages.map((_, index) => {
    const number = index + 1;

    return (
      <li className={currentPage === number ? "gggg" : null}>
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
    setNextPage(totalPages > 1 ? 2 : 1);
    setPrevPage(1);
  };

  const handlePrev = (cur) => {
    if (cur > 1) {
      setCurrentPage(cur - 1);
      setNextPage(cur);
      setPrevPage(cur === 2 ? cur - 1 : cur - 2);
    }
  };

  const handleNext = (cur) => {
    if (cur < totalPages) {
      setCurrentPage(cur + 1);
      setPrevPage(cur);
      setNextPage(cur === totalPages - 1 ? cur + 1 : cur + 2);
    }
  };

  const handleLast = () => {
    setCurrentPage(totalPages);
    setNextPage(totalPages);
    setPrevPage(totalPages - 1);
  };

  return (
    <div>
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
            onClick={() => {
              handlePrev(currentPage);
            }}
            to={`/events/${prevPage}`}
          >
            &#60;
          </Link>
        </li>
        {renderPageNumbers}
        {/* > (next) */}
        <li>
          <Link
            className="linkPrevNext"
            onClick={() => {
              handleNext(currentPage);
            }}
            to={`/events/${nextPage}`}
          >
            &#62;
          </Link>
        </li>
        {/* >> (last) */}
        <li>
          <Link
            className="linkPrevNext"
            onClick={handleLast}
            to={`/events/${totalPages}`}
          >
            &#62;&#62;
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
