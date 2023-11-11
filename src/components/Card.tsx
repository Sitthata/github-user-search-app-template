import { CardType } from "../types/cardType";

interface CardProps {
  data: CardType | null;
}

const Card = ({ data }: CardProps) => {
    const { image, username, createdAt } = data || { image: '', username: '', createdAt: ''};
  return (
    <div className="p-5 rounded-md bg-primary-100">
      <img src={image} alt="" />
      <h2>{username}</h2>
      <h2>{createdAt}</h2>
    </div>
  );
};

export default Card;
