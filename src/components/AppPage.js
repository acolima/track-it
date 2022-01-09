import styled from 'styled-components'


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  
  background-color: #f2f2f2;

  overflow-y: scroll;

  padding-bottom: 70px;

  .text{
    font-family: 'Lexend Deca';
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
    color: #126BA5;
  }
`

const HabitsList = styled.div`
  padding-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const Habit = styled.div`
  width: 340px;
  
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 14px;
  
  background-color: #fff;

  display: flex;
  justify-content: space-between;

  div{
    width: 243px;
  }
`
const LoadingPage = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`

export{
  Container,
  HabitsList, 
  Habit,
  LoadingPage
}