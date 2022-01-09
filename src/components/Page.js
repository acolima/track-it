import { useContext } from "react"
import ProgressContext from "../contexts/ProgressContext"
import { Container } from "./AppPage"
import Habits from "./Habits"
import Header from './Header'
import History from "./History"
import Menu from './Menu'
import Today from "./Today"

function Page({page}){
  const {progress} = useContext(ProgressContext)

  return(
    <Container>
      <Header/>
      {page === 'today' && <Today/>}
      {page === 'habits' && <Habits/>}
      {page === 'history' && <History/>}
      <Menu percentageBar={progress}/>
    </Container>
  )
}

export default Page