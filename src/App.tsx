import Card from "./components/Card";
import NavBar from "./components/NavBar";
import SearchBox from "./components/SearchBox";
import { useState } from "react";
import { CardType } from "./types/cardType";

function App() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState<CardType | null>(null);

  const fetchUser = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        // If the response is not ok, throw an error to be caught below
        throw new Error('User not found');
      }
      const jsonData = await response.json();
      setData({
        image: jsonData.avatar_url,
        username: jsonData.login,
        createdAt: jsonData.created_at,
        bio: jsonData.bio,
        publicRepos: jsonData.public_repos,
        followers: jsonData.followers,
        following: jsonData.following,
      });
    } catch (err) {
      console.error(err);
      setData(null); 
    }
  };

  return (
    <section className="font-mono text-white">
      <div className="flex flex-col gap-10 px-5 mt-5 sm:mx-auto sm:max-w-[40rem]">
        <NavBar />
        <div className="flex flex-col gap-4">
          <SearchBox
            username={username}
            setUsername={setUsername}
            handleClick={fetchUser}
          />
          <Card data={data} />
        </div>
      </div>
    </section>
  );
}

export default App;
