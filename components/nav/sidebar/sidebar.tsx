"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import SidenavLinkItem from "./components/SidenavLinkItem";
import {
  TramFront,
  Droplets,
  Bean,
  Egg,
  Factory,
  Strikethrough,
  Siren,
  Scale3D,
} from "lucide-react";

const SideBar = () => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        label: "Agricultural Equipments",
        href: "/agroequipments",
        active: pathname === "/agroequipments",
        icon: TramFront,
      },
      {
        label: "Agricultural Chemicals",
        href: "/agrochemicals",
        active: pathname === "/agrochemicals",
        icon: Droplets,
      },
      {
        label: "Seeds & Seedlings",
        href: "/seedlings",
        active: pathname === "/seedlings",
        icon: Bean,
      },
      {
        label: "Poultry Equipment",
        href: "/poultry-equipment",
        active: pathname === "/poult-equipment",
        icon: Egg,
      },
      {
        label: "Animal Feed",
        href: "/animal-feed",
        active: pathname === "/animal-feed",
        icon: Factory,
      },
      {
        label: "Garden Equipment",
        href: "/garden-equipment",
        active: pathname === "/garden-equipment",
        icon: Strikethrough,
      },
      {
        label: "Solar Equipment",
        href: "/solar-equipment",
        active: pathname === "/solar-equipment",
        icon: Siren,
      },
      {
        label: "Rent Equipments",
        href: "/rent-equiments",
        active: pathname === "/rent-equiments",
        icon: Scale3D,
      },
    ],
    [pathname]
  );
  return (
    <aside className="hidden md:block h-full bg-white min-w-[240px] pl-1 pr-4 py-4">
      <ul className="flex flex-col gap-4 h-full">
        {routes.map((route) => (
          <SidenavLinkItem
            key={route.href}
            label={route.label}
            active={route.active}
            href={route.href}
            icon={route.icon}
          />
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
