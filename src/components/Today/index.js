import styled from 'styled-components'
import { Container } from '../AppPage'

import Header from '../Header'
import Menu from '../Menu'

function Today(){
  

  return (
    <Container>
      <Header/>
      <Content>
        {/* <h2 className='text'>Segunda, 17/05</h2>
        <p className='habitsProgress'>Nenhum hábito concluído ainda</p> */}
      </Content>
      <Menu/>
    </Container>
  )
}

const Content = styled.div`
  padding-top: 70px;
 
`

export default Today