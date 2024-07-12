import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full border-b ">
      <div className="wrapper flex justify-between items-center">
        <Link
          href="/"
          className="w-36">
          <Image
            src="/assets/images/logo.svg"
            alt="evently_logo"
            width={128}
            height={38}
          />
        </Link>
        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>
        <div className="flex w-32 justify-end gap-3">
          <SignedOut>
            <Button
              asChild
              className="rounded-full"
              size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
            <MobileNav />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;

