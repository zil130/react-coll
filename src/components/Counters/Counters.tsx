import { type FC } from 'react';
import Counter from '@components/Counter/Counter';
import type IAlbum from '@models/IAlbum';
import Tabs from '@models/Tabs';
import css from './Counters.module.css';

interface CountersProps {
  activeTab: Tabs;
  albums: IAlbum[];
  handleTabClick: (tab: Tabs) => void;
}

const Counters: FC<CountersProps> = ({ activeTab, albums, handleTabClick }) => {
  const tabsOrder: Tabs[] = [Tabs.has, Tabs.wants, Tabs.total];
  const tabsValues: Record<Tabs, number> = {
    has: albums.filter((album) => album.has).length,
    wants: albums.filter((album) => !album.has).length,
    total: albums.length,
  };

  return (
    <div className={css.wrapper}>
      <div className={css.counters}>
        {tabsOrder.map((tab) => (
          <Counter
            key={tab}
            handleTabClick={handleTabClick}
            count={tabsValues[tab]}
            title={tab}
            isActive={activeTab === tab}
          />
        ))}
      </div>
    </div>
  );
};

export default Counters;
