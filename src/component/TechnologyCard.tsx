import type { Technology } from "../component/types/technology";

type TechnologyCardProps = {
  technology: Technology;
  onAdd: (technology: Technology) => void;
  isAdded: boolean;
};

const TechnologyCard = ({
  technology,
  onAdd,
  isAdded,
}: TechnologyCardProps) => {
  return (
    <div
      className="rounded-2xl p-[1px]"
      style={{ background: "var(--brand-gradient)" }}
    >
      <div className="flex h-full flex-col rounded-2xl bg-white p-5">

        {/* Icon + Badge */}
        <div className="flex items-center justify-between">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-12 w-12 object-contain"
          />

          <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-600">
            {technology.badge}
          </span>
        </div>

        {/* Name */}
        <h3 className="mt-4 text-xl font-bold">
          {technology.name}
        </h3>

        {/* Description */}
        <p className="mt-2 flex-1 text-sm leading-6 text-gray-600">
          {technology.description}
        </p>

        {/* Category + Difficulty */}
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
            {technology.category}
          </span>

          <span className="text-sm text-gray-500">
            {technology.difficulty}
          </span>
        </div>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-1 text-sm">
          <span>★</span>
          <span className="font-semibold">
            {technology.rating}
          </span>
        </div>

        {/* Add Button */}
        <button
          onClick={() => onAdd(technology)}
          disabled={isAdded}
          className="mt-5 w-full rounded-full px-5 py-2 font-medium text-white disabled:cursor-not-allowed disabled:bg-gray-300"
          style={
            isAdded
              ? undefined
              : { background: "var(--brand-gradient)" }
          }
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>

      </div>
    </div>
  );
};

export default TechnologyCard;