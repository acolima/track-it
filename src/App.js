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
  const localToken = (localStorage.getItem('@trackit/token'))
  const localUserImage = (localStorage.getItem('@trackit/image'))
  const [userImage, setUserImage] = useState(localUserImage)
  const [token, setToken] = useState(localToken)
  const [progress, setProgress] = useState(0)

  function setLocalToken(token){
    setToken(token)
    localStorage.setItem('@trackit/token', token)
  }

  function setLocalUserImage(image){
    setUserImage(image)
    localStorage.setItem('@trackit/image', image)
  }

  return (
    <BrowserRouter>
      <UserContext.Provider value={{userImage, setUserImage, setLocalUserImage}}>
        <TokenContext.Provider value={{token, setToken, setLocalToken}}>
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