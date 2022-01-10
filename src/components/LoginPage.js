import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import logo from '../assets/logo.png'
import showIcon from '../assets/show.png'
import hideIcon from '../assets/hide.png'
import { Container, Form, Input, Button, StyledLink } from './FormPage'

import UserContext from '../contexts/UserContext'
import TokenContext from '../contexts/TokenContext'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from "react-loader-spinner"


function LoginPage(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [disabled, setDisabled] = useState(false)
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const [inputType, setInputType] = useState('password')
  let navigate = useNavigate()
  
  const {setLocalUserImage} = useContext(UserContext)
  const {setLocalToken} = useContext(TokenContext)

  function handleSubmit(e){
    e.preventDefault()
    setDisabled(true)

    const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', { email, password})

    promise.then((response) => handleLogin(response))
    promise.catch(() => handleError())
  }

  function handleLogin(response){
    setLocalUserImage(response.data.image)
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
      <img className='logo' src={logo} alt="logo" />
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