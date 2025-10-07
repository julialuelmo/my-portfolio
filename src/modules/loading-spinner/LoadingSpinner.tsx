import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#FAF3E8] dark:bg-[#171D26] ">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-borderLight"></div>
    </div>
  );
};

export default LoadingSpinner;
