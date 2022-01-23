import styled from "styled-components";

const Content = styled.div`
  padding: 70px 0 30px 17px;
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
  background-color: #fff;
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
  
  color: #666;

  .date{
    font-family: 'Lexend Deca';
    font-size: 24px; 
    text-align: center;

    padding: 10px;
    flex: 1;
  }

  .closeButton{
    width: 20px;
    height: 20px;
    margin-right: 10px;

    cursor: pointer;
  }

  div:first-child{
    display: flex;
    align-items: center;

  }
`
const HabitStatus = styled.div`
  background-color: ${props => props.done ? 'rgba(140,198,85,0.5)' : 'rgba(234,87,102,0.5)'};

  width: 90%;

  margin: 0 auto;
  margin-bottom: 25px;
  padding: 10px;

  font-family: 'Lexend Deca';
  font-size: 18px;
`

export{
  Content,
  HabitBox,
  HabitStatus
}