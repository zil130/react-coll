import { type FC } from 'react';
import heart from '../../../assets/svg/heart.svg';
import cancel from '../../../assets/svg/cancel.svg';
import hamburger from '../../../assets/svg/hamburger.svg';
import squares from '../../../assets/svg/squares.svg';
import css from './Button.module.css';

interface ButtonProps {
  isRightBtn: boolean;
  searchQuery: string;
  hiddenArtists: string[];
  handler: () => void;
}

const Button: FC<ButtonProps> = ({
  isRightBtn,
  searchQuery,
  hiddenArtists,
  handler,
}) => {
  const btnIconRight =
    searchQuery.length > 0
      ? cancel
      : hiddenArtists.length > 0
        ? hamburger
        : squares;
  const btnIcon = isRightBtn ? btnIconRight : heart;
  const btnClasses = isRightBtn ? `${css.btn} ${css.btnRight}` : css.btn;

  return (
    <button className={btnClasses} onClick={handler}>
      <img className={css.img} src={btnIcon} alt="" />
    </button>
  );
};

export default Button;
