import styled from 'styled-components'

import UserContext from '../contexts/UserContext'
import { useContext } from 'react'

function Header(){
  const { userImage } = useContext(UserContext)
  
  return (
    <Container>
        <h1>Track It</h1>
        <img src={userImage} alt="user profile pic" />
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

  img{
    height: 51px;
    width: 51px;
    border-radius: 98.5px;

    background-color: #fff;
    object-fit: cover;
  }
`

export default Header