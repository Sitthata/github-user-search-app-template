import NavBar from "./components/NavBar";
import SearchBox from "./components/SearchBox";
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  // const [data, setData] = useState<CardType | null>(null);

  const fetchUser = () => {
    // Fetch user data from GitHub API
  };
  
  return (
    <section className="w-screen min-h-screen mx-auto font-mono text-white">
      <div className="flex flex-col gap-10 px-5 mt-5 sm:mx-auto sm:max-w-[40rem]">
        <NavBar />
        <div className="flex flex-col gap-4">
          <SearchBox username={username} setUsername={setUsername} handleClick={fetchUser}/>
          {/* <Card data={data}/> */}
        </div>
      </div>
    </section>
  );
}

export default App;
