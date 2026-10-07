import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";

const services = [
  {
    title: "Planning",
    description:
      "Thoughtful spatial planning that makes every room functional, balanced and effortless.",
  },
  {
    title: "Design",
    description:
      "Complete interior concepts shaped around your personality, lifestyle and vision.",
  },
  {
    title: "Furniture",
    description:
      "Curated furniture selections that bring comfort, character and timeless style.",
  },
  {
    title: "Architecture",
    description:
      "Interior architecture that connects structure, materials and visual identity.",
  },
];

const testimonials = [
  {
    name: "Ayesha Khan",
    role: "Homeowner",
    text: "Lumière transformed our house into a space that genuinely feels like us. Every detail was considered.",
  },
  {
    name: "Hamza Ahmed",
    role: "Business Owner",
    text: "The team understood our vision from the first meeting and delivered an incredibly refined workspace.",
  },
  {
    name: "Sarah Malik",
    role: "Villa Owner",
    text: "Professional, creative and incredibly thoughtful. The final result exceeded everything we imagined.",
  },
];

function Home() {
  return (
    <main>

      {/* Hero */}
      <section className="relative min-h-[calc(100vh-85px)] overflow-hidden bg-stone-200 dark:bg-stone-900">

        <img
          src="/images/hero.jpg"
          alt="Luxury interior"
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative mx-auto flex min-h-[calc(100vh-85px)] max-w-7xl items-end px-6 pb-16 lg:px-8 lg:pb-20">

          <div className="max-w-4xl text-white">

            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/70">
              Interior Architecture & Design
            </p>

            <h1 className="max-w-4xl text-5xl font-light leading-[1.05] sm:text-6xl lg:text-8xl">
              Spaces that feel
              <span className="block italic">like home.</span>
            </h1>

            <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">

              <Link
                to="/projects"
                className="group inline-flex w-fit items-center gap-3 bg-white px-6 py-4 text-sm text-stone-900"
              >
                Explore Projects
                <ArrowUpRight
                  size={16}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                to="/contact"
                className="inline-flex w-fit items-center gap-2 text-sm text-white"
              >
                Start a conversation
                <ArrowRight size={16} />
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-stone-50 py-24 dark:bg-stone-950 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-8">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
              Our Philosophy
            </p>

            <h2 className="mt-6 max-w-xl text-4xl font-light leading-tight text-stone-900 dark:text-white sm:text-5xl">
              Design with intention.
              <span className="block italic">Live with meaning.</span>
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-xl text-base leading-8 text-stone-500 dark:text-stone-400">
              We create refined interiors that balance beauty and function.
              Our approach is personal, collaborative and deeply considered —
              from the first sketch to the final detail.
            </p>
          </div>

        </div>
      </section>

      {/* Design Principles */}
      <section className="border-y border-stone-200 bg-stone-100 py-20 dark:border-stone-800 dark:bg-stone-950 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
                The Lumière Difference
              </p>
              <h2 className="mt-5 text-3xl font-light leading-tight text-stone-900 dark:text-white sm:text-4xl">
                Thoughtful choices.
                <span className="block italic">Spaces that feel like yours.</span>
              </h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-3">
              {[
                ["01", "Personal by nature", "Every project starts with your routines, priorities and point of view."],
                ["02", "Balanced by design", "We bring beauty and everyday function together in every room."],
                ["03", "Considered in detail", "Materials, lighting and finishes work together as one complete story."],
              ].map(([number, title, description]) => (
                <div key={number} className="border-t border-stone-300 pt-5 dark:border-stone-700">
                  <span className="text-xs tracking-widest text-stone-400">{number}</span>
                  <h3 className="mt-4 text-lg font-medium text-stone-900 dark:text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-600 dark:text-stone-400">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-white py-24 dark:bg-stone-950 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
                Selected Work
              </p>

              <h2 className="mt-4 text-4xl font-light text-stone-900 dark:text-white sm:text-5xl">
                Featured Projects
              </h2>
            </div>

            <Link
              to="/projects"
              className="group flex items-center gap-2 text-sm text-stone-700 dark:text-stone-300"
            >
              View all projects
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </Link>

          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {projects.slice(0, 4).map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Design Process */}
      <section className="bg-stone-100 py-20 dark:bg-stone-950 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">A Clear Process</p>
              <h2 className="mt-4 max-w-xl text-3xl font-light text-stone-900 dark:text-white sm:text-4xl">
                Good design begins with a good conversation.
              </h2>
            </div>
            <Link to="/contact" className="inline-flex w-fit items-center gap-2 border-b border-stone-900 pb-2 text-sm text-stone-900 dark:border-white dark:text-white">
              Tell us about your space <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              ["01", "Listen", "We learn how you live, what you need and what matters most to you."],
              ["02", "Imagine", "We develop a considered direction for the layout, materials and overall feel."],
              ["03", "Bring it to life", "We guide the design from thoughtful ideas toward a cohesive finished space."],
            ].map(([number, title, description]) => (
              <div key={number} className="border-t border-stone-300 pt-5 dark:border-stone-700">
                <span className="text-sm text-stone-400">{number}</span>
                <h3 className="mt-4 text-2xl font-light text-stone-900 dark:text-white">{title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-7 text-stone-600 dark:text-stone-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-stone-50 py-24 dark:bg-stone-950 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
              What We Do
            </p>

            <h2 className="mt-4 text-4xl font-light text-stone-900 dark:text-white sm:text-5xl">
              From concept to completion.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                service={service}
              />
            ))}
          </div>

        </div>
      </section>

      {/* About CTA */}
      <section className="bg-stone-900 py-24 text-white lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-stone-400">
              About Lumière
            </p>

            <h2 className="mt-6 text-4xl font-light leading-tight sm:text-6xl">
              We believe good design should make everyday life better.
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="max-w-lg text-base leading-8 text-stone-400">
              From private residences to hospitality and commercial spaces,
              we design environments that are elegant, functional and
              uniquely yours.
            </p>

            <Link
              to="/about"
              className="mt-8 inline-flex w-fit items-center gap-2 border-b border-white pb-2 text-sm"
            >
              Discover our story
              <ArrowUpRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-stone-50 py-24 dark:bg-stone-950 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
              Client Stories
            </p>

            <h2 className="mt-4 text-4xl font-light text-stone-900 dark:text-white">
              What our clients say
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
              />
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-50 py-24 dark:bg-stone-950 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
            Begin Your Journey
          </p>

          <h2 className="mt-6 text-5xl font-light leading-tight text-stone-900 dark:text-white sm:text-7xl">
            Let's create a space
            <span className="block italic">worth coming home to.</span>
          </h2>

          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 bg-stone-900 px-7 py-4 text-sm text-white transition hover:bg-stone-700 dark:bg-white dark:text-stone-900 dark:hover:bg-stone-200"
          >
            Book a Consultation
            <ArrowUpRight size={16} />
          </Link>

        </div>
      </section>

    </main>
  );
}

export default Home;