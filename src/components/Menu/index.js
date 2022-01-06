import styled from 'styled-components'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { Link } from 'react-router-dom'


function Menu(){
  const percentage = 50;
  
  return(
    <Container>
      <Button to='/habitos'>Hábitos</Button>
      <TodayButton to='/hoje'>
        <CircularProgressbar 
          value={percentage}
          text={'Hoje'}
          background={'true'}
          strokeWidth={'8'}
          backgroundPadding={'8'}
          styles={buildStyles({
            trailColor: '#52B6FF',
            pathColor: '#fff',
            backgroundColor: '#52B6FF',
            textColor: '#fff'
          })} 
        >
        </CircularProgressbar>
      </TodayButton>
      <Button to='/historico'>Histórico</Button>
    </Container>
  )
}

const Container = styled.div`
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

const TodayButton = styled(Link)`
    height: 91px;
    width: 91px;
    
    margin-bottom: 40px;
`

const Button = styled(Link)`
  color: #52B6FF;
`

export default Menu
