import React,{useState,useEffect} from 'react'
import Layout from '../components/Layout'
import Header from  '../components/header/Header'
import Footer from '../components/footer/Footer'
import styled from 'styled-components'
import '../styles/layout.css'

const TerminosYCondiciones = () => {

  const url = 'https://seunonoticias.net/wp-json/wp/v2/pages'
  const [information,setInformation] = useState()
  const fetchApi = async() => {
      const response = await fetch(url)
      const responseJSON = await response.json()
      setInformation(responseJSON)
  }

  useEffect(() => {
      fetchApi()
  },[])

  return (
    <>  
    <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        <link data-rh="true" rel="preload" href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap" as="font" type="font/woff2" crossorigin="true"/>
        <link data-rh="true" rel="dns-prefetch" href="https://www.google-analytics.com"/>
        <link data-rh="true" href="https://www.google-analytics.com" rel="preconnect" crossorigin="true"/>
        <meta data-rh="true" name="viewport" content="initial-scale=1.0, maximum-scale=1.0, width=device-width, user-scalable=no"/>
    <Header/>
        <Layout>
        <Container>
        {!information ? '':
        <>
            {information.map(item => {
              if(item.slug === 'terminos-y-condiciones-de-uso-aviso-de-privacidad'){
                return(
                  <div>
                    <h1>{item.title.rendered}</h1>
                    <div
      dangerouslySetInnerHTML={{__html: item.content.rendered}}/>
                  </div>   
                )
              }
            })}
        </>
        }
    </Container>
            
        </Layout>
      <Footer/>  
    </>
   
  )
}

export default TerminosYCondiciones


const Container = styled.div`
  max-width: 870px;
  margin: 0 auto;
  width: 95%;
  a{
    text-decoration: none;
    color: steelblue;
  }
`;     