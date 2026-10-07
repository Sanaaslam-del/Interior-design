import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ServiceCard from "../components/ServiceCard";

const services = [
  {
    title: "Planning",
    description:
      "We carefully study your space, lifestyle and requirements before developing a thoughtful design direction.",
  },
  {
    title: "Design",
    description:
      "From concept development to material selection, we create interiors with a strong visual and functional identity.",
  },
  {
    title: "Furniture",
    description:
      "We curate furniture and custom pieces that complement the architecture and personality of each space.",
  },
  {
    title: "Architecture",
    description:
      "Our interior architecture approach connects layout, structure, materials and atmosphere into one cohesive experience.",
  },
  {
    title: "Lighting",
    description:
      "Lighting is carefully planned to enhance architectural details, create mood and improve everyday functionality.",
  },
  {
    title: "Space Planning",
    description:
      "We optimize circulation, proportions and furniture placement so every square foot works beautifully.",
  },
];

function Services() {
  return (
    <main className="bg-stone-50 dark:bg-stone-950">

      <section className="border-b border-stone-200 bg-stone-50 py-24 dark:border-stone-800 dark:bg-stone-950 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
            Our Services
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-light text-stone-900 dark:text-white sm:text-7xl">
            A complete approach
            <span className="block italic">to better spaces.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-stone-500 dark:text-stone-400">
            From initial concept to final installation, our services are
            designed to make the entire interior design journey clear,
            collaborative and inspiring.
          </p>

        </div>
      </section>

      <section className="bg-stone-100 py-20 dark:bg-stone-950 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                service={service}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-12 dark:bg-stone-950 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative aspect-[16/8] overflow-hidden bg-stone-800 sm:aspect-[16/6]">
            <img
              src="/images/hero.jpg"
              alt="A warm, considered residential interior"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
            <div className="absolute inset-y-0 left-0 flex max-w-2xl flex-col justify-end p-6 text-white sm:p-10 lg:p-14">
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">Designed Around You</p>
              <h2 className="mt-4 text-3xl font-light sm:text-4xl">
                Every detail has a place.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-700 bg-stone-900 py-20 dark:border-stone-700 dark:bg-stone-900 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-400">How We Work</p>
              <h2 className="mt-4 text-3xl font-light leading-tight text-white sm:text-4xl">
                A thoughtful process at every step.
              </h2>
            </div>
            <div className="divide-y divide-stone-700">
              {[
                ["01", "Understand", "We begin by listening to your ideas, priorities and practical needs."],
                ["02", "Design", "We build a cohesive direction for the space, from layout to material choices."],
                ["03", "Deliver", "We help carry the design intent through the decisions that bring it to life."],
              ].map(([number, title, description]) => (
                <div key={number} className="grid gap-3 py-5 sm:grid-cols-[3rem_1fr]">
                  <span className="text-xs tracking-widest text-stone-400">{number}</span>
                  <div>
                    <h3 className="text-lg font-medium text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-stone-300">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-20 dark:bg-stone-950 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2">

            <h2 className="text-4xl font-light text-stone-900 dark:text-white sm:text-6xl">
              Your space deserves more than decoration.
            </h2>

            <div>
              <p className="leading-8 text-stone-600 dark:text-stone-400">
                We think beyond trends. Every project begins with understanding
                how a space should feel and function. The result is an interior
                that feels natural, intentional and lasting.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="bg-stone-50 py-20 dark:bg-stone-950 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:flex-row sm:items-end sm:justify-between lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Your Next Step</p>
            <h2 className="mt-4 text-3xl font-light text-stone-900 dark:text-white sm:text-4xl">
              Tell us what you have in mind.
            </h2>
            <p className="mt-4 text-sm leading-7 text-stone-500 dark:text-stone-400">
              Start with a few details about your space. We can explore which
              design services best suit your project.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex w-fit shrink-0 items-center gap-3 bg-stone-900 px-6 py-4 text-sm text-white transition hover:bg-stone-700 dark:bg-white dark:text-stone-900 dark:hover:bg-stone-200"
          >
            Start a conversation <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

    </main>
  );
}

export default Services;