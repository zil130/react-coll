import { type FC } from 'react';
import SearchBtn from '@components/SearchBtn/SearchBtn';
import css from './Search.module.css';

interface SearchProps {
  searchQuery: string;
  hiddenArtists: string[];
  handleSearchQueryChange: (query: string) => void;
  handleBtnInputClick: () => void;
  handleOnlyFavorites: () => void;
}

const Search: FC<SearchProps> = ({
  searchQuery,
  handleSearchQueryChange,
  hiddenArtists,
  handleBtnInputClick,
  handleOnlyFavorites,
}) => {
  return (
    <div className={css.wrapper}>
      <label className={css.label} htmlFor="search">
        <SearchBtn
          isRightBtn={false}
          searchQuery={searchQuery}
          hiddenArtists={hiddenArtists}
          handler={handleOnlyFavorites}
        />
        <input
          id="search"
          className={css.input}
          type="text"
          placeholder="Artist, title, year"
          value={searchQuery}
          onChange={(e) => {
            handleSearchQueryChange(e.target.value);
          }}
        />
        <SearchBtn
          isRightBtn={true}
          searchQuery={searchQuery}
          hiddenArtists={hiddenArtists}
          handler={handleBtnInputClick}
        />
      </label>
    </div>
  );
};

export default Search;
