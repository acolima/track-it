import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import logo from '../../assets/logo.png'
import { Container, Form, Input, Button, StyledLink } from './FormPage'

import UserContext from '../contexts/UserContext'
import TokenContext from '../contexts/TokenContext'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";


function LoginPage(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [disabled, setDisabled] = useState(false)
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

  return(
    <Container>
      <img src={logo} alt="logo" />
      <Form onSubmit={handleSubmit}>
        <Input 
          type='email' 
          placeholder='email' 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          disabledForm={disabled}
          />
        <Input 
          type='password' 
          placeholder='senha'
          onChange={(e) => setPassword(e.target.value)}
          value={password} 
          disabledForm={disabled}
          />
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