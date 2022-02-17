import { useState } from 'react'
import Loader from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import api from '../services/trackit'
import { Container, Form, Input, Button, StyledLink, Logo } from '../components/FormComponents'

function SignUpPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [disabled, setDisabled] = useState(false)
  let navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    setDisabled(true)

    const promise = api.signUp({ email, name, image, password })

    promise.then(() => navigate('/'))
    promise.catch((error) => handleError(error))
  }

  function handleError(error) {
    alert(error.response.data.message)
    setDisabled(false)
  }

  return (
    <Container>
      <Logo src={logo} alt="logo"></Logo>
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
          placeholder='url da foto'
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