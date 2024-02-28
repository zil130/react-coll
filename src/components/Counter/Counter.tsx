import { type FC } from 'react'
import { type Tabs } from '../../models/Tabs'
import css from './Counter.module.css'

interface CountersProps {
  count: number
  title: Tabs
  handleTabClick: (tab: Tabs) => void
  isActive: boolean
}

const Counter: FC<CountersProps> = ({
  count, title, handleTabClick, isActive = false
}) => {
  const btnClasses = [css.btn, isActive ? css.btnActive : ''].join(' ').trim()

  return (
    <button
      onClick={() => { handleTabClick(title) }}
      className={btnClasses}
      type="button"
    >
      <span className={css.count}>{count}</span>
      <span className={css.title}>{title}</span>
    </button>
  )
}

export default Counter
