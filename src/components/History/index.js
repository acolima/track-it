import { Container } from "../AppPage"
import Header from "../Header"
import Menu from "../Menu"
import { Content } from "./style"
import ProgressContext from '../../contexts/ProgressContext'
import { useContext } from "react"
import Calendar from 'react-calendar'
import { useState } from "react"
import '../../styles/calendar.css'
import dayjs from 'dayjs'


function History(){
  const {progress} = useContext(ProgressContext)
  const [date, setDate] = useState(new Date());

  return (
    <Container>
      <Header/>
      <Content>
        <h2 className='text'>Histórico</h2>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        <Calendar
          onChange={setDate}
          value={date}
        />
      </Content>
      <Menu percentageBar={progress}/>
    </Container>
  )
}

export default History