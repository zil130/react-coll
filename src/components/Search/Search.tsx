import { type FC } from 'react'
import css from './Search.module.css'

interface SearchProps {
  searchQuery: string
  handleSearchQueryChange: (query: string) => void
}

const Search: FC<SearchProps> = ({ searchQuery, handleSearchQueryChange }) => {
  return (
    <div className={css.wrapper}>
      <input
        className={css.input}
        type="text"
        placeholder="Artist, title, year"
        value={searchQuery}
        onChange={(e) => { handleSearchQueryChange(e.target.value) }}
      />
      {searchQuery.length > 0 &&
        (
        <button
          className={css.btn}
          onClick={() => { handleSearchQueryChange('') }}
          type="button"
        >
          X
        </button>
        )}
    </div>
  )
}

export default Search
