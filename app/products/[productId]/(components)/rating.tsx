import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface RatingProps {
  productId: string;
}

const Rating: React.FC<RatingProps> = ({ productId }) => {
  const [rating, setRating] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      comment: "",
      rating,
      productId,
    },
  });

  const handleRatingClick = (newRating: number) => {
    setRating(newRating);
    reset({ ...register, rating: newRating });
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    console.log(data);

    axios
      .put(
        "https://1189-154-120-112-139.ngrok-free.app/api/v1/agents/create",
        data
      )
      .then(() => {
        toast.success("Successful, thanks for the feedback");
        reset();
      })
      .catch(() => toast.error("Something went wrong"))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="container mx-auto mt-8 p-3 pb-8 rounded bg-white shadow-sm">
      <h1 className="text-md font-semibold">Customer Rating</h1>
      <p className="text-green-700 mb-3 text-xs italic">
        Your feedback helps us serve you better
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full md:w-[80%] lg:w-[50%] p-2 border rounded pb-5"
      >
        <div className="flex items-center space-x-1 mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={cn(
                "cursor-pointer text-xl font-bold",
                star <= rating ? "text-yellow-400" : "text-gray-300"
              )}
              onClick={() => handleRatingClick(star)}
            >
              &#9733;
            </span>
          ))}
        </div>
        <textarea
          id="comment"
          {...register("comment")}
          {...errors}
          required
          disabled={isLoading}
          className="w-full border border-slate-200 px-2 pt-2 rounded focus:outline-none focus:border-2 focus:border-green-700 bg-transparent"
          placeholder="Leave a comment..."
        ></textarea>
        <input
          id="name"
          {...register("name")}
          {...errors}
          required
          disabled={isLoading}
          placeholder="Enter Your Name"
          className="w-full border border-slate-200 p-2 rounded focus:outline-none focus:border-2 focus:border-green-700 bg-transparent"
        />

        <Button
          type="submit"
          className="w-full py-3 bg-green-700 text-white hover:bg-green-800  mt-5"
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Rating;
