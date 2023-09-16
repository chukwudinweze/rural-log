"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
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

const useRoutes = () => {
  const pathname = usePathname();
  console.log("what::::", pathname);

  const routes = useMemo(
    () => [
      {
        label: "Agricultural Equipments",
        category: "agroequipments",
        active: pathname === "/categories/agroequipments",
        icon: TramFront,
      },
      {
        label: "Agricultural Chemicals",
        category: "agrochemicals",
        active: pathname === "/categories/agrochemicals",
        icon: Droplets,
      },
      {
        label: "Seeds & Seedlings",
        category: "seedlings",
        active: pathname === "/categories/seedlings",
        icon: Bean,
      },
      {
        label: "Poultry Equipment",
        category: "poultry-equipment",
        active: pathname === "/categories/poultry-equipment",
        icon: Egg,
      },
      {
        label: "Animal Feed",
        category: "animal-feed",
        active: pathname === "/categories/animal-feed",
        icon: Factory,
      },
      {
        label: "Garden Equipment",
        category: "garden-equipment",
        active: pathname === "/categories/garden-equipment",
        icon: Strikethrough,
      },
      {
        label: "Solar Equipment",
        category: "solar-equipment",
        active: pathname === "/categories/solar-equipment",
        icon: Siren,
      },
      {
        label: "Rent Equipments",
        category: "rent-equiments",
        active: pathname === "/categories/rent-equiments",
        icon: Scale3D,
      },
    ],
    [pathname]
  );
  return routes;
};

export default useRoutes;
