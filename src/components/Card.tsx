import { CardType } from "../types/cardType";
import NotFound from "./NotFound";

interface CardProps {
  data?: CardType | null;
}

const Card = ({ data }: CardProps) => {
  if (!data) return <NotFound />;
  const { image, username, createdAt } = data;
  return (
    <div className="flex gap-5 p-5 rounded-md bg-primary-100">
      <img src={image} alt="" className="w-24 h-24 rounded-full" />
      <div>
        <h2 className="font-semibold">{username}</h2>
        <h2>Joined-At: {createdAt}</h2>
      </div>
    </div>
  );
};

export default Card;
