import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './components/LoginPage'
import SignUpPage from "./components/SignUpPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/cadastro' element={<SignUpPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App