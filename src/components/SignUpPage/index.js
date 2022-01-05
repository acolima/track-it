import axios from 'axios'
import { useState } from 'react'
import Loader from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'

import { Button, Container, Input, StyledLink } from '../Page'

function SignUpPage(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [disabledForm, setDisabled] = useState(false)
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
      <form onSubmit={handleSubmit}>
        <Input 
          // {disabledForm && "disabled"}
          type='email' 
          placeholder='email' 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          disabledForm={disabledForm}
        />
        <Input 
          type='password' 
          placeholder='senha'
          onChange={(e) => setPassword(e.target.value)}
          value={password} 
          disabledForm={disabledForm}
 
        />
        <Input 
          type='text' 
          placeholder='nome'
          onChange={(e) => setName(e.target.value)}
          value={name} 
          disabledForm={disabledForm}
 
        />
        <Input 
          type='text' 
          placeholder='foto'
          onChange={(e) => setImage(e.target.value)}
          value={image} 
          disabledForm={disabledForm}
 
        />
        <Button type='submit'>
          {disabledForm ?
            <Loader type="ThreeDots" color="#FFF" height="50" width="50" /> :
            "Cadastrar"
          }
        </Button>
      </form>
      <StyledLink to={'/'}>Já tem uma conta? Faça login!</StyledLink>
    </Container>
  )
}

export default SignUpPage