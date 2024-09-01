import TxnList from "../transaction-list";

const Page = () => {
  return (
    <div>
      <h3 className="text-center font-bold text-xl mt-5 capitalize">
        Pending Transactions
      </h3>
      <TxnList />
    </div>
  );
};

export default Page;
