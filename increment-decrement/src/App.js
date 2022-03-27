import React, {useState} from 'react'
import styled from 'styled-components'

const PGreen = styled.span`
  color: green;
`

const PRed = styled.span`
  color: red;
`

const ContainerMain = styled.div`
  border: 1px solid black;
    width: 250px;
    box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.2);
`

const Container = styled.div`
  width: 250px;
  display: flex;
  justify-content: center;
`
const ButtonNew = styled.button`
  margin: 4px 5px;
`

const CustomP = styled.p`
  font-size: 40px;
  margin:10px 0;
  text-align: center;
`

export default function App() {

  const [num, setNum] = useState(0)
  
  const colorir = () => {
    if(num >= 0) {
      return <PGreen>{num}</PGreen>

    } else {
      return <PRed>{num}</PRed> 
    }
  }

  return (
    <ContainerMain>
      <CustomP>Valor: {colorir()}</CustomP>
      <Container>
        <ButtonNew onClick={ () =>setNum(num-1) }>Diminuir</ButtonNew>
        <ButtonNew onClick={ () =>setNum(num+1) }>Aumentar</ButtonNew>
      </Container>
    </ContainerMain>
  )
}