import { Content } from "./style"
import Calendar from 'react-calendar'
import { useContext, useState, useEffect} from "react"
import '../../styles/calendar.css'
import dayjs from 'dayjs'
import TokenContext from "../../contexts/TokenContext"
import { getHabitsHistory } from "../../services/trackit"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from "react-loader-spinner"
import LoadingPage from "../LoadingPage"

function History() {
  const {token} = useContext(TokenContext)
  const config = {headers: {'Authorization': `Bearer ${token}`}}
  const [habitsHistory, setHabitsHistory] = useState([])
  const [loading, setLoading] = useState(true)
  const today = dayjs().format('DD/MM/YYYY')

  useEffect(() => {
    const promise = getHabitsHistory(config)
    promise.then(response => {
      setHabitsHistory(response.data)
      setLoading(false)
    })
  },[])
  
  function handleCompleteDays(date) {
    const formatedDate = dayjs(date).format('DD/MM/YYYY')
    
    for(let i = 0; i < habitsHistory.length; i++){
      const habitsDay = habitsHistory[i]
      if(formatedDate !== habitsDay.day || formatedDate === today){
        continue
      }
      else{
        if(doneHabits(habitsDay.habits)){
          console.log(doneHabits(habitsDay.habits))
          return 'complete'
        }
        else return 'incomplete'
      }
    }
  }

  function doneHabits(habitsDay){
    let incomplete = false
    
    for(let i = 0; i < habitsDay.length; i++){
      const habit = habitsDay[i]
      if(!habit.done){
        incomplete = true
        break
      }
      else {
        incomplete = false
      }
    }
    if(incomplete) return false
    else return true
  }

  return (
    <Content>
      <h2 className='text'>Histórico</h2>
      {(loading) ?
        (<LoadingPage>
          <Loader type="TailSpin" color="#FFF" height="90" width="90" />
        </LoadingPage>):
        <Calendar
            tileClassName={({date}) => (handleCompleteDays(date))}
        />
      }
    </Content>
  )
    
}

export default History