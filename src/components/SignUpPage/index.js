import axios from 'axios'
import { useState } from 'react'
import Loader from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'

import { Container, Form, Input, Button, StyledLink } from '../FormPage'

function SignUpPage(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [disabled, setDisabled] = useState(false)
  let navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    setDisabled(true)

    const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`, {
      email,
      name,
      image,
      password
    })

    promise.then((response) => navigate('/'))
    promise.catch((error) => handleError(error))
  }

  function handleError(error){
    alert(error.response.data.message)
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
        <Input 
          type='text' 
          placeholder='nome'
          onChange={(e) => setName(e.target.value)}
          value={name} 
          disabledForm={disabled}
          
          />
        <Input 
          type='text' 
          placeholder='foto'
          onChange={(e) => setImage(e.target.value)}
          value={image} 
          disabledForm={disabled}
          
          />
        <Button type='submit' disabledForm={disabled}>
          {disabled ?
            <Loader type="ThreeDots" color="#FFF" height="50" width="50" /> :
            "Cadastrar"
          }
        </Button>
      </Form>
      <StyledLink to={'/'}>Já tem uma conta? Faça login!</StyledLink>
    </Container>
  )
}

export default SignUpPage