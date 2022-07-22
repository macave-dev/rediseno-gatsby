import React from "react"
import styled from "styled-components"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import '../styles/layout.css'
import HomePageContent from "../components/HomeSections/Home"
import Layout from "../components/Layout"


export default function Home() {
  return (
    <>
    <Header />
      <Layout >
          <HomePageContent/>
      </Layout>
    <Footer/>
    </>
  )
}