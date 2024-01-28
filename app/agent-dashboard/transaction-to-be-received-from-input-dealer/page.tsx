import TxnList from "./_components/transaction-list";

const Page = () => {
  return (
    <div>
      <h3 className="text-center font-bold text-xl mt-5 capitalize">
        Transactions To be received from input dealer
      </h3>
      <TxnList />
    </div>
  );
};

export default Page;
