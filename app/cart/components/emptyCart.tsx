import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const EmptyCart = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[30%]  overflow-hidden">
        <Image
          height={200}
          width={200}
          src="/images/emptyCart.png"
          alt="empty cart"
          className="w-full"
        />
      </div>
      <h2 className="font-bold">Empty</h2>
      <button
        onClick={() => router.push("/")}
        className="bg-green-700 px-4 py-2 w-[30%] text-white rounded-md mt-5 mb-20"
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default EmptyCart;
