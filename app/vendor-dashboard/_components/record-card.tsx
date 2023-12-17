import { LucideIcon } from "lucide-react";

interface RecordCardProps {
  title: string;
  amount: number;
  icon: LucideIcon;
  nairaSymbol?: boolean;
}

const RecordCard = ({
  icon: Icon,
  amount,
  title,
  nairaSymbol,
}: RecordCardProps) => {
  return (
    <div className="flex flex-col space-y-2 h-28 w-60 bg-green-700 pt-6 pl-2 text-white font-semibold text-xl">
      <div className="flex items-center space-x-6">
        <h6>{title}</h6>
        <div>
          <Icon size="40px" />
        </div>
      </div>
      <div className="flex space-x-1">
        {nairaSymbol && <p>&#x20A6;</p>}
        <p>{amount}</p>
      </div>
    </div>
  );
};

export default RecordCard;
