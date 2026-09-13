type Technology = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

type StackItemProps = {
  technology: Technology;
  onRemove: (id: string) => void;
};

const StackItem = ({ technology, onRemove }: StackItemProps) => {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-gray-200 p-3">
      <img
        src={technology.icon}
        alt={technology.name}
        className="h-10 w-10"
      />

      <div className="flex-1">
        <h3 className="font-semibold">{technology.name}</h3>
        <p className="text-sm text-gray-500">{technology.category}</p>
      </div>

      <button
        onClick={() => onRemove(technology.id)}
        className="text-gray-500 hover:text-red-500"
      >
        ✕
      </button>
    </div>
  );
};

export default StackItem;