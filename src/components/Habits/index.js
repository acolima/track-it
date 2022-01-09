import { Content, MyHabits, AddHabit, CreateHabit, Input, WeekDay, ButtonSaveHabit, ButtonCancel} from './style'
import { HabitsList, Habit, LoadingPage } from "../AppPage"
import { useState, useContext, useEffect } from "react"
import TokenContext from "../../contexts/TokenContext"
import axios from "axios"
import deleteIcon from '../../assets/delete.png'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from "react-loader-spinner"

function Habits(){
  const [addHabit, setAddHabit] = useState(false)
  const [loading, setLoading] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [habits, setHabits] = useState([])
  const [name, setName] = useState('')
  const {token} = useContext(TokenContext)
  const config = {headers: {'Authorization': `Bearer ${token}`}}
  const [weekdays, setWeekdays] = useState([
    {dayId: 0, dayName: 'D', selected: false},
    {dayId: 1, dayName: 'S', selected: false},
    {dayId: 2, dayName: 'T', selected: false},
    {dayId: 3, dayName: 'Q', selected: false},
    {dayId: 4, dayName: 'Q', selected: false},
    {dayId: 5, dayName: 'S', selected: false},
    {dayId: 6, dayName: 'S', selected: false},
  ])

  useEffect(() => {
    renderPage()
  }, [])

  function renderPage(){
    const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`, config)

    promise.then(response => setHabits(response.data))
  }

  function handleSelectDay(id){
    setButtonDisabled(false)
    const selectedDays = [...weekdays]

    weekdays[id].selected = !weekdays[id].selected
    setWeekdays([...selectedDays])
  }

  function handleSaveHabit(){
    setLoading(true)
    
    const days = weekdays
    .filter((day) => day.selected === true)
    .map(day => day.dayId)
        
    const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`, 
      {name, days}, config)

    promise.then(response => reset())
    promise.catch(error => {
      if(name === '') alert("O campo 'nome' não pode ser vazio")
      setLoading(false)
    })
  }

  function reset(){
    setAddHabit(false)
    setName('')
    setLoading(false)
    setHabits([...habits])
    renderPage()

    const defaultWeekdays = [...weekdays]
    weekdays.map(day => day.selected = false)
    setWeekdays([...defaultWeekdays])
  }

  function handleDeleteHabit(id){
    const confirmDelete = window.confirm('Deseja deletar esse hábito?')
    
    if(confirmDelete){
      const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)

      promise.then(() => renderPage())
    }
  }

  if(habits.length === 0){
    return (
      <LoadingPage>
        <Loader type="TailSpin" color="#FFF" height="90" width="90" />
      </LoadingPage>
    )
  }

  return (
    <Content>
      <MyHabits>
        <h2 className='text'>Meus hábitos</h2>
        <AddHabit onClick={() => setAddHabit(true)}>+</AddHabit>
      </MyHabits>
      {addHabit && 
        <CreateHabit>
          <Input 
            type="text" 
            placeholder="nome do hábito"
            onChange={e => setName(e.target.value)}
            value={name}
            loadingInput={loading}
          />
          <div className='days'>
            {weekdays.map(day => (
              <WeekDay selected={day.selected} onClick={() => handleSelectDay(day.dayId)} key={day.dayId} loadingButton={loading}>
                {day.dayName}
              </WeekDay>
            ))}
          </div>
          <div className='buttons'>
            <ButtonCancel onClick={() => setAddHabit(false)} loadingButton={loading}>Cancelar</ButtonCancel>
            <ButtonSaveHabit 
              onClick={handleSaveHabit} 
              loadingButton={loading}
              disabled={buttonDisabled}>
              {loading ?
                <Loader type="ThreeDots" color="#FFF" height="30" width="30" /> :
                'Salvar'
              }
            </ButtonSaveHabit>
          </div>
        </CreateHabit>
      }
      
      {((habits.length === 0) ?
        <p className='emptyList'>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>:
        (<HabitsList>
          {habits.map(habit => (
            <Habit key={habit.id}>
              <div>
                <p className="habitName">{habit.name}</p>
                <div className='days'>
                  {weekdays.map(day =>
                    <WeekDay 
                    key={day.dayId}  
                    selected={(habit.days.includes(day.dayId))}
                    >
                      {day.dayName}
                    </WeekDay>
                  )}  
                </div>
              </div>
              <img src={deleteIcon} alt='delete icon' onClick={() => handleDeleteHabit(habit.id)}/>
            </Habit>
          ))}
        </HabitsList>
        )
      )}
    </Content>
  )
}

export default Habits
