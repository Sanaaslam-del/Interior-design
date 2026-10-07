import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function ProjectCard({ project, variant = "light" }) {
  const isDark = variant === "dark";

  return (
    <Link
      to={`/projects/${project.id}`}
      className="group block min-w-0"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-200 dark:bg-stone-800">

        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/70">
              {project.category}
            </p>

            <h3 className="mt-1 text-xl font-medium text-white">
              {project.title}
            </h3>
          </div>

          <div className="rounded-full bg-white p-3 text-stone-900 opacity-0 transition duration-300 group-hover:opacity-100">
            <ArrowUpRight size={17} />
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap justify-between gap-x-4 gap-y-1 text-sm">
        <span className={`min-w-0 break-words ${isDark ? "text-white" : "text-stone-900 dark:text-white"}`}>
          {project.location}
        </span>

        <span className={isDark ? "text-stone-300" : "text-stone-500 dark:text-stone-400"}>
          {project.year}
        </span>
      </div>
    </Link>
  );
}

export default ProjectCard;