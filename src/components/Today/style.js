import styled from 'styled-components'

const Content = styled.div`
  padding-top: 70px;
  margin-top: 28px;

  .habitsProgress{
    font-family: 'Lexend Deca';
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    color: ${props => (props.habitsDone > 0) ? '#8FC549': '#BABABA'};
    padding-left: 17px;
  }

  .top{
    padding-left: 17px;
  }
`

const HabitInfos = styled.p`  
  font-family: 'Lexend Deca';
  font-weight: 400;
  color: #666;
  font-size: 20px;
  line-height: 25px;
  
  .sequence{
    font-size: 13px;
    line-height: 16px;
  }

  .number{
    ${props => props.done && 'color: #8FC549;'}
    ${props => props.highest && 'color: #8FC549;'}
  }
`

const ButtonCheck = styled.button`
  box-sizing: border-box;

  height: 69px;
  width: 69px;
  
  border-radius: 5px;
  border: 1px solid #E7E7E7;

  display: flex;
  align-items: center;
  justify-content: center;
  
  background: ${props => (props.done) ? '#8FC549' : '#EBEBEB'};
`

export {
  Content,
  HabitInfos,
  ButtonCheck
}