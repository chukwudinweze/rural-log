import { cn } from "@/lib/utils";
import Link from "next/link";

interface LowerNavItem {
  label: string;
  href: string;
  active: boolean;
  flex?: string;
}
const LowerNavItem: React.FC<LowerNavItem> = ({
  active,
  href,
  label,
  flex,
}) => {
  return (
    <li
      className={cn(
        " px-1 transition hover:text-white hover:border-redBrand hover:border-b-2 duration-300 py-1",
        flex && "text-yellow-50 border-b-2 border-redBrand "
      )}
    >
      <Link
        href={href}
        className={cn("font-bold text-sm md:text-base text-white")}
      >
        {label}
      </Link>
    </li>
  );
};

export default LowerNavItem;
