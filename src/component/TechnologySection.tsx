import { toast } from "react-toastify";
import type { Technology } from "../component/types/technology";
import technologiesData from "../data/technologies.json";
import TechnologyCard from "./TechnologyCard";

type TechnologySectionProps = {
  stack: Technology[];
  setStack: React.Dispatch<React.SetStateAction<Technology[]>>;
};

const TechnologySection = ({
  stack,
  setStack,
}: TechnologySectionProps) => {
  const technologies: Technology[] = technologiesData;

  const addToStack = (technology: Technology) => {
  const exists = stack.some(
    (item) => item.id === technology.id
  );

  if (exists) {
    toast.warning(`${technology.name} is already in your stack!`);
    return;
  }

  setStack((prev) => [...prev, technology]);

  toast.success(`${technology.name} added to your stack!`);
};
  return (
<section className="container mx-auto py-10">

  <h2 className="mb-6 text-3xl font-extrabold">
    Explore the{" "}
    <span
      className="bg-clip-text text-transparent"
      style={{ backgroundImage: "var(--brand-gradient)" }}
    >
      Technologies
    </span>
  </h2>
 <p className="mb-6">
  Pick one technology per category to build your ideal stack.
</p>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            onAdd={addToStack}
            isAdded={stack.some(
              (item) => item.id === technology.id
            )}
          />
        ))}
      </div>
    </section>
  );
};

export default TechnologySection;