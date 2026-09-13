import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import type { Technology } from "./component/types/technology";

import Banner from "./component/Banner";
import Navbar from "./component/Navbar";
import TechnologySection from "./component/TechnologySection";
import StackSidebar from "./component/StackSidebar";
import Footer from "./component/Footer";
function App() {
  const [stack, setStack] = useState<Technology[]>([]);

  const removeTechnology = (id: string) => {
    const removedTechnology = stack.find(
      (item) => item.id === id
    );

    setStack((prev) =>
      prev.filter((item) => item.id !== id)
    );

    if (removedTechnology) {
      toast.info(
        `${removedTechnology.name} removed from your stack.`
      );
    }
  };

  const removeAllTechnologies = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);

    toast.success(
      "All technologies removed from your stack."
    );
  };

  return (
    <>
      <Navbar />
      <main className="bg-[var(--hero-gradient)]">
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
      </main>
        <Footer />
      <ToastContainer />

    </>
  );
}

export default App;