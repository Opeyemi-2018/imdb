"use client";

import { useEffect } from "react";

const error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center">
      <h1>something went wrong pleaase try again</h1>
      <button onClick={() => reset()} className="hover:text-amber-600">
        Try Again
      </button>
    </div>
  );
};

export default error;
