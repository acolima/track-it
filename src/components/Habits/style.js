import styled from "styled-components"

const Content = styled.div`
  padding-top: 70px;

  .emptyList{
    font-family: 'Lexend Deca';
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    color: #666;

    padding: 30px 20px 0 17px;
  }

  .days{
    display: flex;
    gap: 4px;
  }

  .habitName{
    font-family: 'Lexend Deca';
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    color: #666;
  }

  img{
    width: 13px;
    height: 15px;
  }
`

const MyHabits = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 28px 18px 0 17px;
`

const AddHabit = styled.button`
  height: 35px;
  width: 40px;
  border-radius: 4.6px;

  font-family: 'Lexend Deca';
  font-size: 27px;
  font-weight: 400;
  color: #fff;
  text-align: center;
  
  background-color: #52B6FF;
`

const CreateHabit = styled.div`
  height: 180px;
  width: 340px;
  border-radius: 5px;

  background-color: #fff;

  margin: 0 auto;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  .days{
    display: flex;
    gap: 4px;
    align-items: flex-start;
  }

  .buttons{
    width: 100%;
    padding-right: 18px;

    display: flex;
    justify-content: flex-end;
    gap: 23px;
  }
`

const Input = styled.input`
  height: 45px;
  width: 303px;

  border-radius: 5px;
  box-sizing: border-box;
  padding-left: 11px;
  border: 1px solid #D4D4D4;

  background-color: ${(props) => props.loading && '#f2f2f2'};
  ${(props) => props.loading && 'pointer-events: none;'}


  ::placeholder{
    font-family: 'Lexend Deca';
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    color: #DBDBDB;
  }

  :focus{
    border: 2px solid darkgray;
  }
`

const WeekDay = styled.button`
  height: 30px;
  width: 30px;

  border-radius: 5px;
  border: 1px solid #D4D4D4;

  font-family: 'Lexend Deca';
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  text-align: center;
  color: ${props => props.selected ? '#fff' : '#DBDBDB'};

  ${props => props.selected && 'background-color: #CFCFCF;'}
  ${(props) => props.loading && 'pointer-events: none;'}
`

const ButtonSaveHabit = styled.button`
  height: 35px;
  width: 84px;
  border-radius: 4.6px;

  background-color: #52B6FF;

  font-family: 'Lexend Deca';
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  color: #fff;

  ${(props) => props.disabled && 'opacity: 0.7;'}
  ${(props) => props.disabled && 'pointer-events: none;'}
`

const ButtonCancel = styled.button`
  font-family: Lexend Deca;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #52B6FF;

  ${(props) => props.teste && 'pointer-events: none;'}
`

export {
  Content,
  MyHabits,
  AddHabit,
  CreateHabit,
  Input,
  WeekDay,
  ButtonSaveHabit, 
  ButtonCancel
}