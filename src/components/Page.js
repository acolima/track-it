import { useEffect, useState } from "react"
import { Container } from "./AppPage"
import Habits from "./Habits"
import Header from './Header'
import History from "./History"
import Menu from './Menu'
import Today from "./Today"

function Page({page}){
  const [todaysHabits, setTodaysHabits] = useState([])
  let progress = 0

  function calculateProgress(){
    const habitsDone = (todaysHabits.filter(habit => habit.done === true)).length
    if(todaysHabits.length !== 0)
      progress = Math.floor(habitsDone*100/todaysHabits.length)

    return progress
  }

  // useEffect(() => {
    calculateProgress()
  // }, [todaysHabits])
  

  return(
    <Container>
      <Header/>
      {page === 'today' && <Today progress={progress} todaysHabits={todaysHabits} setTodaysHabits={setTodaysHabits} />}
      {page === 'habits' && <Habits setTodaysHabits={setTodaysHabits}/>}
      {page === 'history' && <History/>}
      <Menu progress={progress} />
    </Container>
  )
}

export default Page