import { useState } from "react"
import { Container } from "../components/AppPage"
import { Habits, History, Today } from "./index"
import Header from '../components/Header'
import Menu from '../components/Menu'

function Page({ page }) {
  const [todaysHabits, setTodaysHabits] = useState([])
  let progress = 0

  function calculateProgress() {
    const habitsDone = (todaysHabits.filter(habit => habit.done === true)).length
    if (todaysHabits.length !== 0)
      progress = Math.floor(habitsDone * 100 / todaysHabits.length)

    return progress
  }

  calculateProgress()

  return (
    <Container>
      <Header />
      {page === 'today' && <Today progress={progress} todaysHabits={todaysHabits} setTodaysHabits={setTodaysHabits} />}
      {page === 'habits' && <Habits setTodaysHabits={setTodaysHabits} />}
      {page === 'history' && <History />}
      <Menu progress={progress} />
    </Container>
  )
}

export default Page