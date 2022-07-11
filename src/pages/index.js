import React from "react"
import styled from "styled-components"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import '../styles/layout.css'

const pageStyles = {
  
}

export default function Home() {
  return (
    <Main style={pageStyles}>
      <Header />

      <Footer />
    </Main>
  )
}


const Main = styled.div`
}
`