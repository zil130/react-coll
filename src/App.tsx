import { type FC, useState } from 'react';
import UserInfo from './components/UserInfo/UserInfo';
import Counters from './components/Counters/Counters';
import Search from './components/Search/Search';
import VinylList from './components/VinylList/VinylList';
import albums from './data/albums.json';
import user from './data/user.json';
import { Tabs } from './models/Tabs';
import './App.css';

const App: FC = () => {
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.has);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleTabClick = (tab: Tabs): void => {
    setActiveTab(tab);
  };
  const handleSearchQueryChange = (query: string): void => {
    setSearchQuery(query);
  };

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
};

export default App;
