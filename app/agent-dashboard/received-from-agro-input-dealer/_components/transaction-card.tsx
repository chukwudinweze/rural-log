"use client";

import Link from "next/link";

interface TransactionCard {
  id: number;
  title: string;
  customerName: string;
  dateRequested: string;
}

const TransactionCard = ({
  id,
  title,
  customerName,
  dateRequested,
}: TransactionCard) => {
  return (
    <div className="bg-slate-200 flex justify-between items-center p-2 rounded text-lg w-full mt-4 ">
      <div className="flex justify-between items-center w-full flex-1">
        <p className="text-sm">{title}</p>
        <p className="text-xs italic">{dateRequested}</p>
        <p className="text-xs italic text-white bg-green-700 p-[2.5px] py-[1px] rounded-lg">
          Available
        </p>
        <p className="text-xs italic">DealerId: 89875783</p>
      </div>
    </div>
  );
};

export default TransactionCard;
