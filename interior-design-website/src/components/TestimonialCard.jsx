function TestimonialCard({ testimonial }) {
  return (
    <div className="border border-stone-200 bg-white p-8 dark:border-stone-800 dark:bg-stone-900">
      <div className="text-4xl font-serif text-stone-300 dark:text-stone-600">
        “
      </div>

      <p className="mt-3 text-lg leading-8 text-stone-700 dark:text-stone-300">
        {testimonial.text}
      </p>

      <div className="mt-7">
        <p className="font-medium text-stone-900 dark:text-white">
          {testimonial.name}
        </p>

        <p className="mt-1 text-sm text-stone-500">
          {testimonial.role}
        </p>
      </div>
    </div>
  );
}

export default TestimonialCard;