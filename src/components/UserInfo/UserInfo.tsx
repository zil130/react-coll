import { type FC } from 'react'
import { type IUser } from '../../models/IUser'
import css from './UserInfo.module.css'

interface UserInfoProps {
  user: IUser
}

const UserInfo: FC<UserInfoProps> = ({ user: { name, description, links } }) => {
  const socialLinks = links
    .map(({ title, url }) => (
      <a
        key={title}
        className={css.link}
        href={url}
        target="_blank" rel="noreferrer"
      >
        {title}
      </a>
    ))

  return (
    <header className={css.header}>
      <h1 className={css.title}>{name}</h1>
      <div className={css.desc}><span>{description}</span></div>
      <div className={css.links}>{socialLinks}</div>
    </header>
  )
}

export default UserInfo
