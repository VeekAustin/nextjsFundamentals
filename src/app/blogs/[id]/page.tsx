import Link from "next/link";

const blogs = [
  { id: 1, title: "Getting Started with Next.js App Router", description: "The App Router is a paradigm shift in how we think about routing in Next.js. In this post I break down file-based routing, layouts, and how pages nest inside each other.", date: "Mar 12, 2025", tag: "Next.js" },
  { id: 2, title: "Why I Switched from CSS Modules to Tailwind", description: "After years of writing CSS Modules, Tailwind felt like cheating — in the best possible way. Here's my honest take on utility-first CSS after 6 months of daily use.", date: "Feb 28, 2025", tag: "CSS" },
  { id: 3, title: "TypeScript Interfaces vs Types: When to Use Which", description: "One of the most common points of confusion for TypeScript beginners. I walk through the key differences with real examples from my own projects.", date: "Feb 10, 2025", tag: "TypeScript" },
  { id: 4, title: "Understanding Dynamic Routing in Next.js", description: "Dynamic routes let you generate pages from data. Whether it's blog posts, product pages, or user profiles — this pattern shows up everywhere. Let's demystify it.", date: "Jan 25, 2025", tag: "Next.js" },
  { id: 5, title: "The Power of the .map() Method in React", description: "Rendering lists is one of the most fundamental tasks in React. The .map() method is your best friend — and understanding it deeply will change how you write components.", date: "Jan 08, 2025", tag: "React" },
];

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  const blogId = Number(params.id);
  const blog = blogs.find((b) => b.id === blogId);

  if (!blog) {
    return (
      <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-2xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-2 text-6xl text-[#238636]">♟️</p>
        <h1 className="mb-4 font-['Syne'] text-3xl font-bold text-[#f0f6fc]">
          Post not found
        </h1>
        <p className="mb-8 text-[#8b949e]">
          Looks like this move isn't on the board.
        </p>
        <Link
          href="/blogs"
          className="rounded-lg bg-[#238636] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2ea043]"
        >
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      
      <Link
        href="/blogs"
        className="mb-12 inline-flex items-center gap-2 text-sm text-[#8b949e] no-underline transition-colors duration-150 hover:text-[#238636]"
      >
        ← Back to Blogs
      </Link>

      <div className="mb-8 inline-flex items-center gap-3 rounded-xl border border-[#238636]/20 bg-[#238636]/10 px-4 py-3">
        <span className="text-xs uppercase tracking-[0.15em] text-[#8b949e]">
          Blog ID
        </span>
        <span className="font-['Syne'] text-3xl font-extrabold leading-none text-[#238636]">
          #{params.id}
        </span>
      </div>

      <div className="mb-5 flex items-center gap-3">
        <span className="rounded bg-[#238636]/10 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#238636]">
          {blog.tag}
        </span>
        <span className="text-xs text-[#484f58]">{blog.date}</span>
      </div>

      <h1 className="mb-6 font-['Syne'] text-3xl font-extrabold leading-tight tracking-tight text-[#f0f6fc] sm:text-4xl">
        {blog.title}
      </h1>

      <div className="mb-8 h-px bg-[#30363d]" />

      <p className="mb-6 text-base leading-relaxed text-[#8b949e]">
        {blog.description}
      </p>

      <p className="text-base leading-relaxed text-[#484f58]">
        This is a demo article. In a real app, the full content would be fetched
        from a CMS or markdown file using the dynamic{" "}
        <code className="rounded border border-[#30363d] bg-[#161b22] px-2 py-0.5 font-mono text-sm text-[#238636]">
          id
        </code>{" "}
        param from the URL. Current ID:{" "}
        <strong className="text-[#f0f6fc]">{params.id}</strong>.
      </p>

      <div className="mt-16 flex justify-between gap-4">
        {blogId > 1 && (
          <Link
            href={`/blogs/${blogId - 1}`}
            className="rounded-lg border border-[#30363d] bg-[#161b22] px-5 py-2.5 text-sm text-[#8b949e] no-underline transition-all duration-150 hover:border-[#238636]/30 hover:text-[#238636]"
          >
            ← Previous post
          </Link>
        )}
        {blogId < blogs.length && (
          <Link
            href={`/blogs/${blogId + 1}`}
            className="ml-auto rounded-lg border border-[#30363d] bg-[#161b22] px-5 py-2.5 text-sm text-[#8b949e] no-underline transition-all duration-150 hover:border-[#238636]/30 hover:text-[#238636]"
          >
            Next post →
          </Link>
        )}
      </div>
    </div>
  );
}