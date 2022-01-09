import { Content } from "./style"
import Calendar from 'react-calendar'
import { useState } from "react"
import '../../styles/calendar.css'
import dayjs from 'dayjs'

function History(){
  const [date, setDate] = useState(new Date());

  return (
    <Content>
      <h2 className='text'>Histórico</h2>
      <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      <Calendar
        onChange={setDate}
        value={date}
      />
    </Content>
  )
}

export default History