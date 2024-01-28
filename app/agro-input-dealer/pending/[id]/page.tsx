"use client";

import toast from "react-hot-toast";
import { ChangeEvent, useState } from "react";
import { transactionList } from "@/app/agent-dashboard/_components/transaction-list";
import TxnDetail from "@/app/agent-dashboard/pending-transactions/[transactionId]/_componets/transaction-detail";
import { useRouter } from "next/navigation";

interface Iparams {
  id: string;
}

const TransactionId = ({ params }: { params: Iparams }) => {
  const [dealerId, setDealerId] = useState("");
  const [date, setDate] = useState("");
  const router = useRouter();

  const transactionItem = transactionList.find(
    (transaction) => transaction.id.toLocaleString() === params.id
  );

  const handleRouteToDealer = () => {
    if (dealerId && date) {
      toast.success(`Transaction Routed back to the agent`);
      router.back();
    }
  };

  const handledealerId = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    let value = e.target.value;
    setDealerId(value);
  };

  const handleDate = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    let value = e.target.value;
    setDate(value);
  };

  return (
    <div className="w-full flex justify-center items-center mt-10 text-center">
      <div className="rounded border w-[80%] py-3">
        <h2 className="font-bold text-xl">Transaction Details</h2>
        <div className="text-left flex flex-col justify-center items-center">
          <div className="w-full md:w-[80%]">
            <TxnDetail label="Transaction Id" value={transactionItem?.id!} />
            <TxnDetail label="Title" value={transactionItem?.name!} grayBg />
            <TxnDetail label="Amount" value={transactionItem?.amount!} />
            <TxnDetail
              label="Total Price"
              value={transactionItem?.price!}
              grayBg
            />
            <TxnDetail
              label="Date Created"
              value={transactionItem?.dateRequested!}
            />
            <TxnDetail
              label="Customer name"
              value={transactionItem?.customerName!}
              grayBg
            />
            {/* address */}
            <TxnDetail label="State" value={transactionItem?.state!} />
            <TxnDetail
              label="Local Govt"
              value={transactionItem?.lGA!}
              grayBg
            />
            <TxnDetail label="Street" value={transactionItem?.street!} />
            <div className="flex justify-between items-center my-10">
              <p className="font-bold text-green-700">Confirm Availability</p>
              <input
                className="border border-slate-200 p-2 w-full"
                type="text"
                value={dealerId}
                onChange={handledealerId}
              />
            </div>
            <div className="flex justify-between items-center my-10">
              <p className="font-bold text-green-700">Fulfillment Date</p>
              <input
                className="border border-slate-200 p-2 w-full"
                type="text"
                value={date}
                onChange={handleDate}
              />
            </div>
          </div>
        </div>

        <button
          disabled={!dealerId || !date}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-2 rounded-md mb:rounded disabled:cursor-not-allowed mb-10 w-[40%]"
          onClick={handleRouteToDealer}
        >
          Route back to Agent
        </button>
      </div>
    </div>
  );
};

export default TransactionId;
