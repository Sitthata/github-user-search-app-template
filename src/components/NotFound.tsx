import { TbError404 } from "react-icons/tb";

const NotFound = () => {
  return (
    <div className="flex-col rounded-md p-7 flex-center bg-primary-100">
      <TbError404 className="w-24 h-24 rounded-full" />
      User Not Found!
    </div>
  );
};

export default NotFound;
