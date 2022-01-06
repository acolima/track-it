import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  
  background-color: #f2f2f2;

`
const Header = styled.div`
  height: 70px;
  width: 100%;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 0 10px 0 18px;
  
  background-color: #126BA5;

  position: fixed;
  top: 0;
  left: 0;

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
  }
`

const Content = styled.div`
  width: 100%;

  padding-top: 70px;

  .date{
    font-family: 'Lexend Deca';
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
    color: #126BA5
  }

  .habitsProgress{
    font-family: 'Lexend Deca';
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    color: #BABABA;
  }
`

const Menu = styled.div`
  height: 70px;
  width: 100%;
  
  background-color: #fff;

  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: space-around;

  font-family: 'Lexend Deca';
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
`

const TodayButton = styled.div`
    height: 91px;
    width: 91px;
    
    margin-bottom: 40px;
`

const Button = styled(Link)`
  color: #52B6FF;
`

export{
  Container,
  Header, 
  Content, 
  Menu,
  TodayButton,
  Button
}