import styled from "styled-components"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from "react-loader-spinner"

function LoadingPage(){
  return (
    <Loading>
      <Loader type="TailSpin" color="#FFF" height="90" width="90" />
    </Loading>
  )
}

export default LoadingPage

const Loading = styled.div`
  height: 60vh;

  display: flex;
  align-items: center;
  justify-content: center;
`