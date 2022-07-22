import React,{useState,useEffect} from 'react'
import Layout from '../components/Layout'
import Header from  '../components/header/Header'
import Footer from '../components/footer/Footer'
import styled from 'styled-components'

const Contacto = () => {

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
    <Header/>
        <Layout>
        <Container>
        {!information ? '':
        <>
            {information.map(item => {
              if(item.slug === 'contacto'){
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

export default Contacto


const Container = styled.div`
  max-width: 870px;
  margin: 0 auto;
  width: 95%;
  a{
    text-decoration: none;
    color: steelblue;
  }
`;     