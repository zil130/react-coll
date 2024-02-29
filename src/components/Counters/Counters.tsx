import { type FC } from 'react'
import Counter from '../Counter/Counter'
import { Tabs } from '../../models/Tabs'
import { type IAlbum } from '../../models/IAlbum'
import css from './Counters.module.css'

interface CountersProps {
  activeTab: Tabs
  albums: IAlbum[]
  handleTabClick: (tab: Tabs) => void
}

const Counters: FC<CountersProps> = ({ activeTab, albums, handleTabClick }) => {
  const total = albums.length
  const has = albums.filter((album) => album.has).length
  const wants = total - has

  return (
    <div className={css.wrapper}>
      <div className={css.counters}>
        <Counter
          handleTabClick={handleTabClick}
          count={has}
          title={Tabs.has}
          isActive={activeTab === 'Has'}
        />
        <Counter
          handleTabClick={handleTabClick}
          count={wants}
          title={Tabs.wants}
          isActive={activeTab === 'Wants'}
        />
        <Counter
          handleTabClick={handleTabClick}
          count={total}
          title={Tabs.total}
          isActive={activeTab === 'Total'}
        />
      </div>
    </div>
  )
}

export default Counters
