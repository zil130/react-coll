import Counter from '../Counter/Counter';
import css from './Counters.module.css';

function Counters({ activeTab, handleTabClick }) {
  return (
    <div className={css.counters}>
      <Counter
        handleTabClick={handleTabClick}
        count="404"
        title="Total"
        isActive={activeTab === 'Total'}
      />
      <Counter
        handleTabClick={handleTabClick}
        count="253"
        title="Has"
        isActive={activeTab === 'Has'}
      />
      <Counter
        handleTabClick={handleTabClick}
        count="151"
        title="Wants"
        isActive={activeTab === 'Wants'}
      />
    </div>
  );
}

export default Counters;
