import { Content, HabitBox, HabitStatus } from "./style"
import Calendar from 'react-calendar'
import { useContext, useState, useEffect } from "react"
import '../../styles/calendar.css'
import dayjs from 'dayjs'
import TokenContext from "../../contexts/TokenContext"
import api from '../../services/trackit'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from "react-loader-spinner"
import LoadingPage from "../LoadingPage"
import closeIcon from '../../assets/close.png'

function History() {
  const { token } = useContext(TokenContext)
  const config = { headers: { 'Authorization': `Bearer ${token}` } }
  const [habitsList, setHabitsList] = useState([])
  const [loading, setLoading] = useState(true)
  const [showBox, setShowBox] = useState(false)
  const [habits, setHabits] = useState([])
  const today = dayjs().format('DD/MM/YYYY')

  useEffect(() => {
    const promise = api.getHabitsHistory(config)
    promise.then(response => {
      setHabitsList(response.data)
      setLoading(false)
    })
  }, [])

  function handleCompleteDays(date) {
    const formatedDate = dayjs(date).format('DD/MM/YYYY')

    for (let i = 0; i < habitsList.length; i++) {
      const habitsDay = habitsList[i]

      if (formatedDate !== habitsDay.day || formatedDate === today) {
        continue
      }
      else {
        if (doneHabits(habitsDay.habits)) return 'complete'
        else return 'incomplete'
      }
    }
  }

  function doneHabits(habitsDay) {
    let incomplete = false

    for (let i = 0; i < habitsDay.length; i++) {
      const habit = habitsDay[i]
      if (!habit.done) {
        incomplete = true
        break
      }
      else {
        incomplete = false
      }
    }
    if (incomplete) return false
    else return true
  }

  function showHabits(date) {
    const formatedDate = dayjs(date).format('DD/MM/YYYY')

    const inHistory = habitsList.find(habit => habit.day === formatedDate)

    if (inHistory && formatedDate !== today) {
      setHabits(inHistory.habits)
      setShowBox(true)
    }
  }

  return (
    <Content>
      <h2 className='text'>Histórico</h2>
      {(loading) ?
        (<LoadingPage>
          <Loader type="TailSpin" color="#FFF" height="90" width="90" />
        </LoadingPage>) :
        <div className="calendar">
          <Calendar
            tileClassName={({ date }) => handleCompleteDays(date)}
            onClickDay={(date) => showHabits(date)}
          />
          {showBox &&
            <HabitBox>
              <div>
                <h1 className="date">{dayjs(habits[0].date).locale('pt-br').format(`DD/MMMM/YYYY`)}</h1>
                <img className="closeButton" alt="close button" src={closeIcon} onClick={() => setShowBox(false)} />
              </div>
              {habits.map(habit => (
                <HabitStatus key={habit.id} done={habit.done}>{habit.name}</HabitStatus>
              ))}
            </HabitBox>
          }
        </div>
      }
    </Content>
  )

}

export default History