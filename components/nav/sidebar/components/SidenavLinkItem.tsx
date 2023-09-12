import { cn } from "@/lib/utils";
import Link from "next/link";

interface SidenavLinkItemProps {
  label: string;
  href: string;
  active: boolean;
  icon: any;
}
const SidenavLinkItem: React.FC<SidenavLinkItemProps> = ({
  label,
  href,
  active,
  icon: Icon,
}) => {
  return (
    <li
      className={cn(
        "group px-2 py-3 rounded-md hover:bg-redBrand",
        active && "bg-redBrand"
      )}
    >
      <Link
        href={href}
        className="flex items-center justify-start gap-3 font-bold text-gray-600 group-hover:text-white text-sm"
      >
        <Icon />
        {label}
      </Link>
    </li>
  );
};

export default SidenavLinkItem;
