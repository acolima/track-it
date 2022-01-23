import { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import showIcon from '../assets/show.png'
import hideIcon from '../assets/hide.png'
import { Container, Form, Input, Button, StyledLink, Logo } from './FormPage'

import UserContext from '../contexts/UserContext'
import TokenContext from '../contexts/TokenContext'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from "react-loader-spinner"
import api from "./../services/trackit"

function LoginPage(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [disabled, setDisabled] = useState(false)
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const [inputType, setInputType] = useState('password')
  let navigate = useNavigate()
  
  const {setLocalUser, localUser} = useContext(UserContext)
  const {setLocalToken, localToken} = useContext(TokenContext)

  useEffect(() => {
    if(localUser !== null && localToken !== null)
      navigate("/hoje")
  }, [])

  function handleSubmit(e){
    e.preventDefault()
    setDisabled(true)

    const promise = api.login({email, password})

    promise.then((response) => handleLogin(response))
    promise.catch(() => handleError())
  }

  function handleLogin(response){
    setLocalUser(JSON.stringify(response.data))
    setLocalToken(response.data.token)
    navigate('/hoje')
  }

  function handleError(){
    alert("Nome de usuário e/ou senha inválidos")
    setDisabled(false)
  }

  function handleHidePassword(){
    setInputType('password')
    setPasswordVisibility(false)
  }
  
  function handleShowPassword(){
    setInputType('text')
    setPasswordVisibility(true)
  }

  return(
    <Container>
      <Logo className='logo' src={logo} alt="logo"></Logo>
      <Form onSubmit={handleSubmit}>
        <Input 
          type='email' 
          placeholder='email' 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          disabledForm={disabled}
        />
        <div className='showPassword'>
          <Input 
            type={inputType} 
            placeholder='senha'
            onChange={(e) => setPassword(e.target.value)}
            value={password} 
            disabledForm={disabled}
          />
          {passwordVisibility && <img src={showIcon} alt='show icon' onClick={handleHidePassword} />}
          {!passwordVisibility && <img src={hideIcon} alt='hide icon' onClick={handleShowPassword} /> }
        </div>
        <Button type='submit' disabledForm={disabled}>
          {disabled ?
            <Loader type="ThreeDots" color="#FFF" height="50" width="50" /> :
            "Entrar"
          }
        </Button>
      </Form>
      <StyledLink to={'/cadastro'}>Não tem uma conta? Cadastre-se!</StyledLink>
    </Container>
  )
}

export default LoginPage