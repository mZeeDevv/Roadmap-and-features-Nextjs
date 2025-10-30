import React from "react";
import Image from "next/image";

export default function Home() {
  const features = [
    {
      title: "App Router",
      description: "File-system based routing with support for layouts, nested routing, and loading states.",
      status: "Stable"
    },
    {
      title: "Server Components",
      description: "Render components on the server for better performance and SEO.",
      status: "Stable"
    },
    {
      title: "Image Optimization",
      description: "Automatic image optimization with lazy loading and modern formats.",
      status: "Stable"
    },
    {
      title: "TypeScript Support",
      description: "Built-in TypeScript support with zero configuration.",
      status: "Stable"
    },
    {
      title: "Streaming",
      description: "Stream UI from the server with Suspense boundaries.",
      status: "Stable"
    },
    {
      title: "Turbopack",
      description: "Rust-based bundler for faster development builds.",
      status: "Beta"
    }
  ];

  const roadmapItems = [
    {
      quarter: "Q1 2025",
      items: ["Enhanced Turbopack stability", "Improved build performance", "Better error boundaries"]
    },
    {
      quarter: "Q2 2025",
      items: ["Advanced caching strategies", "New middleware features", "Enhanced analytics"]
    },
    {
      quarter: "Q3 2025",
      items: ["React 19 integration", "Improved developer tools", "Performance optimizations"]
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      {/* Header */}
      <header className="flex flex-col items-center py-16 px-8">
        <Image
          className="dark:invert mb-8"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={36}
          priority
        />
        <h1 className="text-4xl font-bold text-center text-black dark:text-white mb-4">
          Next.js Roadmap & Features Hamza Version
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 text-center max-w-2xl">
          Explore the latest features and upcoming developments in the React framework for production
        </p>
      </header>

      <div className="max-w-6xl mx-auto px-8 pb-16">
        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-black dark:text-white mb-8 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-black dark:text-white">
                    {feature.title}
                  </h3>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      feature.status === "Stable"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                    }`}
                  >
                    {feature.status}
                  </span>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Roadmap Section */}
        <section>
          <h2 className="text-3xl font-semibold text-black dark:text-white mb-8 text-center">
            Roadmap
          </h2>
          <div className="space-y-8">
            {roadmapItems.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-zinc-900 p-8 rounded-lg border border-zinc-200 dark:border-zinc-800"
              >
                <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">
                  {item.quarter}
                </h3>
                <ul className="space-y-2">
                  {item.items.map((roadmapItem, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center text-zinc-600 dark:text-zinc-400"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {roadmapItem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 text-center">
          <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-zinc-900 dark:to-zinc-800 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">
              Get Started with Next.js
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              Ready to build your next application? Explore our documentation and templates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://nextjs.org/docs"
                className="inline-flex items-center justify-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Documentation
              </a>
              <a
                href="https://vercel.com/templates?framework=next.js"
                className="inline-flex items-center justify-center px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-black dark:text-white rounded-lg font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Browse Templates
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
