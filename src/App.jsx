import { useState } from 'react';
import UserInfo from './components/UserInfo/UserInfo';
import Counters from './components/Counters/Counters';
import Search from './components/Search/Search';
import VinylList from './components/VinylList/VinylList';
import albums from './data/albums.json';
import user from './data/user.json';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('Total');
  const [searchQuery, setSearchQuery] = useState('');

  const handleTabClick = (tab) => setActiveTab(tab);
  const handleSearchQueryChange = (query) => setSearchQuery(query);

  return (
    <div className="App">
      <UserInfo user={user} />
      <Counters
        activeTab={activeTab}
        albums={albums}
        handleTabClick={handleTabClick}
      />
      <Search
        searchQuery={searchQuery}
        handleSearchQueryChange={handleSearchQueryChange}
      />
      <VinylList
        albums={albums}
        activeTab={activeTab}
        searchQuery={searchQuery}
      />
    </div>
  );
}

export default App;
