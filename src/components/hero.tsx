import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      
      <section className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center px-6 py-20 text-center">
        
        <div className="mb-8">
          <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full ring-2 ring-[#238636] ring-offset-2 ring-offset-[#0d1117]">
            <Image
              src="/myProfPic.webp"
              alt="Victor"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <h1 className="mb-3 font-['Syne'] text-4xl font-bold text-[#f0f6fc] sm:text-5xl">
          Hi, I'm Victor
        </h1>
        <p className="mb-2 text-lg text-[#8b949e]">
          Fullstack Enthusiast · Next.js · React · TypeScript
        </p>

        <p className="mb-10 text-sm text-[#238636]">
          ♟️ Currently learning chess & code, one move at a time
        </p>

        <p className="mb-10 max-w-md text-base leading-relaxed text-[#8b949e]">
          Building web experiences and figuring things out as I go. 
          I write about what I learn along the way.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/blogs"
            className="rounded-lg bg-[#238636] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2ea043]"
          >
            Read My Blogs
          </Link>
          <Link
            href="/about"
            className="rounded-lg border border-[#30363d] px-6 py-2.5 text-sm font-medium text-[#c9d1d9] transition-colors hover:border-[#238636] hover:text-[#f0f6fc]"
          >
            About Me
          </Link>
        </div>
      </section>

    </main>
  );
}