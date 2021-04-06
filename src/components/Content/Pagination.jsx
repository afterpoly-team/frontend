import React, { useState, useEffect } from "react";
import { Link, NavLink, Redirect, useHistory } from "react-router-dom";
import "./Content.css";
import "./pagination.css";

const Pagination = (props) => {
  // * pagination

  const pages = [];
  for (let i = 1; i <= props.totalPages; ++i) {
    pages.push(i);
  }

  const handleClick = (number) => {
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
        // className={props.currentPage == number ? "active" : null}
      >
        {number}
      </li>
    );
  });

  return (
    <div>
      {props.currentPage}
      <ul className="pageNumbers">{renderPageNumbers}</ul>
    </div>
  );
};

export default Pagination;
