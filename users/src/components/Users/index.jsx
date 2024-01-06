import React from 'react'
import { Loaders } from './Loaders'
import { User } from './User'

export const Users = ({
  items,
  invites,
  isLoading,
  isInvited,
  searchValue,
  onInvitedClick,
  onSuccessBtnClick,
  onchangeSearchValue,
}) => {
  console.log(invites)
  return (
    <>
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
        </svg>
        <input
          value={searchValue}
          onChange={onchangeSearchValue} type="text"
          placeholder="Найти пользователя..."/>
      </div>
      {isLoading ? (
        <div className="skeleton-list">
          <Loaders/>
          <Loaders/>
          <Loaders/>
        </div>
      ) : (
        <ul className="users-list">
          {items.filter(item => {
            const fullName = (item.first_name + item.last_name).toLowerCase()

            return fullName.includes(searchValue.toLowerCase()) ||
              item.email.toLowerCase().includes(searchValue.toLowerCase())
          }).map(item =>
            <User
              key={items.id}
              item={item}
              isInvited={isInvited.includes(item.id)}
              onInvitedClick={onInvitedClick}
            />,
          )}
        </ul>
      )}
      {
        invites.length > 0 ?
          <button
            onClick={onSuccessBtnClick}
            className="send-invite-btn">Отправить приглашение</button> :
          <div className="no-invites-message">
            <p>Все пользователи ещё не приглашены.</p>
            <p>Вы можете отправить приглашения, выбрав соответствующих
              пользователей.</p>
          </div>
      }
    </>
  )
}
