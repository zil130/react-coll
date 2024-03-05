import { type FC } from 'react';
import cancel from '../../assets/svg/cancel.svg';
import hamburger from '../../assets/svg/hamburger.svg';
import squares from '../../assets/svg/squares.svg';
import css from './Search.module.css';

interface SearchProps {
  searchQuery: string;
  hiddenArtists: string[];
  handleSearchQueryChange: (query: string) => void;
  handleBtnInputClick: () => void;
}

const Search: FC<SearchProps> = ({
  searchQuery,
  handleSearchQueryChange,
  hiddenArtists,
  handleBtnInputClick,
}) => {
  const btnIcon =
    searchQuery.length > 0
      ? cancel
      : hiddenArtists.length > 0
        ? hamburger
        : squares;

  return (
    <div className={css.wrapper}>
      <label className={css.label} htmlFor="search">
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
        <button className={css.btn} onClick={handleBtnInputClick}>
          <img className={css.img} src={btnIcon} alt="" />
        </button>
      </label>
    </div>
  );
};

export default Search;
