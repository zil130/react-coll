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
  const [hiddenArtists, setHiddenArtists] = useState<string[]>([]);
  const [onlyFavorites, setOnlyFavorites] = useState<boolean>(false);

  const handleTabClick = (tab: Tabs): void => {
    setActiveTab(tab);
  };

  const handleSearchQueryChange = (query: string): void => {
    setSearchQuery(query);
    setHiddenArtists([]);
  };

  const handleArtistClick = (artist: string): void => {
    if (hiddenArtists.includes(artist)) {
      setHiddenArtists(hiddenArtists.filter((a) => artist !== a));
    } else {
      setHiddenArtists([...hiddenArtists, artist]);
    }
  };

  const handleBtnInputClick = (): void => {
    if (searchQuery.length > 0) {
      setSearchQuery('');
    } else if (hiddenArtists.length > 0) {
      setHiddenArtists([]);
    } else {
      setHiddenArtists([...new Set(albums.map((album) => album.artist))]);
    }
  };

  const handleOnlyFavorites = (): void => {
    setOnlyFavorites(!onlyFavorites);
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
        hiddenArtists={hiddenArtists}
        handleBtnInputClick={handleBtnInputClick}
        handleOnlyFavorites={handleOnlyFavorites}
      />
      <VinylList
        albums={albums}
        activeTab={activeTab}
        searchQuery={searchQuery}
        hiddenArtists={hiddenArtists}
        onlyFavorites={onlyFavorites}
        handleArtistClick={handleArtistClick}
      />
    </div>
  );
};

export default App;
