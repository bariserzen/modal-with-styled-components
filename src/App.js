import React, {useState} from "react";
import styled from "styled-components";
import { Modal } from "./components/Modal";
import { GlobalStyle } from "./globalStyles";

const  App = () => {

  const [showModal, setShowModal] =useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <>
    <Container>
      <Button onClick={openModal}>I am modal</Button>
      <Modal showModal={showModal} setShowModal={setShowModal}/>
      <GlobalStyle/>
    </Container>
    </>
    
  );
}


const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`

const Button = styled.button`
min-width: 100px;
padding: 16px 32px;
border-radius: 4px;
border: none;
background: #141414;
color: #fff;
font-size: 24px;
cursor: pointer;
`

export default App;
