import { Container } from "../AppPage"
import Header from "../Header"
import Menu from "../Menu"
import { Content } from "./style"

function History(){
  return (
    <Container>
      <Header/>
      <Content>
        <h2 className='text'>Histórico</h2>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </Content>
      <Menu/>
    </Container>
  )
}

export default History