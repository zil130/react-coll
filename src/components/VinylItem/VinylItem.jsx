import css from './VinylItem.module.css';

function VinylItem({
  album: {
    artist, title, year, imgUrl, has,
  },
}) {
  const classes = [css.imgWrapper, has ? css.has : ''].join(' ').trim();

  return (
    <div>
      <div className={classes}>
        <img
          className={css.img}
          src={imgUrl}
          alt={title}
        />
      </div>
      <div>
        <p>{artist}</p>
        <p>{title}</p>
        <p>{year}</p>
      </div>
    </div>
  );
}

export default VinylItem;
