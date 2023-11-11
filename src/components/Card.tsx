import { CardType } from "../types/cardType";
import Display from "./Display";
import NotFound from "./NotFound";

interface CardProps {
  data?: CardType | null;
}

const Card = ({ data }: CardProps) => {
  if (!data) return <NotFound />;
  const { image, username, createdAt, bio } = data;
  return (
    <div className="flex flex-col gap-5 p-5 rounded-md bg-primary-100">
      <div className="flex gap-4">
        <img src={image} alt="" className="w-24 h-24 rounded-full" />
        <div>
          <h2 className="font-semibold">{username}</h2>
          <h2>Joined-At: {createdAt}</h2>
        </div>
      </div>
      <p>{bio}</p>
      <Display />
    </div>
  );
};

export default Card;
