import { type FC } from 'react';
import heart from '@assets/svg/heart.svg';
import cancel from '@assets/svg/cancel.svg';
import hamburger from '@assets/svg/hamburger.svg';
import squares from '@assets/svg/squares.svg';
import css from './SearchBtn.module.css';

interface SearchBtnProps {
  isRightBtn: boolean;
  searchQuery: string;
  hiddenArtists: string[];
  handler: () => void;
}

const SearchBtn: FC<SearchBtnProps> = ({
  isRightBtn,
  searchQuery,
  hiddenArtists,
  handler,
}) => {
  const getBtnIcon = (): string => {
    if (searchQuery.length > 0) {
      return cancel;
    } else if (hiddenArtists.length === 0) {
      return hamburger;
    } else {
      return squares;
    }
  };

  const btnIcon = isRightBtn ? getBtnIcon() : heart;
  const btnClasses = isRightBtn ? `${css.btn} ${css.btnRight}` : css.btn;

  return (
    <button className={btnClasses} onClick={handler}>
      <img className={css.img} src={btnIcon} alt="" />
    </button>
  );
};

export default SearchBtn;
