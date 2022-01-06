import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'
import Today from './components/Today'
import { useState } from 'react'
import UserContext from './contexts/UserContext'


function App() {
  const [user, setUser] = useState(null)
 
  return (
    <BrowserRouter>
      <UserContext.Provider value={{user, setUser}}>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/cadastro' element={<SignUpPage/>}/>
          <Route path='/hoje' element={<Today/>}/>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App