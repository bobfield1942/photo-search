import React, { useState } from "react";

type Props = {
  totalRecords: number;
  pageLimit: number;
  pageNeighbours: number;
  onClick: (page: number) => void;
};

function Pagination({ totalRecords, pageLimit, onClick }: Props) {
  const [page, setPage] = useState(1);

  const handleClick = (pageNo: number) => {
    setPage(pageNo);
    return onClick(pageNo);
  };

  return (
    <nav
      className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Showing
          <span className="font-medium">1</span>
          to
          <span className="font-medium">20</span>
          of
          <span className="font-medium">{totalRecords}</span>
          results
        </p>
      </div>
      <div className="flex flex-1 justify-between sm:justify-end">
        <button
          disabled={page === 1}
          onClick={() => handleClick(page - 1)}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => handleClick(page + 1)}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </button>
      </div>
    </nav>
  );
}

export default Pagination;
