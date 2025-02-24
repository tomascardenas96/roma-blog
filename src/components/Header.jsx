import React from "react";
import Logo from "../../public/images/roma-logo.png";
import Image from "next/image";
import { CiUser } from "react-icons/ci";
import Link from "next/link";

function Header() {
  return (
    <header className="w-full h-16 bg-foreground px-48 flex flex-row items-center justify-between">
      <Link href="/">
        <Image
          src={Logo}
          width={135}
          height={29}
          alt="roma-logo"
          className="cursor-pointer"
        />
      </Link>
      <p className="text-black flex items-center gap-1 cursor-pointer text-sm">
        Login
        <CiUser />
      </p>
    </header>
  );
}

export default Header;
