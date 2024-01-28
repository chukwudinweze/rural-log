"use client";

import toast from "react-hot-toast";
import { transactionList } from "../../_components/transaction-list";
import TxnDetail from "./_componets/transaction-detail";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";

interface Iparams {
  transactionId: string;
}

const TransactionId = ({ params }: { params: Iparams }) => {
  const [dealerId, setDealerId] = useState("");
  const router = useRouter();

  const transactionItem = transactionList.find(
    (transaction) => transaction.id.toLocaleString() === params.transactionId
  );

  const handleRouteToDealer = () => {
    if (dealerId) {
      toast.success(`Transaction Routed ${dealerId}`);
      router.back();
    }
  };

  const handledealerId = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    let value = e.target.value;

    if (value) {
      setDealerId(value);
    }
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
              <p className="font-bold text-green-700">
                Enter Dealer&apos;s username or ID
              </p>
              <input
                className="border border-slate-200 p-2 w-full"
                type="text"
                value={dealerId}
                onChange={handledealerId}
              />
            </div>
          </div>
        </div>

        <button
          disabled={!dealerId}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-2 rounded-md mb:rounded disabled:cursor-not-allowed mb-10 w-[40%]"
          onClick={handleRouteToDealer}
        >
          Route to Dealer
        </button>
      </div>
    </div>
  );
};

export default TransactionId;
