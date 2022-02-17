import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  
  background-color: #fff;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  
  width: 303px;

  .showPassword{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .showPassword > img{

    width: 30px;
    height: 30px;
  }
`

const Input = styled.input`
  box-sizing: border-box;
  
  width: 100%;
  height: 45px;
  
  border-radius: 5px;
  border: 1px solid #D4D4D4;
  padding: 11px;
  
  background-color: ${(props) => props.disabledForm ? '#f2f2f2' : '#fff'};
  ${(props) => props.disabledForm && 'pointer-events: none;'}

  font-family: 'Lexend Deca';

  ::placeholder{
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;

    cursor: text;
  } 

  :focus{
    border: 2px solid darkgray;
  }
`

const Button = styled.button`
  width: 100%;
  height: 45px;
  
  border-radius: 5px;

  font-family: 'Lexend Deca';
  font-size: 21px;
  font-weight: 400;
  line-height: 26px;
  text-align: center;
  color: #fff;

  background: #52B6FF;

  cursor: pointer;

  ${(props) => props.disabledForm && 'opacity: 0.7;'}
  ${(props) => props.disabledForm && 'pointer-events: none;'}
`

const StyledLink = styled(Link)`
  font-family: 'Lexend Deca';
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  text-align: center;
  text-decoration: underline;
  color: #52B6FF;
  
  cursor: pointer;
`

const Logo = styled.img`
  width: 180px;
  height: 178px;

  margin-top: 70px;

`

export {
  Container,
  Form,
  Input,
  Button,
  StyledLink, 
  Logo
}
