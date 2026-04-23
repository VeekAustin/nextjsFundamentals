"Use client"

import Link from "next/link"

import React from 'react'
const links = [
    { href: "/", label: "vic"},
    { href: "/about", label: "ABOUT"},
    { href: "/blogs", label: "BLOGS"},
    { href: "/services", label: "SERVICES"}
    { href: "/testimonials", label: "TESTIMONIALS"}

]
const Navbar = () => {
  return (
    <header className=" sticky">
        <div>
            <Link href="/" className="">vic</Link>
            <nav className="flex flex-row gap-4">
                {links.map(({href, label}) => (
                    <Link key={href} href={href}>
                        {label}
                    </Link>
                ))}
            </nav>
        </div>
    </header>
  )
}
export default Navbar
