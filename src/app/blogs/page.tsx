'use client'
import React from 'react'
import Link from "next/link"
import {useRouter} from "next/navigation";

export default function Blogs() {
    const router = useRouter()
    return (
        <div className="flex flex=col gap-3">
            <p>welcome to my blogs</p>
            
            <Link href="/blogs/slug">BLOG POST</Link>

            <button type='button' onClick ={() => router.push ("/about")}>
                ABOUT
            </button>
        </div>
    );
}
