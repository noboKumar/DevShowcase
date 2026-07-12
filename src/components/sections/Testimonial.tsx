import React from "react";
import { TestimonialCard } from "../ui/TestimonialCard";

const Testimonial = () => {
  return (
    <section className="rounded-2xl border-2 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold tracking-wide text-violet-500 uppercase">
              Developer reviews
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Trusted by builders who care about presentation
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            quote="Dev Showcase gave my side project the visibility it needed. I got valuable feedback from experienced devs."
            author="Alex Rivera"
            role="Frontend Engineer"
            rating="5.0"
          />
          <TestimonialCard
            quote="The best place to find inspiration for my next app. The quality of projects here is just outstanding."
            author="Sarah Chen"
            role="UI/UX Designer"
            rating="4.9"
          />
          <TestimonialCard
            quote="I love how easy it is to manage my portfolio here. It's clean, fast, and exactly what I needed."
            author="Michael Johnson"
            role="Fullstack Developer"
            rating="5.0"
          />
        </div>
        <div className="mt-8 grid gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-5 sm:grid-cols-3">
          <div>
            <p className="text-2xl font-bold">96%</p>
            <p className="mt-1 text-sm text-slate-400">found better feedback</p>
          </div>
          <div>
            <p className="text-2xl font-bold">3.2x</p>
            <p className="mt-1 text-sm text-slate-400">more portfolio visits</p>
          </div>
          <div>
            <p className="text-2xl font-bold">24h</p>
            <p className="mt-1 text-sm text-slate-400">average first review</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
