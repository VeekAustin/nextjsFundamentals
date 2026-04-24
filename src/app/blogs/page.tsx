import BlogCard from "@/src/components/blogcards";

const blogs = [
  {
    id: 1,
    title: "Getting Started with Next.js App Router",
    description: "The App Router is a paradigm shift in how we think about routing in Next.js. In this post I break down file-based routing, layouts, and how pages nest inside each other.",
    date: "Mar 12, 2025",
    tag: "Next.js",
  },
  {
    id: 2,
    title: "Why I Switched from CSS Modules to Tailwind",
    description: "After years of writing CSS Modules, Tailwind felt like cheating — in the best possible way. Here's my honest take on utility-first CSS after 6 months of daily use.",
    date: "Feb 28, 2025",
    tag: "CSS",
  },
  {
    id: 3,
    title: "TypeScript Interfaces vs Types: When to Use Which",
    description: "One of the most common points of confusion for TypeScript beginners. I walk through the key differences with real examples from my own projects.",
    date: "Feb 10, 2025",
    tag: "TypeScript",
  },
  {
    id: 4,
    title: "Understanding Dynamic Routing in Next.js",
    description: "Dynamic routes let you generate pages from data. Whether it's blog posts, product pages, or user profiles — this pattern shows up everywhere. Let's demystify it.",
    date: "Jan 25, 2025",
    tag: "Next.js",
  },
  {
    id: 5,
    title: "The Power of the .map() Method in React",
    description: "Rendering lists is one of the most fundamental tasks in React. The .map() method is your best friend — and understanding it deeply will change how you write components.",
    date: "Jan 08, 2025",
    tag: "React",
  },
];

export default function BlogsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
        
      <div className="mb-12">
        <p className="text-xs tracking-[0.2em] uppercase text-green-500 font-medium mb-3">Writing</p>
        <h1 className="font-[Syne,sans-serif] text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-tight text-[#e8f5ea] mb-4">
          Blog Posts
        </h1>
        <p className="text-[#5a7a60] text-base max-w-lg leading-relaxed">
          Thoughts on React, Next.js, TypeScript, and everything I'm learning along the way.
          Click any post to read more.
        </p>
      </div>

      <div className="flex flex-col gap-px bg-[#1a2e1e]">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      <p className="mt-6 text-xs text-[#2a4a2e] text-right">{blogs.length} posts total</p>
    </div>
  );
}