"use client";

import { FileStack, Layers, ArrowUpNarrowWide } from "lucide-react";
import RecordCard from "../agent-dashboard/_components/record-card";

const VendorDashboard = () => {
  return (
    <section className=" min-h-[100vh] flex">
      <div className="flex flex-col  flex-1 ml-4 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <RecordCard
            title="Fulfilled Transactions"
            amount={20}
            icon={Layers}
          />
          <RecordCard
            title="Pending transactions"
            amount={1500}
            icon={ArrowUpNarrowWide}
            bgColor="bg-redBrand"
            path="/agro-input-dealer/pending"
          />
          <RecordCard
            title="Transactions Routed Back To The Agent"
            amount={1500}
            icon={FileStack}
            nairaSymbol
          />
        </div>
      </div>
    </section>
  );
};

export default VendorDashboard;
