import css from './Search.module.css';

function Search() {
  return (
    <div>
      <label htmlFor=""></label>
      <input className={css.input} type="text" placeholder="Artist, title, year" />
    </div>
  );
}

export default Search;
