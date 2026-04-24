"use client";

import Link from "next/link";
import Image from "next/image";

const links = [
  
  { href: "/blogs", label: "Blogs" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#30363d] bg-[#0d1117]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center no-underline">
          <Image
            src="/vercel.svg"
            alt="logo"
            width={100}
            height={30}
          />
        </Link>

        <nav className="flex gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-lg px-4 py-1.5 text-sm no-underline text-[#8b949e] border border-transparent transition-all duration-150 hover:bg-[#161b22] hover:text-[#f0f6fc]"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}