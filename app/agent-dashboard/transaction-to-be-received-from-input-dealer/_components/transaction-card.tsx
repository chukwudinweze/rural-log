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
    <Link
      href={`/agent-dashboard/transaction-to-be-received-from-input-dealer/${id}`}
      className="bg-slate-200 flex justify-between items-center p-2 rounded text-lg w-full mt-4 "
    >
      <div className="flex justify-between items-center w-full flex-1">
        <p className="text-sm">{title}</p>
        <p className="text-xs italic">{dateRequested}</p>
        <p className="text-xs italic">Dealer-id: 89875783</p>
        <p className="text-sm underline">view details</p>
      </div>
    </Link>
  );
};

export default TransactionCard;
