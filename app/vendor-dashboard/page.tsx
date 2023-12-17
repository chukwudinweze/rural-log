import React from "react";
import RecordCard from "./_components/record-card";
import { FileStack, Layers, ArrowUpNarrowWide } from "lucide-react";
import UploadProduct from "./_components/upload-product";

const VendorDashboard = () => {
  return (
    <section className=" min-h-[100vh] flex">
      <div className="border w-[18%] p-4 text-xl text-center font-bold">
        <p>Femi</p>
        <p className="my-4"> Agent ID:34dhr8463</p>
      </div>
      <div className="flex flex-col  flex-1 ml-4 py-6">
        <div className="flex space-x-6">
          <RecordCard title="Total Products" amount={20} icon={Layers} />
          <RecordCard title="Sold" amount={1500} icon={ArrowUpNarrowWide} />
          <RecordCard
            title="Revenue"
            amount={1500}
            icon={FileStack}
            nairaSymbol
          />
        </div>
        <div className="w-full lg:w-[80%] flex justify-center">
          <UploadProduct />
        </div>
      </div>
    </section>
  );
};

export default VendorDashboard;
