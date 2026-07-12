"use client";

import Link from "next/link";
import { BackgroundRippleEffect } from "../ui/background-ripple-effect";
import { Button } from "../ui/button";
import { ArrowRight, Star } from "lucide-react";

const metrics = [
  { label: "Projects shipped", value: "18k+" },
  { label: "Code reviews", value: "42k" },
  { label: "Active builders", value: "10k+" },
];

const Hero = () => {
  return (
    <section className="w-full overflow-hidden py-16 md:py-24">
      <BackgroundRippleEffect />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(139,92,246,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.08)_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom,black,transparent_88%)] bg-[size:56px_56px]" />
      <div className="relative z-10 container mx-auto flex flex-col items-center px-4 text-center">
        <div className="flex max-w-3xl flex-col items-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-3 py-1 text-sm font-medium text-violet-700 shadow-sm backdrop-blur dark:border-violet-500/30 dark:bg-slate-950/70 dark:text-violet-200">
            <Star className="size-4 fill-violet-500 text-violet-500" />
            Built for developers who ship in public
          </div>
          <h1 className="text-5xl leading-[1.02] font-bold tracking-tight text-slate-950 md:text-6xl lg:text-7xl dark:text-white">
            Turn your code into a compelling story.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Dev Showcase turns your best repos, launches, and experiments into
            sharp project stories that are easy to browse, review, and share.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="h-12 rounded-lg px-5 text-base">
              <Link href="/projects" className="flex items-center gap-2">
                Explore Projects <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              className="h-12 rounded-lg px-5 text-base"
              variant="outline"
            >
              <Link href="/projects/add">Add Project</Link>
            </Button>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg border border-slate-200 bg-white/75 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-900/70"
              >
                <div className="text-2xl font-bold text-slate-950 dark:text-white">
                  {metric.value}
                </div>
                <div className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
