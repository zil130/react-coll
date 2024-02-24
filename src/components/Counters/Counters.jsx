import Counter from '../Counter/Counter';
import css from './Counters.module.css';

function Counters({ activeTab, albums, handleTabClick }) {
  const total = albums.length;
  const has = albums.filter((album) => album.has).length;
  const wants = total - has;

  return (
    <div className={css.counters}>
      <Counter
        handleTabClick={handleTabClick}
        count={total}
        title="Total"
        isActive={activeTab === 'Total'}
      />
      <Counter
        handleTabClick={handleTabClick}
        count={has}
        title="Has"
        isActive={activeTab === 'Has'}
      />
      <Counter
        handleTabClick={handleTabClick}
        count={wants}
        title="Wants"
        isActive={activeTab === 'Wants'}
      />
    </div>
  );
}

export default Counters;
