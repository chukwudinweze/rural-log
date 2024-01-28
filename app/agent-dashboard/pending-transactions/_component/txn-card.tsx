"use client";

import { LucideIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface TxnCardProps {
  title: string;
  amount: number;
  icon?: LucideIcon;
  nairaSymbol?: boolean;
  bgColor?: string;
  path?: string;
}

const TxnCard = ({
  icon: Icon,
  amount,
  title,
  nairaSymbol,
  bgColor,
  path,
}: TxnCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (!path) {
      return;
    }
    router.push(path);
  };

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col space-y-2 h-30 ${
        bgColor || "bg-yellow-600"
      } pt-6 px-3 pb-6 text-white font-semibold text-2xl rounded-sm cursor-pointer mt-5`}
    >
      <div className="flex items-center space-x-6">
        <h6>{title}</h6>
        <div>{Icon && <Icon size="40px" />}</div>
      </div>
      <div className="flex space-x-1">
        {nairaSymbol && <p>&#x20A6;</p>}
        <p>{amount}</p>
      </div>
    </div>
  );
};

export default TxnCard;
