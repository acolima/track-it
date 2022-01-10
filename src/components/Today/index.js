import { HabitsList, Habit, LoadingPage } from '../AppPage'
import { ButtonCheck, Content, HabitInfos } from './style'
import dayjs from 'dayjs'
import TokenContext from '../../contexts/TokenContext'
import ProgressContext from '../../contexts/ProgressContext'
import { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import checkImage from '../../assets/check.png'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from "react-loader-spinner"

function Today(){
  const [todaysHabits, setTodaysHabits] = useState([])
  let habitsDone = 0
  let percentage = 0
  const weekdays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  
  const {token} = useContext(TokenContext)
  const {progress, setProgress} = useContext(ProgressContext)
  
  habitsDone = (todaysHabits.filter(habit => habit.done === true)).length
  
  const config = {headers: {'Authorization': `Bearer ${token}`}}

  if(todaysHabits.length !== 0){
    percentage = Math.floor(habitsDone*100/todaysHabits.length)
    setProgress(percentage)
  }

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

    const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/${endpointAPI}`, {}, config)
    
    promise.then(() => renderPage())
    promise.catch(error => console.log(error.response.data))
  }

  // if(todaysHabits.length === 0){
  //   return (
  //     <LoadingPage>
  //       <Loader type="TailSpin" color="#FFF" height="90" width="90" />
  //     </LoadingPage>
  //   )
  // }

  return (
    <Content habitsDone={habitsDone}>
      <div className='top'>
        <h2 className='text'>{weekdays[dayjs().day()]}, {dayjs().format('DD/MM')}</h2>
        <p className='habitsProgress'>
          {habitsDone > 0 ? 
            `${progress}% dos hábitos concluídos`:
            'Nenhum hábito concluído ainda'
          }
        </p>
      </div>

      {(todaysHabits.length === 0) ?
        (<LoadingPage>
          <Loader type="TailSpin" color="#FFF" height="90" width="90" />
        </LoadingPage>):
        (
          <HabitsList>
          {todaysHabits.map(habit => (
            <Habit key={habit.id}>
              <div>
                <HabitInfos>{habit.name}</HabitInfos>
                <HabitInfos done={habit.done}>
                  <span className="sequence">Sequência atual: </span> 
                  <span className="sequence number">{habit.currentSequence} {habit.currentSequence === 1? 'dia' : 'dias'}</span>
                </HabitInfos>
                <HabitInfos highest={habit.currentSequence === habit.highestSequence && habit.currentSequence !== 0 && habit.done}>
                  <span className="sequence">Seu recorde: </span>
                  <span className="sequence number">{habit.highestSequence} {habit.highestSequence === 1? 'dia' : 'dias'}</span>
                </HabitInfos>
              </div>
              <ButtonCheck onClick={() => handleCheckHabit(habit.id, habit.done)} done={habit.done}>
                <img src={checkImage} alt="check" />
              </ButtonCheck>
            </Habit>
          ))}
        </HabitsList>)
      }
    </Content>
  )
}

export default Today