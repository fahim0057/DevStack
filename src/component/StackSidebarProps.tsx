import type { Technology } from "./types/technology";
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
}: StackSidebarProps) => {stack.map((technology) => (
  <StackItem
    key={technology.id}
    technology={technology}
    onRemove={onRemove}
  />
))}