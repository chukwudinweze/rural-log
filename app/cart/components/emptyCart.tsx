import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const EmptyCart = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[60%]  overflow-hidden">
        <Image
          height={200}
          width={200}
          src="/images/emptyCart.png"
          alt="empty cart"
          className="w-full"
        />
      </div>
      <button
        onClick={() => router.push("/")}
        className="bg-green-700 px-4 py-1 w-[30%] text-white rounded-md mt-5 "
      >
        Return to Shopping
      </button>
    </div>
  );
};

export default EmptyCart;
