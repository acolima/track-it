import { Container, Content, Header, Menu, TodayButton, Button} from '../AppPage'
import logo from '../../assets/logo.png'
import UserContext from '../../contexts/UserContext'
import { useContext } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { useNavigate } from 'react-router-dom'

function Today(){
  const { user } = useContext(UserContext)
  const percentage = 50;
  let navigate = useNavigate()

  return (
    <Container>
      <Header>
        <h1>Track It</h1>
        <img src={user.image} alt="user profile pic" />
      </Header>
      <Content>
        {/* <h2 className='date'>Segunda, 17/05</h2>
        <p className='habitsProgress'>Nenhum hábito concluído ainda</p> */}
      </Content>
      <Menu>
        <Button to='/habitos'>Hábitos</Button>
        <TodayButton onClick={() => navigate('/hoje')}>
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
            {/* <TodayButton to='/'>Hoje</TodayButton> */}
        <Button to='/historico'>Histórico</Button>
      </Menu>
    </Container>
  )
}

export default Today