import { useState } from "react";
import type { Technology } from "../src/component/types/technology";

import Banner from "./component/Banner";
import Navbar from "./component/Navbar";
import TechnologySection from "./component/TechnologySection";
import StackSidebar from "./component/StackSidebar";

function App() {
  const [stack, setStack] = useState<Technology[]>([]);

  const removeTechnology = (id: string) => {
    setStack((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const removeAllTechnologies = () => {
    setStack([]);
  };

  return (
    <>
      <Navbar />

      <Banner />

      <div className="container mx-auto grid gap-6 lg:grid-cols-[1fr_350px]">
        <TechnologySection
          stack={stack}
          setStack={setStack}
        />

        <StackSidebar
          stack={stack}
          onRemove={removeTechnology}
          onRemoveAll={removeAllTechnologies}
        />
      </div>
    </>
  );
}

export default App;