import React, {Component} from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  `
  const Section = styled.section `
  padding: 150px;
  display: flex;
  justify-content: center;
  aling-itemns: center;
  `
  const Box = styled.div `
  display: flex;
  justify-content: center;
  aling-itemns: center;
  flex-direction: column;
  width: 400px;
  height: 400px ;
  `
  const BoxNumber = styled.div `
  font-size: 60px;
  display: flex;
  justify-content: center;
  aling-itemns: center;
  `
  const BoxBtn = styled.div `
  display: flex;
  justify-content: center;
  aling-itemns: center;
  margin-top: 30px;
  `
 class Contador extends Component {
  state = {
    count: 0
  }

Add = () => {
  if(this.state.count < 10) {
    this.setState({
      count: this.state.count + 1,
      body: (document.body.style.backgroundColor = "aqua"),
    })
  }
}

Decre = () => {
  if(this.state.count > 0 && this.state.count <= 10) {
   this.setState({
    count: this.state.count - 1,
    body: (document.body.style.backgroundColor = "cornflowerblue"),
   })
  }
}

  render() {
    return(
      <>
        <Section>
         <Box>
         <BoxNumber>{this.state.count}</BoxNumber>
          <BoxBtn>
          <Button onClick={this.Add}>+</Button>
          <Button onClick={this.Decre}>-</Button>
          </BoxBtn>
          </Box> 
        
        </Section>
      </>
    )
  }
}

export default Contador
 
