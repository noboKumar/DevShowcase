import { getFeatured } from "@/lib/api";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { Project } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { FaGithub } from "react-icons/fa";

const categoryTone: Record<string, string> = {
  Frontend: "border-sky-200 bg-sky-50 text-sky-700",
  Backend: "border-emerald-200 bg-emerald-50 text-emerald-700",
  "Full Stack": "border-violet-200 bg-violet-50 text-violet-700",
  "Mobile App": "border-orange-200 bg-orange-50 text-orange-700",
  "AI / ML": "border-fuchsia-200 bg-fuchsia-50 text-fuchsia-700",
  "DevOps / Infrastructure": "border-amber-200 bg-amber-50 text-amber-700",
  "CLI Tool": "border-slate-200 bg-slate-50 text-slate-700",
  "Browser Extension": "border-teal-200 bg-teal-50 text-teal-700",
  "API / SDK": "border-violet-200 bg-violet-50 text-violet-700",
  Game: "border-rose-200 bg-rose-50 text-rose-700",
  "Open Source Library": "border-lime-200 bg-lime-50 text-lime-700",
  Other: "border-violet-200 bg-violet-50 text-violet-700",
};

const FeaturedProjectCard = ({ project }: { project: Project }) => {
  const categoryClass = categoryTone[project.category] ?? categoryTone.Other;
  const userInitial = project.user?.name?.charAt(0)?.toUpperCase() ?? "?";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-950/20 dark:border-white/10 dark:bg-slate-950 dark:hover:border-violet-400/30">
      <Link
        href={`/projects/${project.id}`}
        className="relative block aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-900"
      >
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#eef2ff,#f8fafc_45%,#ecfeff)] dark:bg-[linear-gradient(135deg,#1e1b4b,#0f172a_55%,#164e63)]">
            <span className="text-6xl font-black text-indigo-200 dark:text-indigo-300/30">
              {project.title?.charAt(0)}
            </span>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <Badge className={`border ${categoryClass}`}>{project.category}</Badge>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="line-clamp-1 text-xl font-bold text-slate-950 dark:text-white">
              {project.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              {project.description}
            </p>
          </div>
          <div className="flex shrink-0 gap-1">
            {project.githubRepo && (
              <Button asChild size="icon" variant="ghost" aria-label="GitHub">
                <a
                  href={project.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="size-4" />
                </a>
              </Button>
            )}
            {project.liveLink && (
              <Button asChild size="icon" variant="ghost" aria-label="Live demo">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="size-4" />
                </a>
              </Button>
            )}
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack?.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-violet-50 px-2.5 py-1 text-xs font-semibold text-violet-600 dark:bg-violet-900/20 dark:text-violet-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5 dark:border-white/10">
          <div className="flex min-w-0 items-center gap-2">
            <Avatar className="size-8">
              <AvatarImage
                src={project.user?.image ?? ""}
                alt={project.user?.name ?? "User"}
              />
              <AvatarFallback className="bg-violet-100 text-xs font-semibold text-violet-700">
                {userInitial}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                {project.user?.name ?? "Unknown maker"}
              </p>
              <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                {project.user?.email ?? "Project author"}
              </p>
            </div>
          </div>
          <Button asChild size="sm" variant="ghost">
            <Link href={`/projects/${project.id}`}>
              Details <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
};

const Featured = async () => {
  const featuredData = await getFeatured();
  const projects = featuredData.slice(0, 3);

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm font-medium text-violet-700 dark:border-violet-400/30 dark:bg-violet-400/10 dark:text-violet-200">
            <Sparkles className="size-4" />
            Featured this week
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl dark:text-white">
            Projects worth studying
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
            Curated builds with clear problem statements, thoughtful stacks, and
            live links that make technical choices easy to evaluate.
          </p>
        </div>
        <Button asChild className="w-fit" variant="outline">
          <Link href="/projects">
            View all projects <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project: Project) => (
          <FeaturedProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Featured;
