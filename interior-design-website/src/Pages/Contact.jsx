import { useState } from "react";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [saveError, setSaveError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const submission = {
      name: formData.get("name"),
      email: formData.get("email"),
      projectType: formData.get("projectType"),
      message: formData.get("message"),
      submittedAt: new Date().toISOString(),
    };

    try {
      const savedSubmissions = JSON.parse(
        window.localStorage.getItem("lumiere-contact-submissions") || "[]",
      );

      if (!Array.isArray(savedSubmissions)) {
        throw new Error("Saved contact submissions have an invalid format.");
      }

      window.localStorage.setItem(
        "lumiere-contact-submissions",
        JSON.stringify([...savedSubmissions, submission]),
      );
    } catch (error) {
      console.error("Unable to save the contact inquiry locally.", error);
      setSaveError(
        "Your inquiry could not be saved in this browser. Please check your browser storage settings and try again.",
      );
      return;
    }

    form.reset();
    setSaveError("");
    setSubmitted(true);
  };

  return (
    <main className="bg-stone-50 dark:bg-stone-950">

      <section className="border-b border-stone-200 bg-stone-100 py-24 dark:border-stone-800 dark:bg-stone-950 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
            Contact
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-light text-stone-900 dark:text-white sm:text-7xl">
            Let's talk about
            <span className="block italic">your space.</span>
          </h1>

        </div>
      </section>

      <section className="bg-stone-50 py-16 dark:bg-stone-950 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">

          {/* Contact Information */}
          <div>

            <h2 className="text-3xl font-light text-stone-900 dark:text-white sm:text-4xl">
              Start a conversation
            </h2>

            <p className="mt-5 max-w-lg leading-8 text-stone-500 dark:text-stone-400">
              Tell us a little about your project and what you're hoping to
              create. Your inquiry will be saved in this browser for this demo.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex gap-4 rounded-sm border border-stone-200 bg-white p-5 dark:border-stone-800 dark:bg-stone-900">
                <Mail size={20} className="mt-0.5 shrink-0 text-stone-500" />

                <div>
                  <p className="text-xs uppercase tracking-wider text-stone-500">
                    Email
                  </p>
                  <p className="mt-2 break-words text-sm text-stone-900 dark:text-white">
                    hello@lumiereinteriors.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-sm border border-stone-200 bg-white p-5 dark:border-stone-800 dark:bg-stone-900">
                <Phone size={20} className="mt-0.5 shrink-0 text-stone-500" />

                <div>
                  <p className="text-xs uppercase tracking-wider text-stone-500">
                    Phone
                  </p>
                  <p className="mt-2 text-sm text-stone-900 dark:text-white">
                    +92 300 1234567
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-sm border border-stone-200 bg-white p-5 dark:border-stone-800 dark:bg-stone-900">
                <MapPin size={20} className="mt-0.5 shrink-0 text-stone-500" />

                <div>
                  <p className="text-xs uppercase tracking-wider text-stone-500">
                    Studio
                  </p>
                  <p className="mt-2 text-sm text-stone-900 dark:text-white">
                    Bahawalpur, Pakistan
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Form */}
          <div className="border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900 sm:p-9 lg:p-10">

            {submitted ? (
              <div className="flex min-h-[400px] flex-col items-center justify-center text-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-stone-100 text-2xl dark:bg-stone-800">
                  ✓
                </div>

                <h2 className="mt-6 text-2xl text-stone-900 dark:text-white">
                  Thank you.
                </h2>

                <p className="mt-3 max-w-sm text-sm leading-7 text-stone-500">
                  Your inquiry has been saved in this browser on this device.
                  This demo does not send messages to a studio inbox.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 text-sm underline underline-offset-4"
                >
                  Send another message
                </button>

              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 sm:space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-light text-stone-900 dark:text-white">
                    Tell us about your project
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-stone-500 dark:text-stone-400">
                    Share a few details and our studio will be in touch.
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">

                  <div>
                    <label htmlFor="contact-name" className="text-xs uppercase tracking-wider text-stone-500">
                      Name
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      required
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      className="mt-2 w-full border border-stone-200 bg-stone-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-stone-400 focus:border-stone-500 dark:border-stone-700 dark:bg-stone-950 dark:text-white dark:focus:border-stone-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="text-xs uppercase tracking-wider text-stone-500">
                      Email
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      required
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="mt-2 w-full border border-stone-200 bg-stone-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-stone-400 focus:border-stone-500 dark:border-stone-700 dark:bg-stone-950 dark:text-white dark:focus:border-stone-400"
                    />
                  </div>

                </div>

                <div>
                  <label htmlFor="contact-project-type" className="text-xs uppercase tracking-wider text-stone-500">
                    Project Type
                  </label>

                  <select
                    id="contact-project-type"
                    name="projectType"
                    required
                    defaultValue=""
                    className="mt-2 w-full border border-stone-200 bg-stone-50 px-4 py-3.5 text-sm outline-none transition focus:border-stone-500 dark:border-stone-700 dark:bg-stone-950 dark:text-white dark:focus:border-stone-400"
                  >
                    <option value="" disabled>Select project type</option>
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Hospitality</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="text-xs uppercase tracking-wider text-stone-500">
                    Tell us about your project
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows="4"
                    placeholder="What would you love to create?"
                    className="mt-2 w-full resize-y border border-stone-200 bg-stone-50 px-4 py-3.5 text-sm leading-6 outline-none transition placeholder:text-stone-400 focus:border-stone-500 dark:border-stone-700 dark:bg-stone-950 dark:text-white dark:focus:border-stone-400"
                  />
                </div>

                {saveError && (
                  <p role="alert" className="text-sm leading-6 text-red-700 dark:text-red-400">
                    {saveError}
                  </p>
                )}

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 bg-stone-900 px-6 py-4 text-sm text-white transition hover:bg-stone-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-500 dark:bg-white dark:text-stone-900 dark:hover:bg-stone-200"
                >
                  Save Inquiry
                  <ArrowUpRight
                    size={16}
                    className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>

              </form>
            )}

          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-stone-100 py-20 dark:border-stone-800 dark:bg-stone-900 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">A Good Place to Start</p>
            <h2 className="mt-4 text-3xl font-light text-stone-900 dark:text-white sm:text-4xl">
              A few details help us understand your vision.
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              ["01", "Tell us about the space", "A home, workplace or hospitality project — let us know what you have in mind."],
              ["02", "Share your priorities", "Mention the rooms, needs or design details that matter most to you."],
              ["03", "Start the conversation", "Use the form above to keep your project notes together in this browser."],
            ].map(([number, title, description]) => (
              <div key={number} className="border-t border-stone-300 pt-5 dark:border-stone-700">
                <span className="text-sm text-stone-400">{number}</span>
                <h3 className="mt-4 text-xl font-medium text-stone-900 dark:text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-600 dark:text-stone-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-20 dark:bg-stone-950 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Before You Begin</p>
            <h2 className="mt-4 text-3xl font-light text-stone-900 dark:text-white sm:text-4xl">
              A little clarity, from the start.
            </h2>
          </div>
          <div className="divide-y divide-stone-300 dark:divide-stone-800">
            <div className="py-5">
              <h3 className="text-base font-medium text-stone-900 dark:text-white">What should I include?</h3>
              <p className="mt-2 text-sm leading-7 text-stone-500 dark:text-stone-400">
                Your project type and a short description are a helpful starting point. You can include your goals, location or questions too.
              </p>
            </div>
            <div className="py-5">
              <h3 className="text-base font-medium text-stone-900 dark:text-white">Where is this inquiry saved?</h3>
              <p className="mt-2 text-sm leading-7 text-stone-500 dark:text-stone-400">
                This website demo saves submissions in this browser on this device. It does not send them to an email address or studio inbox.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-100 pb-20 pt-16 dark:bg-stone-950 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
                Find Us
              </p>
              <h2 className="mt-4 text-3xl font-light text-stone-900 dark:text-white">
                Our Location
              </h2>
            </div>
            <p className="text-sm text-stone-600 dark:text-stone-400">
              Bahawalpur, Punjab, Pakistan
            </p>
          </div>

          <div className="h-[360px] overflow-hidden border border-stone-300 bg-stone-200 dark:border-stone-700 dark:bg-stone-800 sm:h-[440px] lg:h-[520px]">
            <iframe
              title="Lumière Interiors Location in Bahawalpur"
              src="https://www.google.com/maps?q=Bahawalpur,+Pakistan&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

    </main>
  );
}

export default Contact;