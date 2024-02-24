import VinylItem from "../VinylItem/VinylItem";
import css from './VinylList.module.css';

function VinylList({ albums, activeTab }) {
  const filteringRules = {
    'Total': () => true,
    'Has': (album) => album.has,
    'Wants': (album) => !album.has,
  };

  const filteredAlbums = albums.filter(filteringRules[activeTab]);

  return (
    <div className={css.layout}>
      {filteredAlbums.map((album) => <VinylItem key={album.id} album={album} />)}
    </div>
  );
}

export default VinylList;
