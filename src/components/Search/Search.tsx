import { type FC } from 'react';
import heart from '../../assets/svg/heart.svg';
import cancel from '../../assets/svg/cancel.svg';
import hamburger from '../../assets/svg/hamburger.svg';
import squares from '../../assets/svg/squares.svg';
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
  const btnIconRight =
    searchQuery.length > 0
      ? cancel
      : hiddenArtists.length > 0
        ? hamburger
        : squares;

  const btnIconRightClasses = `${css.btn} ${css.btnRight}`;

  return (
    <div className={css.wrapper}>
      <label className={css.label} htmlFor="search">
        <button className={css.btn} onClick={handleOnlyFavorites}>
          <img className={css.img} src={heart} alt="" />
        </button>
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
        <button className={btnIconRightClasses} onClick={handleBtnInputClick}>
          <img className={css.img} src={btnIconRight} alt="" />
        </button>
      </label>
    </div>
  );
};

export default Search;
