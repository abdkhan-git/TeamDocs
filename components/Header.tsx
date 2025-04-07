import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import React from "react";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href="/" className="md:flex-1">
        <div className="hidden md:flex items-center">
          <Image
            src="/assets/icons/logo-icon.svg"
            alt="Logo with name"
            width={32}
            height={32}
          />
          <span className="flex item-center gap-2 lg:gap-4">TeamDocs</span>
        </div>
        <Image
          src="/assets/icons/logo-icon.svg"
          alt="Logo"
          width={32}
          height={32}
          className="mr-2 md:hidden"
        />
      </Link>
      {children}
    </div>
  );
};

export default Header;
