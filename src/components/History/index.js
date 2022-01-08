import { Container } from "../AppPage"
import Header from "../Header"
import Menu from "../Menu"
import { Content } from "./style"
import ProgressContext from '../../contexts/ProgressContext'
import { useContext } from "react"


function History(){
  const {progress} = useContext(ProgressContext)

  return (
    <Container>
      <Header/>
      <Content>
        <h2 className='text'>Histórico</h2>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </Content>
      <Menu percentage={progress}/>
    </Container>
  )
}

export default History