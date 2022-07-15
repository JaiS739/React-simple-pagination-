import React, { useState } from "react";

const Pagination = () => {
  const [currentButton, setCurrentButton] = useState(1);

  const pages = 5;
  const noOfPages = [];

  for (let i = 1; i <= pages; i++) {
    noOfPages.push(i);
  }

  return (
    <div>
      <h1>Pagination</h1>
      <div className="pagination-container">
        <button
          href="!#"
          //   className="disabled"
          disabled={currentButton <= 1}
          onClick={() => setCurrentButton((prev) => prev - 1)}
        >
          prev
        </button>

        {noOfPages.map((e) => (
          <a href="!#" className={currentButton === e && "active"}>
            {e}
          </a>
        ))}

        <button
          disabled={currentButton >= pages}
          //   href="!#"
          onClick={() => setCurrentButton((prev) => prev + 1)}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
