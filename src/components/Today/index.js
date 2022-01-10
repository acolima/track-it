import { HabitsList, Habit } from '../AppPage'
import { ButtonCheck, Content, HabitInfos } from './style'
import LoadingPage from "../LoadingPage"
import dayjs from 'dayjs'
import TokenContext from '../../contexts/TokenContext'
import ProgressContext from '../../contexts/ProgressContext'
import { useState, useContext, useEffect } from 'react'
import checkImage from '../../assets/check.png'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from "react-loader-spinner"
import { checkHabit, getTodaysHabits } from '../../services/trackit'

function Today(){
  const [todaysHabits, setTodaysHabits] = useState([])
  let habitsDone = 0
  let percentage = 0
  const weekdays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

  const [loading, setLoading] = useState(true)
  
  const {token} = useContext(TokenContext)
  const {progress, setLocalProgress} = useContext(ProgressContext)
  
  habitsDone = (todaysHabits.filter(habit => habit.done === true)).length
  
  const config = {headers: {'Authorization': `Bearer ${token}`}}

  if(todaysHabits.length !== 0){
    percentage = Math.floor(habitsDone*100/todaysHabits.length)
    setLocalProgress(percentage)
  }

  useEffect(() => {
    renderPage()
  }, [])
  
  function renderPage(){
    const promise = getTodaysHabits(config)
    promise.then(response => {
      setTodaysHabits(response.data)
      setLoading(false)
    })
  }

  function handleCheckHabit(id, isDone){
    let endpointAPI = ''

    if(!isDone) endpointAPI = 'check'
    else endpointAPI = 'uncheck'

    const promise = checkHabit(id, endpointAPI, config)
    
    promise.then(() => renderPage())
    promise.catch(error => console.log(error.response.data))
  }

  return (
    <Content habitsDone={habitsDone}>
      <div className='top'>
        <h2 className='text'>{weekdays[dayjs().day()]}, {dayjs().format('DD/MM')}</h2>
      </div>

      {(loading) ?
        (<LoadingPage>
          <Loader type="TailSpin" color="#FFF" height="90" width="90" />
        </LoadingPage>):
        (<>
          <p className='habitsProgress'>
          {habitsDone > 0 ? 
            `${progress}% dos hábitos concluídos`:
            'Nenhum hábito concluído ainda'
          }
          </p>
          <HabitsList>
          {todaysHabits.map(habit => (
            <Habit key={habit.id}>
              <div>
                <HabitInfos>{habit.name}</HabitInfos>
                <HabitInfos done={habit.done}>
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
        </HabitsList>
        </>)
      }
    </Content>
  )
}

export default Today