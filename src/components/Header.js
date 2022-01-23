import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import logoutIcon from './../assets/logout.png'

function Header(){
  const localUser = (JSON.parse(localStorage.getItem('@trackit/user')))
  const [logout, setLogout] = useState(false)
  let navigate = useNavigate()

  function handleLogout(){
    localStorage.clear()
    navigate("/")
  }
  return (
    <Container>
        <h1>Track It</h1>
        <Avatar 
          src={localUser.image} 
          alt="user profile pic" 
          onClick={() => setLogout(true)}
        />
        {logout && 
        <Logout onClick={handleLogout}>
          <img src={logoutIcon}/>
          Sair
        </Logout>}
    </Container>
  )
}

const Container = styled.div`
  height: 70px;
  width: 100%;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 0 10px 0 18px;
  
  background-color: #126BA5;

  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;

  box-shadow: 0px 4px 4px 0px #00000026;


  h1{
    font-family: 'Playball', cursive;
    font-size: 39px;
    font-weight: 400;
    line-height: 49px;
    color: #fff;
  }
`

const Avatar = styled.img`
  height: 51px;
  width: 51px;
  border-radius: 98.5px;

  background-color: #fff;
  object-fit: cover;
`

const Logout = styled.div`
  background: #fff;
  border-radius: 0 0 5px 5px;

  width: 120px;
  height: 40px;

  position: absolute;
  top: 70px;
  right: 10px;

  color: #666;
  font-family: 'Lexend Deca';
  font-size: 18px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  cursor: pointer;

  img{
    width: 20px;
  }
`
export default Header