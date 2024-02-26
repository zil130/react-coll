import css from './UserInfo.module.css';

function UserInfo({ user: { name, description, links } }) {
  const socialLinks = links
    .map(({ title, url }) => (
      <a
        key={title}
        className={css.link}
        href={url}
        target="_blank"
      >
        {title}
      </a>
    ));

  return (
    <header className={css.header}>
      <h1>{name}</h1>
      {description && <div><span>{description}</span></div>}
      {links.length > 0 && <div className={css.links}>{socialLinks}</div>}
    </header>
  );
}

export default UserInfo;
