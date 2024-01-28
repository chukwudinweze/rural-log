import React from "react";
import TxnList from "./_components/transaction-list";

const RecievedFromDealer = () => {
  return (
    <div className="w-[100%] border ">
      <h3 className="text-center font-bold text-xl mt-5">
        Pending transaction to be received from the Agro-input
      </h3>
      <TxnList />
    </div>
  );
};

export default RecievedFromDealer;
