import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'
import Today from './components/Today'
import { useState } from 'react'
import Habits from './components/Habits'
import UserContext from './contexts/UserContext'
import TokenContext from './contexts/TokenContext'
import History from './components/History'


function App() {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState('')
  
  return (
    <BrowserRouter>
      <UserContext.Provider value={{user, setUser}}>
        <TokenContext.Provider value={{token, setToken}}>
          <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/cadastro' element={<SignUpPage/>}/>
            <Route path='/hoje' element={<Today/>}/>
            <Route path='/habitos' element={<Habits/>}/>
            <Route path='/historico' element={<History/>}/>
          </Routes>
        </TokenContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App