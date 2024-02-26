import css from './Search.module.css';

function Search({ searchQuery, handleSearchQueryChange }) {
  return (
    <div className={css.wrapper}>
      <input
        className={css.input}
        type="text"
        placeholder="Artist, title, year"
        value={searchQuery}
        onChange={(e) => handleSearchQueryChange(e.target.value)}
      />
      {searchQuery
        && (
        <button
          className={css.btn}
          onClick={() => handleSearchQueryChange('')}
          type="button"
        >
          X
        </button>
        )}
    </div>
  );
}

export default Search;
