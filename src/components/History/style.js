import styled from "styled-components";

const Content = styled.div`
  padding: 70px 0 0 17px;
  margin-top: 28px;


  p{
    font-family: 'Lexend Deca';
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    color: #666;

    padding-top: 17px;
  }

  .calendar{
    width: 400px;

    margin: 0 auto;

    position: relative;
    z-index: 0;
  }
`

const HabitBox = styled.div`
  background-color: #f2f2f2;
  border: 2px solid darkgray;
  border-radius: 5px;

  height: 300px;
  width: 380px;

  margin: 0 auto;

  overflow-y: scroll;

  position: absolute;
  top: 50px;
  left: 10px; 
  
  overflow-y: scroll;

  .date{
    font-family: 'Lexend Deca';
    font-size: 24px; 
    text-align: center;
    color: #666;

    padding: 10px;
    flex: 1;
  }

  .closeButton{
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  div:first-child{
    display: flex;
    align-items: center;

  }
`
const HabitStatus = styled.div`
  border: 2px solid ${props => props.done ? '#8cc655' : '#ea5766'};

  width: 90%;

  margin: 0 auto;
  margin-bottom: 25px;
  padding: 10px;

  font-family: 'Lexend Deca';
  font-size: 20px;
  

`

export{
  Content,
  HabitBox,
  HabitStatus
}