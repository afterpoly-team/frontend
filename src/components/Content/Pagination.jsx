import React, { useState, useEffect } from "react";
import { Link, NavLink, Redirect, useHistory } from "react-router-dom";
import "./Content.css";
import "./pagination.css";

const Pagination = (props) => {
  // * pagination
  let history = useHistory();
  const pages = [];
  for (let i = 1; i <= props.totalPages; ++i) {
    pages.push(i);
  }

  const handleClick = (number) => {
    // history.push(`/events/page=${event.target.id}`);
    return `/events/page=${number}`;
  };

  const renderPageNumbers = pages.map((number) => {
    return (
      <li
        key={number}
        id={number}
        onClick={() => {
          window.location.href = handleClick(number);
        }}
        className={props.currentPage == number ? "active" : null}
      >
        {number}
      </li>
    );
  });

  const btnNext = () => {
    if (props.next) {
      let curPageInt = parseInt(props.currentPage, 10);
      curPageInt += 1;
      return `/events/page=${curPageInt}`;
    }
  };

  const btnPrev = () => {
    if (props.prev) {
      let curPageInt = parseInt(props.currentPage, 10);
      curPageInt -= 1;
      const res = `/events/page=${curPageInt}`;
      return res;
    }
  };

  return (
    <div>
      <a
        onClick={() => {
          window.location.href = btnPrev();
        }}
        className="linkPrevNext"
      >
        Previous
      </a>
      <ul className="pageNumbers">{renderPageNumbers}</ul>
      <a
        onClick={() => {
          window.location.href = btnNext();
        }}
        className="linkPrevNext"
      >
        Next
      </a>
    </div>
  );
};

export default Pagination;
