import { useState, useContext } from "react"
import { Container } from "../AppPage"
import Header from "../Header"
import Menu from "../Menu"
import { Content, MyHabits, AddHabit, Habit, Input, WeekDay, ButtonSaveHabit, ButtonCancel} from './style'
import TokenContext from "../../contexts/TokenContext"
import axios from "axios"

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function Habits(){
  const [addHabit, setAddHabit] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [weekdays, setWeekdays] = useState([
    {dayId: 0, dayName: 'D', selected: false},
    {dayId: 1, dayName: 'S', selected: false},
    {dayId: 2, dayName: 'T', selected: false},
    {dayId: 3, dayName: 'Q', selected: false},
    {dayId: 4, dayName: 'Q', selected: false},
    {dayId: 5, dayName: 'S', selected: false},
    {dayId: 6, dayName: 'S', selected: false},
  ])

  const [name, setName] = useState('')
  const {token} = useContext(TokenContext)

  function handleAddClick(){
    setAddHabit(true)
  }

  function handleSelectDay(id){
    const selectedDays = [...weekdays]

    const day = weekdays.find((day) => day.dayId === id)
    day.selected = !day.selected
    setWeekdays([...selectedDays])
  }

  function handleSaveHabit(){
    setDisabled(true)
    const days = weekdays
      .filter((day) => day.selected === true)
      .map(day => day.dayId)
    
    console.log(days)
    
    const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`, 
      {name, days}, {headers: {'Authorization': `Bearer ${token}`}}
    )

    promise.then(response => {console.log(response.data); setAddHabit(false)})
    promise.catch(error => {console.log(error.response.data); setDisabled(false)})
  }

  function cancelAddHabit(){
    setAddHabit(false)
  }
  

  return (
    <Container>
      <Header/>
      <Content>
        <MyHabits>
          <h2 className='text'>Meus hábitos</h2>
          <AddHabit onClick={handleAddClick}>+</AddHabit>
        </MyHabits>
        {addHabit && 
          <Habit>
            <Input 
              type="text" 
              placeholder="nome do hábito"
              onChange={e => setName(e.target.value)}
              value={name}
              disabled={disabled}
            />
            <div className='days'>
              {weekdays.map(day => (
                <WeekDay selected={day.selected} onClick={() => handleSelectDay(day.dayId)} key={day.dayId}>
                  {day.dayName}
                </WeekDay>
              ))}
            </div>
            <div className='buttons'>
              <ButtonCancel onClick={cancelAddHabit} disabled={disabled}>Cancelar</ButtonCancel>
              <ButtonSaveHabit onClick={handleSaveHabit} disabled={disabled}>
                {disabled ?
                  <Loader type="ThreeDots" color="#FFF" height="30" width="30" /> :
                  'Salvar'
                }
              </ButtonSaveHabit>
            </div>
          </Habit>
        }
        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
      </Content>
      <Menu/>
    </Container>
  )
}

export default Habits
