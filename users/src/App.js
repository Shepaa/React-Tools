import React, { useEffect, useState } from 'react'
import './index.scss'
import { Success } from './components/Success'
import { Users } from './components/Users'

// Тут список пользователей: https://reqres.in/api/users

function App () {
  const [users, setUsers] = useState([])
  const [invites, setInvites] = useState([])
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState([true])
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    fetch('https://reqres.in/api/users').
      then((response) => response.json()).
      then((responseJson) => setUsers(responseJson.data)).catch((error) => {
      alert(`ошибка получение пользователей: ${error}`)
    }).finally(() => setLoading(false))
  }, [])

  function onchangeSearchValue (event) {
    setSearchValue(event.target.value)
  }

  function onInvitedClick (id) {
    if (invites.includes(id)) {
      setInvites(prevState => prevState.filter(_id => _id !== id))
    } else {
      setInvites(prevState => [...prevState, id])
    }
  }

  function onSuccessBtnClick () {
    setSuccess(!success)
  }

  return (
    <div className="App">
      {success ? <Success count={invites.length}/> :
        <Users
          items={users}
          invites={invites}
          isInvited={invites}
          isLoading={loading}
          searchValue={searchValue}
          onInvitedClick={onInvitedClick}
          onSuccessBtnClick={onSuccessBtnClick}
          onchangeSearchValue={onchangeSearchValue}
        />
      }
    </div>
  )
}

export default App
