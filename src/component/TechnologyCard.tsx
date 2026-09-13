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

type TechnologyCardProps = {
  technology: Technology;
};

const TechnologyCard = ({ technology }: TechnologyCardProps) => {
  return (
    <div>
      <img src={technology.icon} alt={technology.name} />
      <h2>{technology.name}</h2>
      <p>{technology.description}</p>
    </div>
  );
};

export default TechnologyCard;