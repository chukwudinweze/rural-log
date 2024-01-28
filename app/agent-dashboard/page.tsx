"use client";

import React from "react";
import RecordCard from "./_components/record-card";
import { FileStack, Layers, ArrowUpNarrowWide } from "lucide-react";
import UploadProduct from "./_components/upload-product";

const VendorDashboard = () => {
  return (
    <section className=" min-h-[100vh] flex">
      <div className="flex flex-col  flex-1 ml-4 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <RecordCard title="Total Transactions" amount={20} icon={Layers} />
          <RecordCard
            title="Pending transactions"
            amount={1500}
            icon={ArrowUpNarrowWide}
            bgColor="bg-redBrand"
            path="/agent-dashboard/pending-transactions"
          />
          {/* <RecordCard
            title="pending transaction to be received from the Agro-input dealer"
            amount={1500}
            icon={ArrowUpNarrowWide}
            bgColor="bg-yellow-600"
          />
          <RecordCard
            title="Received from the Agro-input dealer for fulfilment"
            amount={1500}
            icon={ArrowUpNarrowWide}
            bgColor="bg-yellow-600"
          />
          <RecordCard
            title="pending transactions to be fulfilled"
            amount={1500}
            icon={ArrowUpNarrowWide}
            bgColor="bg-yellow-600"
          /> */}
          <RecordCard
            title="Fulfilled Transactions"
            amount={1500}
            icon={FileStack}
            nairaSymbol
          />
        </div>
        {/* <div className="w-full lg:w-[80%] flex justify-center">
          <UploadProduct />
        </div> */}
      </div>
    </section>
  );
};

export default VendorDashboard;
