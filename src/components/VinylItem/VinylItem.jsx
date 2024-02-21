import css from './VinylItem.module.css';

function VinylItem() {
  return (
    <div>
      <div className={css.imgWrapper}>
        <img
          className={css.img}
          src="https://roundnsquare.club/images/covers-1000/1682614876_a0754933df7a0cc2c891.jpeg"
          alt="Halfie"
        />
      </div>
      <div>
        <p>Anushka Chkheidze</p>
        <p>Halfie</p>
        <p>2020</p>
      </div>
    </div>
  );
}

export default VinylItem;
