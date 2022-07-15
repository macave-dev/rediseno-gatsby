import React, {useState,useEffect,Suspense,lazy} from 'react'

const Section1 = lazy(() => import('./Section1'))
const Section2 = lazy(() => import('./Section2'))
const Section3 = lazy(() => import('./Section3'))
const Section4 = lazy(() => import('./Section4'))
const Section5 = lazy(() => import('./Section5'))
const Section6 = lazy(() => import('./Section6'))
const Section7 = lazy(() => import('./Section7'))
const Section8 = lazy(() => import('./Section8')) 
const Section9 = lazy(() => import('./Section9')) 
const Section10 = lazy(() => import('./Section10'))


const HomePageContent = () => {

 


  return (
    <div>
        <Suspense fallback = {<h1>Cargando...</h1>}>
          <Section1/>
        </Suspense>
        
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/> 
        <Section7/>
        <Section8/>
        <Section9/>
        <Section10/>
    </div>
  )
}

export default HomePageContent