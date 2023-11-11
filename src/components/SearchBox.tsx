import { FaSearch } from "react-icons/fa";

interface SearchBoxProps {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  handleClick: () => void;
}

const SearchBox = ({username, setUsername, handleClick}: SearchBoxProps) => {
  return (
    <div className="flex items-center justify-between gap-5 p-3 rounded-lg bg-primary-100">
      <div className="flex items-center ml-2 rounded">
        <FaSearch />
        <input
          type="text"
          className="px-4 py-2 min-w-[16rem] bg-primary-100 onfocus:bg-primary-200 focus:outline-none"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <button onClick={handleClick}>
        Search
      </button>
    </div>
  );
};

export default SearchBox;
