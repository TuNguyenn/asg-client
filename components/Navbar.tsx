import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { MobileNav } from "@/components/MobileNav";

const Navbar = () => {
  return (
    <nav
      className={cn(
        "sticky inset-x-0 top-0 z-30 w-full h-14 border-b border-gray-200  bg-white/40 backdrop-blur-lg transition-all",
      )}
    >
      <MaxWidthWrapper>
        <div className="flex h-14 items-center w-full justify-between border-b border-zinc-200">
          <div className="hidden sm:flex items-center gap-1 sm:gap-4">
            <Link
              href="/"
              className="z-40 flex items-center justify-center gap-1"
            >
              <Image
                src="/logo.svg"
                alt="asg logo"
                width={150}
                height={150}
                quality={100}
                className="h-150 w-150"
              />
            </Link>
            <Link
              href="/pricing"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Nhiệm vụ
            </Link>
            <Link
              href="/pricing"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Sự kiện
            </Link>
            <Link
              href="/pricing"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Khảo sát
            </Link>
            <Link
              href="/pricing"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Liên hệ
            </Link>
          </div>

          <div className="flex items-center gap-1 sm:gap-4">
            <MobileNav />
            <div className="hidden items-center space-x-4 sm:flex">
              <Link
                className={buttonVariants({
                  size: "sm",
                })}
                href="/sign-up"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
