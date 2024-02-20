import { useState } from "react";
import Account from "./components/Account/Account";
import Counters from "./components/Counters/Counters";
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('Total');

  function handleTabClick(tab) {
    setActiveTab(tab);
  }

  return (
    <>
      <Account />
      <Counters
        activeTab={activeTab}
        handleTabClick={handleTabClick}
      />
    </>
  );
}

export default App;
