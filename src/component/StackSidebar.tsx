import type { Technology } from "../component/types/technology";
import StackItem from "./StackItem";

type StackSidebarProps = {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

const StackSidebar = ({
  stack,
  onRemove,
  onRemoveAll,
}: StackSidebarProps) => {
  return (
    <aside className="rounded-2xl bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">
          Your Stack
        </h2>

        <span className="text-sm text-gray-500">
          {stack.length}{" "}
          {stack.length === 1 ? "Technology" : "Technologies"} Selected
        </span>
      </div>

      {/* Stack content */}
      <div className="mt-6">
        {stack.length === 0 ? (
          <p className="text-center text-gray-500">
            Your stack is empty.
            <br />
            Add technologies to build your stack.
          </p>
        ) : (
          <div className="space-y-3">
            {stack.map((technology) => (
              <StackItem
                key={technology.id}
                technology={technology}
                onRemove={onRemove}
              />
            ))}
          </div>
        )}
      </div>

      {/* Remove All */}
      {stack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="mt-6 w-full rounded-full border border-gray-300 px-4 py-2"
        >
          Remove All
        </button>
      )}
    </aside>
  );
};

export default StackSidebar;