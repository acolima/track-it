import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'
import { useState } from 'react'
import UserContext from './contexts/UserContext'
import TokenContext from './contexts/TokenContext'
import Page from './components/Page'


function App() {
  const localToken = (localStorage.getItem('@trackit/token'))
  const localUserImage = (localStorage.getItem('@trackit/image'))
  const [userImage, setUserImage] = useState(localUserImage)
  const [token, setToken] = useState(localToken)

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
          <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/cadastro' element={<SignUpPage/>}/>
            <Route path='/hoje' element={<Page page={'today'}/>}/>
            <Route path='/habitos' element={<Page page={'habits'}/>}/>
            <Route path='/historico' element={<Page page={'history'}/>}/>
          </Routes>
        </TokenContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App