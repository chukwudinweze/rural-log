import useRenderStars from "@/hooks/useRenderStars";
import { UserRating } from "./productReviewList";
import dateFormat, { masks } from "dateformat";

const ReviewItem: React.FC<{ userRating: UserRating }> = ({ userRating }) => {
  const stars = useRenderStars(userRating.rating);

  const date = new Date();
  let formattedDate = dateFormat(date, "dd-mm-yyyy");

  return (
    <li className="mb-1 p-1">
      <div className="text-lg mb-1">{stars}</div>
      <div className="text-gray-500 mb-1">{userRating.comment}</div>
      <div className="text-gray-500 text-sm">
        {formattedDate}{" "}
        <span className="italic text-xs">by {userRating.user}</span>
      </div>
    </li>
  );
};

export default ReviewItem;
