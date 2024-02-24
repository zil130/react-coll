import { useState } from "react";
import Account from "./components/Account/Account";
import Counters from "./components/Counters/Counters";
import Search from "./components/Search/Search";
import VinylList from "./components/VinylList/VinylList";
import albums from './data/albums.json';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('Total');

  function handleTabClick(tab) {
    setActiveTab(tab);
  }

  return (
    <div className="App">
      <Account />
      <Counters
        activeTab={activeTab}
        albums={albums}
        handleTabClick={handleTabClick}
      />
      <Search />
      <VinylList albums={albums} activeTab={activeTab} />
    </div>
  );
}

export default App;
