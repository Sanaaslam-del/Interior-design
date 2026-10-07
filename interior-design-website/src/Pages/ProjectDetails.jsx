import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find(
    (item) => item.id === Number(id)
  );

  if (!project) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-stone-50 dark:bg-stone-950">
        <div className="text-center">
          <h1 className="text-4xl text-stone-900 dark:text-white">
            Project Not Found
          </h1>

          <Link
            to="/projects"
            className="mt-6 inline-flex items-center gap-2 text-sm underline"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  const relatedProjects = projects
    .filter((item) => item.id !== project.id && item.category === project.category)
    .concat(projects.filter((item) => item.id !== project.id && item.category !== project.category))
    .slice(0, 2);

  return (
    <main className="bg-stone-50 dark:bg-stone-950">

      {/* Header */}
      <section className="mx-auto max-w-7xl bg-stone-50 px-6 py-16 dark:bg-stone-950 lg:px-8 lg:py-24">

        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 dark:hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-end">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
              {project.category}
            </p>

            <h1 className="mt-5 text-5xl font-light text-stone-900 dark:text-white sm:text-7xl">
              {project.title}
            </h1>
          </div>

          <p className="max-w-xl text-base leading-8 text-stone-500 dark:text-stone-400">
            {project.description}
          </p>

        </div>
      </section>

      {/* Main Image */}
      <section className="bg-stone-100 py-8 dark:bg-stone-950 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="aspect-[4/3] overflow-hidden bg-stone-200 dark:bg-stone-800 md:aspect-[16/8]">

          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />

          </div>
        </div>
      </section>

      {/* Details */}
      <section className="bg-stone-50 py-20 dark:bg-stone-950 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-3">

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-stone-500">
              Project Details
            </p>

            <h2 className="mt-4 text-3xl font-light text-stone-900 dark:text-white">
              The Details
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-4">

            <div>
              <p className="text-xs uppercase tracking-wider text-stone-500">
                Location
              </p>
              <p className="mt-3 text-sm text-stone-900 dark:text-white">
                {project.location}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-stone-500">
                Year
              </p>
              <p className="mt-3 text-sm text-stone-900 dark:text-white">
                {project.year}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-stone-500">
                Area
              </p>
              <p className="mt-3 text-sm text-stone-900 dark:text-white">
                {project.area}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-stone-500">
                Style
              </p>
              <p className="mt-3 text-sm text-stone-900 dark:text-white">
                {project.style}
              </p>
            </div>

          </div>
        </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-stone-100 py-16 dark:border-stone-800 dark:bg-stone-900 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Design Notes</p>
            <h2 className="mt-4 text-3xl font-light text-stone-900 dark:text-white">
              {project.style}
            </h2>
            <p className="mt-3 text-sm text-stone-600 dark:text-stone-400">
              {project.category} · {project.location}
            </p>
          </div>
          <p className="max-w-2xl text-base leading-8 text-stone-600 dark:text-stone-400">
            {project.description} The design direction brings together the
            project brief, a considered sense of atmosphere and the way the
            space is intended to be experienced.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-stone-50 py-20 dark:bg-stone-950 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-6 md:grid-cols-2">

          {project.gallery.map((image, index) => (
            <div
              key={image}
              className={`aspect-[4/3] overflow-hidden bg-stone-200 dark:bg-stone-800 ${
                index === 0 ? "md:col-span-2 md:aspect-[16/8]" : ""
              }`}
            >
              <img
                src={image}
                alt={`${project.title} ${index + 1}`}
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          ))}

        </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-stone-50 py-20 dark:border-stone-800 dark:bg-stone-950 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">More Selected Work</p>
              <h2 className="mt-4 text-3xl font-light text-stone-900 dark:text-white sm:text-4xl">
                Explore another perspective.
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex w-fit items-center gap-2 text-sm text-stone-700 dark:text-stone-300"
            >
              View all projects <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {relatedProjects.map((relatedProject) => (
              <ProjectCard key={relatedProject.id} project={relatedProject} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-50 py-24 text-center dark:bg-stone-950 lg:py-32">

        <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
          Have a project in mind?
        </p>

        <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-light text-stone-900 dark:text-white sm:text-6xl">
          Let's create something beautiful together.
        </h2>

        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-3 bg-stone-900 px-7 py-4 text-sm text-white transition hover:bg-stone-700 dark:bg-white dark:text-stone-900 dark:hover:bg-stone-200"
        >
          Start a Conversation
          <ArrowUpRight size={16} />
        </Link>

      </section>

    </main>
  );
}

export default ProjectDetails;