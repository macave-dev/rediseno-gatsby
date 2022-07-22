import React,{useEffect,useRef} from 'react'
import '../styles/layout.css'
import { Link } from 'gatsby'
import Error_image from '../assets/404.png'
import GoToIcon from '../svg/goToIcon'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const PageNotFound = () => {


  const titleEl = useRef(null);

  return (
    <div>
      <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        <link data-rh="true" rel="preload" href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap" as="font" type="font/woff2" crossorigin="true"/>
        <link data-rh="true" rel="dns-prefetch" href="https://www.google-analytics.com"/>
        <link data-rh="true" href="https://www.google-analytics.com" rel="preconnect" crossorigin="true"/>
        <meta data-rh="true" name="viewport" content="initial-scale=1.0, maximum-scale=1.0, width=device-width, user-scalable=no"/>
    
        <Header/>
          <Layout>
            <Container>
              <img src={Error_image}/>
              <Description>
                <p ref={titleEl} tabIndex="-1">Algo salió mal con la ruta, te invitamos a regresar y seguir navegando</p>
                <Link to='/'>
                  <i><GoToIcon></GoToIcon></i>
                  <span>Continuar navegando</span>
                </Link>
              </Description>
            </Container>
          </Layout>

        <Footer/>
    </div>
  )
}

export default PageNotFound

const Container = styled.div`
  display: grid;
  max-width: 870px;
  margin: 120px auto;
  grid-template-columns: 50% 50%;
  grid-gap: 25px;
  align-items: center;
  width: 90%;
  justify-content: center;
  img{
    max-width: 100%;
  }
  @media (max-width: 767px) {
    display: block;
    margin: 70px auto;
    img{
      margin-bottom: 50px;
    }
  }
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: rgba(12, 17, 43);
  font-size: 4em;
`;

const Description = styled.div`
  p{
    font-size: 17px;
    color: #000000;
    margin: 0 0 40px;
  }
  a{
    display: grid;
    grid-template-columns: 16px auto;
    grid-gap: 10px;
    align-items: center;
    text-decoration: none;
    font-size: 15px;
    color: #407BFF;
  }
  @media (max-width: 767px) {
    text-align: center;
    a{
      width: fit-content;
      margin: 0 auto;
    }
  }
`;