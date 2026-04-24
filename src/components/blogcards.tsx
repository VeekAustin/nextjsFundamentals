"use client";

import Link from "next/link";

type Blog = {
  id: number;
  title: string;
  description: string;
  date: string;
  tag: string;
};

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link href={`/blogs/${blog.id}`} className="no-underline group">
      <article className="bg-[#0a0f0b] px-8 py-7 grid grid-cols-[1fr_auto] items-start gap-4 transition-colors duration-150 group-hover:bg-[#0f1a11] cursor-pointer">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[0.65rem] font-semibold tracking-[0.1em] uppercase text-green-400 bg-green-500/10 px-2.5 py-0.5 rounded">
              {blog.tag}
            </span>
            <span className="text-xs text-[#2a4a2e]">{blog.date}</span>
          </div>
          <h2 className="font-[Syne,sans-serif] text-[1.05rem] font-bold text-[#e8f5ea] mb-1.5 tracking-tight">
            {blog.title}
          </h2>
          <p className="text-sm text-[#5a7a60] leading-relaxed">
            {blog.description}
          </p>
        </div>
        <span className="text-xl text-[#1a2e1e] mt-1 group-hover:text-green-600 transition-colors duration-150">
          →
        </span>
      </article>
    </Link>
  );
}