"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";

import React from "react";
import LowerNavItem from "./LowerNavItem";

const LowerNav = () => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        label: "Home",
        href: "/",
        active: pathname === "/",
      },
      {
        label: "Products",
        href: "/products",
        active: pathname === "/products",
      },
      {
        label: "About",
        href: "/about",
        active: pathname === "/products",
      },
      {
        label: "Blog",
        href: "/blog",
        active: pathname === "/blog",
      },
      {
        label: "Contact us",
        href: "/contact-us",
        active: pathname === "/contact-us",
      },
    ],
    [pathname]
  );
  return (
    <ul>
      {routes.map((route) => (
        <LowerNavItem
          key={route.label}
          label={route.label}
          href={route.href}
          active={route.active}
        />
      ))}
    </ul>
  );
};

export default LowerNav;
