import { type FC } from 'react';
import type IAlbum from '@models/IAlbum';
import Tabs from '@models/Tabs';
import heart from '@assets/svg/white-heart.svg';
import css from './VinylItem.module.css';

interface VinylItemProps {
  album: IAlbum;
  activeTab: Tabs;
}

const VinylItem: FC<VinylItemProps> = ({
  album: { title, year, imgUrl, has, favorite },
  activeTab,
}) => {
  const opacityClass =
    activeTab === Tabs.total && !has ? css.opacity02 : css.opacity1;

  return (
    <div className={css.vinylItem}>
      {favorite && <img className={css.heart} src={heart} alt="" />}
      <div className={opacityClass}>
        <div className={css.imgWrapper}>
          <img className={css.img} src={imgUrl} alt={title} />
        </div>
        <div className={css.info}>
          <p className={css.title}>{title}</p>
          <p>{year}</p>
        </div>
      </div>
    </div>
  );
};

export default VinylItem;
