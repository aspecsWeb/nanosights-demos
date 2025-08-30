import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center gap-8 bg-[#1a1a1a] text-[#f5f5f5]">
      <div className="flex gap-8 justify-center mb-4">
        <Image
          src="/nextjs-logo.png"
          alt="Next.js Logo"
          width={80}
          height={80}
        />
        <Image
          src="https://www.nanosights.dev/images/logo.svg"
          alt="NanoSights Logo"
          width={80}
          height={80}
        />
      </div>
      <h1 className="text-4xl font-bold">Next.js + NanoSights</h1>
      <p className="text-gray-400">
        This demo is not working. Please submit a{" "}
        <a href="https://github.com/aspecsWeb/nano-tags/issues/1">
          Pull Request
        </a>{" "}
        if you want to contribute.
      </p>
      <div className="flex gap-4 mt-8">
        <a
          className="px-6 py-3 rounded-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white transition"
          href="https://www.nanosights.dev"
          target="_blank"
        >
          Go to NanoSights
        </a>
        <a
          className="px-6 py-3 rounded-lg font-semibold bg-gray-800 hover:bg-gray-700 text-gray-100 transition"
          href="https://www.nanosights.dev/docs"
          target="_blank"
        >
          Documentation
        </a>
        <a
          className="px-6 py-3 rounded-lg font-semibold bg-gray-800 hover:bg-gray-700 text-gray-100 transition"
          href="https://github.com/aspecsWeb/nano-tags/"
          target="_blank"
        >
          GitHub
        </a>
      </div>
    </main>
  );
}
