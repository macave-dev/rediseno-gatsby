import React,{useState,useEffect} from "react"
import styled from "styled-components"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import '../styles/layout.css'
import HomePageContent from "../components/HomeSections/Home"
import Layout from "../components/Layout"


export default function Home() {


  const url = 'https://eventosyfestivales.com/wp-json/wp-macave/v1/schema';
  const [information,setInformation] = useState()
  const fetchApi = async() => {
      const response = await fetch(url);
      const responseJSON = await response.json();
      setInformation(responseJSON);
  }

  useEffect(() => {
    fetchApi();
  },[])

  console.log(information)



  return (
    <>
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        <link data-rh="true" rel="preload" href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap" as="font" type="font/woff2" crossorigin="true"/>
        <link data-rh="true" rel="dns-prefetch" href="https://www.google-analytics.com"/>
        <link data-rh="true" href="https://www.google-analytics.com" rel="preconnect" crossorigin="true"/>
        <meta data-rh="true" name="viewport" content="initial-scale=1.0, maximum-scale=1.0, width=device-width, user-scalable=no"/>

        {!information ? '': 
              <script type="application/ld+json">{
                `{
                  "@context": "http://schema.org/",
                  "@type": "NewsMediaOrganization",
                  "name" : "${information.Name}",
                  "url" : "${information.URL}",
                  "logo": "${information.Logo}",
                  "description" : "${information.Description}",
                  "actionableFeedbackPolicy": "${information.Policy}",
                  "foundingDate": "",
                  "sameAs": ""
                }`
             }</script>
            }
            {!information ? null: <link data-rh="true" rel="shortcut icon" href={information.Logo}/>}
            {!information ? null: <link data-rh="true" rel="icon" href={information.Logo} type="image/x-icon"/>}
            

            {/* ADSENSE */}
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1507048971343506" crossorigin="anonymous"></script>
            {/* OPTAD */}
            <script async src="//cmp.optad360.io/items/efcbca1a-ff07-4c07-8ab7-4b8f22babc58.min.js"></script>
            <script async src="//get.optad360.io/sf/2a85e80b-6283-412a-9072-fb28e85f51ee/plugin.min.js"></script>
            

            {!information ? '': <meta data-rh="true" name="description" content={information.Description}/> }
                {!information ? '': <meta data-rh="true" property="fb:pages" content={information.FacebookPages}/> }
                {!information ? '': <meta data-rh="true" property="fb:app_id" content={information.FacebookId}/>}
                <meta data-rh="true" property="og:type" content="article"/>
                {!information ? '': <meta data-rh="true" property="og:title" content={information.Name}/>}
                {!information ? '': <meta data-rh="true" property="og:site_name" content={information.Name}/>}
                {!information ? '': <meta data-rh="true" property="og:image" content={information.SiteImage}/>}
                {!information ? '': <meta data-rh="true" property="og:description" content={information.Description}/>}
                {!information ? '': <title data-rh="true">{information.Name} | {information.Description}</title>}
    
    
    
    <Header />
      <Layout >
          <HomePageContent/>
      </Layout>
    <Footer/>
    </>
  )
}