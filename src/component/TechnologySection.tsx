import { useEffect, useState } from "react";
import type { Technology } from "../component/types/technology";
import TechnologyCard from "./TechnologyCard";

type TechnologySectionProps = {
  stack: Technology[];
  setStack: React.Dispatch<React.SetStateAction<Technology[]>>;
};

const TechnologySection = ({
  stack,
  setStack,
}: TechnologySectionProps) => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load technologies");
        }

        return res.json();
      })
      .then((data: Technology[]) => {
        setTechnologies(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const addToStack = (technology: Technology) => {
    const exists = stack.some(
      (item) => item.id === technology.id
    );

    if (exists) return;

    setStack((prev) => [...prev, technology]);
  };

  if (loading) {
    return (
      <section className="container mx-auto py-10">
        <p>Loading technologies...</p>
      </section>
    );
  }

  return (
    <section className="container mx-auto py-10">
      <h2 className="mb-6 text-3xl font-bold">
        Technologies
      </h2>

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