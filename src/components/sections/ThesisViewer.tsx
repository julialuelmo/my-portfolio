import React, { useState } from "react";
import LoadingSpinner from "../../modules/loading-spinner/LoadingSpinner";

const ThesisViewer: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-full h-screen relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <LoadingSpinner />
        </div>
      )}
      <iframe
        src="https://example.com/project-brief.pdf"
        className="w-full h-full"
        title="Project brief PDF"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default ThesisViewer;
