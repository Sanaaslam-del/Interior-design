import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function About() {
  return (
    <main className="bg-stone-50 dark:bg-stone-950">

      {/* Hero */}
      <section className="border-b border-stone-200 bg-stone-50 py-24 dark:border-stone-800 dark:bg-stone-950 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
            About Lumière
          </p>

          <h1 className="mt-5 max-w-5xl text-5xl font-light leading-tight text-stone-900 dark:text-white sm:text-7xl">
            We design spaces
            <span className="block italic">with soul.</span>
          </h1>

        </div>
      </section>

      {/* Story */}
      <section className="bg-stone-100 py-24 dark:bg-stone-950 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-8">

          <div className="aspect-[4/5] overflow-hidden bg-stone-200 dark:bg-stone-800">

            <img
              src="/images/about.jpg"
              alt="Lumière interior design studio"
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />

          </div>

          <div className="flex flex-col justify-center">

            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
              Our Story
            </p>

            <h2 className="mt-5 text-4xl font-light leading-tight text-stone-900 dark:text-white sm:text-5xl">
              Creating interiors that feel personal.
            </h2>

            <div className="mt-8 space-y-5 text-base leading-8 text-stone-600 dark:text-stone-400">
              <p>
                Lumière Interiors was founded with a simple belief:
                exceptional design should improve the way people experience
                everyday life.
              </p>

              <p>
                Our studio works across residential, hospitality and
                commercial projects, combining architectural thinking with
                warm, human details.
              </p>

              <p>
                We don't follow a single style. Instead, we listen,
                understand and create spaces that reflect the people who
                inhabit them.
              </p>
            </div>

            <Link
              to="/contact"
              className="mt-8 inline-flex w-fit items-center gap-2 border-b border-stone-900 pb-2 text-sm text-stone-900 dark:border-white dark:text-white"
            >
              Work with us
              <ArrowUpRight size={16} />
            </Link>

          </div>

        </div>
      </section>

      <section className="bg-stone-50 py-20 dark:bg-stone-950 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Our Point of View</p>
            <h2 className="mt-5 text-3xl font-light leading-tight text-stone-900 dark:text-white sm:text-4xl">
              Good design is personal, practical and made to last.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-stone-500 dark:text-stone-400">
              We look beyond appearances to understand how a space should
              support the people who use it. That perspective guides every
              decision, from the first layout to the finishing details.
            </p>
          </div>
          <div className="aspect-[16/10] overflow-hidden bg-stone-200 dark:bg-stone-800">
            <img
              src="/images/project-4-2.jpg"
              alt="A thoughtfully composed, light-filled interior"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-stone-900 py-24 dark:bg-stone-900 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-400">
              Our Values
            </p>

            <h2 className="mt-5 text-4xl font-light text-white sm:text-5xl">
              What guides our work.
            </h2>
          </div>

          <div className="mt-14 grid gap-12 md:grid-cols-3">

            <div>
              <span className="text-sm text-stone-400">01</span>
              <h3 className="mt-5 text-2xl text-white">
                Intentional
              </h3>
              <p className="mt-4 leading-7 text-stone-300">
                Every material, proportion and detail has a reason.
              </p>
            </div>

            <div>
              <span className="text-sm text-stone-400">02</span>
              <h3 className="mt-5 text-2xl text-white">
                Personal
              </h3>
              <p className="mt-4 leading-7 text-stone-300">
                Your space should reflect your story, not someone else's.
              </p>
            </div>

            <div>
              <span className="text-sm text-stone-400">03</span>
              <h3 className="mt-5 text-2xl text-white">
                Timeless
              </h3>
              <p className="mt-4 leading-7 text-stone-300">
                We create interiors designed to remain beautiful beyond trends.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="border-t border-stone-200 bg-stone-50 py-20 dark:border-stone-800 dark:bg-stone-950 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Working Together</p>
              <h2 className="mt-4 text-3xl font-light text-stone-900 dark:text-white sm:text-4xl">
                A partnership built around your vision.
              </h2>
            </div>
            <Link
              to="/contact"
              className="inline-flex w-fit items-center gap-2 border-b border-stone-900 pb-2 text-sm text-stone-900 dark:border-white dark:text-white"
            >
              Meet the studio <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              ["Listen closely", "We make room for your ideas, questions and the way you want your space to feel."],
              ["Design together", "We share a clear direction and refine the important choices collaboratively."],
              ["Care for the details", "We keep the bigger picture in mind while considering the details that make it yours."],
            ].map(([title, description], index) => (
              <div key={title} className="border-t border-stone-300 pt-5 dark:border-stone-700">
                <span className="text-sm text-stone-400">0{index + 1}</span>
                <h3 className="mt-4 text-xl font-medium text-stone-900 dark:text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-500 dark:text-stone-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

export default About;