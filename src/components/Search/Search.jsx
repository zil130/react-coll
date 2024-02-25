import css from './Search.module.css';

function Search({ searchQuery ,handleSearchQueryChange }) {
  return (
    <div className={css.wrapper}>
      <label className="visually-hidden" htmlFor="search">search</label>
      <input
        className={css.input}
        type="text"
        placeholder="Artist, title, year"
        name="search"
        value={searchQuery}
        onChange={(e) => handleSearchQueryChange(e.target.value)}
      />
      {searchQuery &&
        <button 
          className={css.btn}
          onClick={() => handleSearchQueryChange('')}
        >X</button>}
    </div>
  );
}

export default Search;
