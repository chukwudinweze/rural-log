import { userRatings } from "./productReviewList";

const OverallRating = () => {
  // Calculate the overall average rating
  const totalRatings = userRatings.length;
  const totalRatingSum = userRatings.reduce(
    (sum, userRating) => sum + userRating.rating,
    0
  );
  const overallAverageRating =
    totalRatings > 0 ? totalRatingSum / totalRatings : 0;

  // Calculate the number of yellow stars for the overall average rating
  const yellowStars = Math.floor(overallAverageRating);
  const grayStars = 5 - yellowStars;

  // Calculate the average ratings for each star category
  const averageRatings = [0, 0, 0, 0, 0, 0]; // Index 0 is unused for easier indexing
  userRatings.forEach((userRating) => {
    averageRatings[userRating.rating]++;
  });

  return (
    <div className="bg-white border-t border-slate-200">
      <div className="mb-1 text-sm  rounded p-4 pl-0 ">
        <div className="text-2xl font-extrabold text-yellow-400">
          {yellowStars}/{5}
        </div>
        <div className="text-2xl ">
          {[...Array(yellowStars)].map((_, index) => (
            <span className="text-yellow-400" key={index}>
              &#9733;
            </span>
          ))}
          {[...Array(grayStars)].map((_, index) => (
            <span className="text-gray-300" key={index}>
              &#9733;
            </span>
          ))}
        </div>
        <div className="text-slate-600"> Overall Average Rating</div>
      </div>
      <div className="mb-4">
        {[5, 4, 3, 2, 1].map((stars) => (
          <div key={stars} className="text-sm flex items-center">
            <div className="mr-3">
              {stars}{" "}
              <span className="text-yellow-400 inline-block ml-1">&#9733;</span>
            </div>
            <div className="flex items-center w-[50%] md:w-[18%]">
              <div className="text-xs">({averageRatings[stars]})</div>

              <div className="flex-1 ml-2 items-center min-w-full max-h-2">
                <div className="flex h-2 mb-4 overflow-hidden text-xs bg-gray-200 rounded">
                  <div
                    style={{
                      width: `${(averageRatings[stars] / totalRatings) * 100}%`,
                    }}
                    className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-400`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverallRating;
