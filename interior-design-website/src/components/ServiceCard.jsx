import {
  Compass,
  PenTool,
  Sofa,
  Building2,
  Lightbulb,
  Ruler,
} from "lucide-react";

const icons = {
  Planning: Compass,
  Design: PenTool,
  Furniture: Sofa,
  Architecture: Building2,
  Lighting: Lightbulb,
  "Space Planning": Ruler,
};

function ServiceCard({ service, variant = "light" }) {
  const Icon = icons[service.title] || Compass;
  const isDark = variant === "dark";

  return (
    <div className={`group border p-7 transition duration-300 hover:-translate-y-1 ${
      isDark
        ? "border-stone-700 hover:border-stone-500"
        : "border-stone-200 hover:border-stone-400 dark:border-stone-800 dark:hover:border-stone-600"
    }`}>
      <Icon
        size={28}
        strokeWidth={1.4}
        className={isDark ? "text-stone-300" : "text-stone-700 dark:text-stone-300"}
      />

      <h3 className={`mt-8 text-xl font-medium ${isDark ? "text-white" : "text-stone-900 dark:text-white"}`}>
        {service.title}
      </h3>

      <p className={`mt-4 text-sm leading-7 ${isDark ? "text-stone-300" : "text-stone-500 dark:text-stone-400"}`}>
        {service.description}
      </p>
    </div>
  );
}

export default ServiceCard;