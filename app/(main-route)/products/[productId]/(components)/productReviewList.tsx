import ReviewItem from "./reviewItem";

export interface UserRating {
  id: number;
  rating: number;
  comment: string;
  user: string;
}

export const userRatings: UserRating[] = [
  { id: 1, rating: 1, comment: "Great product!", user: "chukwudi" },
  { id: 2, rating: 2, comment: "I love it!", user: "Bright" },
  { id: 3, rating: 3, comment: "It's okay.", user: "Femi" },
  { id: 3, rating: 3, comment: "so far so good", user: "Chris" },
];
const ReviewList: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <h1 className=" font-semibold">Verified Customer Feedback</h1>
      <ul className="divide-y divide-slate-200">
        {userRatings.map((userRating) => (
          <ReviewItem key={userRating.id} userRating={userRating} />
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
