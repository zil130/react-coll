import { useState } from "react";
import Account from "./components/Account/Account";
import Counters from "./components/Counters/Counters";
import Search from "./components/Search/Search";
import VinylList from "./components/VinylList/VinylList";
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
        handleTabClick={handleTabClick}
      />
      <Search />
      <VinylList />
    </div>
  );
}

export default App;
