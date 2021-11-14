import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="w-full h-full border-t-2 border-b-2 border-purple-500 rounded-full postImg animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
