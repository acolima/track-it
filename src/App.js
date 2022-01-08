import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'
import Today from './components/Today'
import { useState } from 'react'
import Habits from './components/Habits'
import UserContext from './contexts/UserContext'
import TokenContext from './contexts/TokenContext'
import History from './components/History'
import ProgressContext from './contexts/ProgressContext'


function App() {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState('')
  const [progress, setProgress] = useState(0)
  
  return (
    <BrowserRouter>
      <UserContext.Provider value={{user, setUser}}>
        <TokenContext.Provider value={{token, setToken}}>
          <ProgressContext.Provider value={{progress, setProgress}}>
            <Routes>
              <Route path='/' element={<LoginPage/>}/>
              <Route path='/cadastro' element={<SignUpPage/>}/>
              <Route path='/hoje' element={<Today/>}/>
              <Route path='/habitos' element={<Habits/>}/>
              <Route path='/historico' element={<History/>}/>
            </Routes>
          </ProgressContext.Provider>
        </TokenContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App