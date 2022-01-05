import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { Button, Container, Input } from '../Page'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";


function LoginPage(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [disabledForm, setDisabled] = useState(false)
  let navigate = useNavigate()


  function handleSubmit(e){
    e.preventDefault()
    setDisabled(true)

    const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', { email, password})

    promise.then((response) => navigate('/hoje'))
    promise.catch((error) => handleError())
  }

  function handleError(){
    alert("Nome de usuário e/ou senha inválidos")
    setDisabled(false)
  }

  return(
    <Container>
      <img src={logo} alt="logo" />
      <form onSubmit={handleSubmit}>
        <Input 
          type='email' 
          placeholder='email' 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          disabledForm={disabledForm}
          // {disabledForm && "disabled"}
        />
        <Input 
          type='password' 
          placeholder='senha'
          onChange={(e) => setPassword(e.target.value)}
          value={password} 
          disabledForm={disabledForm}
 
        />
        <Button type='submit'>
          {disabledForm ?
            <Loader type="ThreeDots" color="#FFF" height="50" width="50" /> :
            "Entrar"
          }
        </Button>
      </form>
      <a>Não tem uma conta? Cadastre-se!</a>
    </Container>
  )
}

export default LoginPage