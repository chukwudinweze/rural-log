// Create a new file for your custom hook, e.g., useRenderStars.tsx

import React from "react";

const useRenderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <span key={i} className="text-yellow-400">
          &#9733;
        </span>
      );
    } else {
      stars.push(
        <span key={i} className="text-gray-300">
          &#9733;
        </span>
      );
    }
  }
  return stars;
};

export default useRenderStars;
