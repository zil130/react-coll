import { type FC } from 'react';
import VinylItem from '../VinylItem/VinylItem';
import { type IAlbum } from '../../models/IAlbum';
import { type Tabs } from '../../models/Tabs';
import css from './VinylList.module.css';

interface VinylListProps {
  albums: IAlbum[];
  activeTab: Tabs;
  searchQuery: string;
  hiddenArtists: string[];
  onlyFavorites: boolean;
  handleArtistClick: (artist: string) => void;
}

const VinylList: FC<VinylListProps> = ({
  albums,
  activeTab,
  searchQuery,
  hiddenArtists,
  onlyFavorites,
  handleArtistClick,
}) => {
  const groupAlbumsByArtist = (albums: IAlbum[]): IAlbum[][] => {
    const groupedAlbums: Record<string, IAlbum[]> = {};

    albums.forEach((album) => {
      if (album.artist in groupedAlbums) {
        groupedAlbums[album.artist].push(album);
      } else {
        groupedAlbums[album.artist] = [album];
      }
    });

    return Object.values(groupedAlbums);
  };

  const filteringRules: Record<Tabs, (album: IAlbum) => boolean> = {
    total: () => true,
    has: (album: IAlbum) => album.has,
    wants: (album: IAlbum) => !album.has,
  };

  const searchQueryNormalized = searchQuery.toLowerCase().trim();

  const filterBySearchQuery = ({ artist, title, year }: IAlbum): boolean =>
    artist.toLowerCase().includes(searchQueryNormalized) ||
    title.toLowerCase().includes(searchQueryNormalized) ||
    year.toString().includes(searchQueryNormalized);

  const filterByFavorites = ({ favorite }: IAlbum): boolean =>
    onlyFavorites ? favorite : true;

  const compareAlbums = (a: IAlbum, b: IAlbum): number => {
    const articles = /^(a|an|the)\s+/i;
    const artistA = a.artist.replace(articles, '').toLowerCase();
    const artistB = b.artist.replace(articles, '').toLowerCase();

    if (artistA === artistB) {
      return a.year - b.year;
    }

    return artistA.localeCompare(artistB);
  };

  const albumsByArtist = groupAlbumsByArtist(
    albums
      .filter(filteringRules[activeTab])
      .filter(filterBySearchQuery)
      .filter(filterByFavorites)
      .sort(compareAlbums),
  );

  if (albumsByArtist.length === 0) {
    return <p className={css.nothingFound}>Nothing found</p>;
  }

  return albumsByArtist.map((albums) => (
    <div key={albums[0].artist}>
      <div
        onClick={() => {
          handleArtistClick(albums[0].artist);
        }}
        className={css.artist}
      >
        {hiddenArtists.includes(albums[0].artist) ? '+ ' : '- '}
        {albums[0].artist}
      </div>
      <div
        className={
          hiddenArtists.includes(albums[0].artist)
            ? css.displayNone
            : css.displayGrid
        }
      >
        {albums.map((album) => (
          <VinylItem key={album.id} album={album} activeTab={activeTab} />
        ))}
      </div>
    </div>
  ));
};

export default VinylList;
