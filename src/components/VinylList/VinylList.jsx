import VinylItem from '../VinylItem/VinylItem';
import css from './VinylList.module.css';

function VinylList({ albums, activeTab, searchQuery }) {
  const filteringRules = {
    Total: () => true,
    Has: (album) => album.has,
    Wants: (album) => !album.has,
  };
  const searchQueryNormalized = searchQuery.toLowerCase().trim();

  const filteredAlbums = albums
    .filter(filteringRules[activeTab])
    .filter(({ artist, title, year }) => artist.toLowerCase().includes(searchQueryNormalized)
        || title.toLowerCase().includes(searchQueryNormalized)
        || year.toLowerCase().includes(searchQueryNormalized));

  return (
    filteredAlbums.length > 0
      ? (
        <div className={css.layout}>
          {filteredAlbums.map((album) => <VinylItem key={album.id} album={album} />)}
        </div>
      )
      : <p className={css.nothingFound}>Nothing found</p>
  );
}

export default VinylList;
