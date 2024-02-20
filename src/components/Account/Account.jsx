import css from './Account.module.css';

function Account() {
  return (
    <header className={css.header}>
      <h1>Account Name</h1>
      <h2>Some Description</h2>
      <div className={css.links}>
        <a className={css.link} href="http://instagram.com" target='_blank'>instagram</a>
        <a className={css.link} href="http://twitter.com" target='_blank'>twitter</a>
      </div>
    </header>
  );
}

export default Account;
