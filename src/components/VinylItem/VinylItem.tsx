import { type FC } from 'react';
import { type IAlbum } from '../../models/IAlbum';
import css from './VinylItem.module.css';
import { Tabs } from '../../models/Tabs';

interface VinylItemProps {
  album: IAlbum;
  activeTab: Tabs;
}

const VinylItem: FC<VinylItemProps> = ({
  album: { title, year, imgUrl, has },
  activeTab,
}) => {
  const imgClasses =
    activeTab === Tabs.total
      ? [css.imgWrapper, has ? '' : css.opacity].join(' ').trim()
      : css.imgWrapper;

  return (
    <div>
      <div className={imgClasses}>
        <img className={css.img} src={imgUrl} alt={title} />
      </div>
      <div className={css.info}>
        <p className={css.title}>{title}</p>
        <p>{year}</p>
      </div>
    </div>
  );
};

export default VinylItem;
