import styled from 'styled-components'

const Content = styled.div`
  padding: 70px 0 0 17px;
  margin-top: 28px;

  .habitsProgress{
    font-family: 'Lexend Deca';
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    color: #BABABA;
  }

  .habitName{
    font-family: 'Lexend Deca';
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    color: #666;
    padding-bottom: 7px;
  }

  .habitInfo{
    font-family: 'Lexend Deca';
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    color: #666;

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
  ButtonCheck
}