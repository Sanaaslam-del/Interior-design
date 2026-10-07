import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = [
    "All",
    "Residential",
    "Commercial",
    "Hospitality",
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "All" ||
      project.category === activeCategory;

    const matchesSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.location.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="bg-stone-50 dark:bg-stone-950">

      {/* Header */}
      <section className="border-b border-stone-200 bg-stone-50 py-24 dark:border-stone-800 dark:bg-stone-950 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
            Our Portfolio
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-light text-stone-900 dark:text-white sm:text-7xl">
            Spaces designed
            <span className="block italic">with purpose.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-stone-500 dark:text-stone-400">
            Explore a selection of residential, commercial and hospitality
            projects created by the Lumière team.
          </p>

        </div>
      </section>

      {/* Filters */}
      <section className="border-y border-stone-200 bg-stone-50 py-8 dark:border-stone-800 dark:bg-stone-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 text-sm transition ${
                  activeCategory === category
                    ? "bg-amber-800 text-white dark:bg-amber-300 dark:text-stone-950"
                    : "border border-stone-300 text-stone-600 hover:border-amber-800 hover:text-amber-900 dark:border-stone-700 dark:text-stone-300 dark:hover:border-amber-300 dark:hover:text-amber-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-stone-300 bg-white px-5 py-3 text-sm text-stone-900 outline-none placeholder:text-stone-500 focus:border-amber-800 dark:border-stone-700 dark:bg-stone-900 dark:text-white dark:placeholder:text-stone-400 dark:focus:border-amber-300 lg:w-72"
          />

        </div>
      </section>

      {/* Projects */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {filteredProjects.length > 0 ? (
            <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <h2 className="text-2xl text-stone-900 dark:text-white">
                No projects found
              </h2>

              <p className="mt-3 text-stone-500">
                Try another search or category.
              </p>
            </div>
          )}

        </div>
      </section>

      <section className="border-y border-stone-200 bg-stone-100 py-20 dark:border-stone-800 dark:bg-stone-900 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="aspect-[4/3] overflow-hidden bg-stone-200 dark:bg-stone-800">
            <img
              src="/images/project-4-2.jpg"
              alt="Quiet, light-filled contemporary living space"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Beyond the Portfolio</p>
            <h2 className="mt-5 text-4xl font-light leading-tight text-stone-900 dark:text-white sm:text-5xl">
              Your space has its own story to tell.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-stone-600 dark:text-stone-400">
              Every project begins with a different brief. We bring the same care
              to understanding your needs and shaping a design around them.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 border-b border-stone-900 pb-2 text-sm text-stone-900 dark:border-white dark:text-white"
            >
              Discuss your project <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-stone-900 py-20 dark:bg-stone-900 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-400">From First Sketch to Final Detail</p>
            <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
              A collaborative journey, shaped around you.
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              ["01", "Discover", "We listen to your brief and understand how the space needs to work."],
              ["02", "Develop", "We shape a clear design direction, balancing materials, details and function."],
              ["03", "Refine", "We work through the details together to bring the complete vision into focus."],
            ].map(([number, title, description]) => (
              <div key={number} className="border-t border-stone-700 pt-5">
                <span className="text-sm text-stone-400">{number}</span>
                <h3 className="mt-4 text-xl font-medium text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

export default Projects;