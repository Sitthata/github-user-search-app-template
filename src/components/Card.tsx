import { CardType } from "../types/cardType";

interface CardProps {
  data?: CardType | null;
}

const Card = ({ data }: CardProps) => {
  return (
    <div>
      Card
    </div>
  );
};

export default Card;
