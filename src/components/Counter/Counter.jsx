import css from './Counter.module.css';

function Counter({ count, title, handleTabClick, isActive = false }) {
  const btnClasses = [css.btn, isActive ? css.btnActive : ''].join(' ').trim();

  return (
    <button
      onClick={() => handleTabClick(title)}
      className={btnClasses}
    >
      <span>{count}</span>
      <span>{title}</span>
    </button>
  );
}

export default Counter;
