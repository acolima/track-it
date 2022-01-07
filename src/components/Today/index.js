import { Container, HabitsList, Habit } from '../AppPage'
import { ButtonCheck, Content } from './style'
import Header from '../Header'
import Menu from '../Menu'
import dayjs from 'dayjs'
import TokenContext from '../../contexts/TokenContext'
import { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import checkImage from '../../assets/check.png'

function Today(){
  const [todaysHabits, setTodaysHabits] = useState([])
  const weekdays = [
    'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'
  ]

  const {token} = useContext(TokenContext)
  const config = {headers: {'Authorization': `Bearer ${token}`}}

  useEffect(() => {
    renderPage()
  }, [])

  function renderPage(){
    const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`, config)

    promise.then(response => setTodaysHabits(response.data))
  }

  function handleCheckHabit(id, isDone){
    let endpointAPI = ''

    if(!isDone) endpointAPI = 'check'
    else endpointAPI = 'uncheck'

    const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/${endpointAPI}`, true, config)
    
    promise.then(response => renderPage())
    promise.catch(error => console.log(error.response.data))
  }

  return (
    <Container>
      <Header/>
      <Content>
        <h2 className='text'>{weekdays[dayjs().day()-1]}, {dayjs().format('DD/MM')}</h2>
        <p className='habitsProgress'>Nenhum hábito concluído ainda</p>
        <HabitsList>
          {todaysHabits.map(habit => (
            <Habit key={habit.id}>
              <div>
                <p className="habitName">{habit.name}</p>
                <p className="habitInfo">Sequência atual: {habit.currentSequence} dias</p>
                <p className="habitInfo">Seu recorde: {habit.highestSequence} dias</p>
              </div>
              <ButtonCheck onClick={() => handleCheckHabit(habit.id, habit.done)} done={habit.done}>
                <img src={checkImage} alt="check" />
              </ButtonCheck>
            </Habit>
          ))}
        </HabitsList>
      </Content>
      <Menu/>
    </Container>
  )
}



export default Today