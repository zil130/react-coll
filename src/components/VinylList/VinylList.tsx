import { type FC } from 'react';
import VinylItem from '../VinylItem/VinylItem';
import { type IAlbum } from '../../models/IAlbum';
import { type Tabs } from '../../models/Tabs';
import css from './VinylList.module.css';

interface VinylListProps {
  albums: IAlbum[];
  activeTab: Tabs;
  searchQuery: string;
}

const VinylList: FC<VinylListProps> = ({ albums, activeTab, searchQuery }) => {
  const filteringRules = {
    total: () => true,
    has: (album: IAlbum) => album.has,
    wants: (album: IAlbum) => !album.has,
  };

  const searchQueryNormalized = searchQuery.toLowerCase().trim();

  const filterBySearchQuery = ({ artist, title, year }: IAlbum): boolean =>
    artist.toLowerCase().includes(searchQueryNormalized) ||
    title.toLowerCase().includes(searchQueryNormalized) ||
    year.toString().includes(searchQueryNormalized);

  const compareAlbums = (a: IAlbum, b: IAlbum): number => {
    const articles = /^(a|an|the)\s+/i;
    const artistA = a.artist.replace(articles, '').toLowerCase();
    const artistB = b.artist.replace(articles, '').toLowerCase();

    if (artistA === artistB) {
      return a.year - b.year;
    }

    return artistA.localeCompare(artistB);
  };

  const filteredAlbums = albums
    .filter(filteringRules[activeTab])
    .filter(filterBySearchQuery)
    .sort(compareAlbums);

  return filteredAlbums.length > 0 ? (
    <div className={css.layout}>
      {filteredAlbums.map((album) => (
        <VinylItem key={album.id} album={album} activeTab={activeTab} />
      ))}
    </div>
  ) : (
    <p className={css.nothingFound}>Nothing found</p>
  );
};

export default VinylList;
