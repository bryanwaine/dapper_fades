"use client";
import { usePathname } from "next/navigation";
import type { FC, ReactNode } from "react";
import clsx from "clsx";

type CurrentPageProviderProps = {
  href: string;
  children: ReactNode;
};

export const CurrentPageProvider: FC<CurrentPageProviderProps> = ({
  href,
  children,
}) => {
  const pathname = usePathname();

  const active = href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <div
      className={clsx("group", {
        "active-page": active,
      })}
    >
      {children}
    </div>
  );
};
