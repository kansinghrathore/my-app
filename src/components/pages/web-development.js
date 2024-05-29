import { useState, useEffect } from 'react';
import React from 'react';
import axios from "axios";
import SEO from '../SEO';
function WebDev(){
  const [page, setPage] = useState({}); 
      useEffect(()=>{
        let url = `${process.env.REACT_APP_API_ROOT_OPTION}/pages/2412`
        axios.get(url).then((res)=>{ 
            console.log('res',res); 
            setPage(res);       
        }).catch(err => {
            console.log('error', err.message);
        });
    }, []);
    return( <>
    <SEO
          title='Website Development | Best Web Hosting Provider in INDIA | Logic Daddy'
          description="India's Best Web Hosting company offering you domain registration, ssl certificate, site lock, shared hosting, reseller hosting, vps & dedicated servers, cloud"
          keyword="best web hosting india, web hosting, Cheap web hosting, windows reseller hosting, linux reseller hosting, Domain registration, ssl certificates,vps hosting, dedicated servers, linux dedicated servers, windows dedicated servers, office 365 , business email in india , cloud hosting, Cloud servers in india, Server Management in india, web hosting services in india"
          name='Logic Daddy'
          type='Page' 
    />
    { Object.keys(page).length ? (
    <div className="main-content">
   <div className="SliderWrap WebsiteDeve Inner" style={{backgroundImage: `url(${page.data.acf.slider_box.background_image})`}}>
      <div className="container">
      <div className="row">
            <div className="col-md-6">
               <div className="ContentWrap">
                  <p className="First">{page.data.acf.slider_box.Sub_Heading}</p>
                  <h1 className="h1">{page.data.acf.slider_box.heading}</h1>
                  {
                     page.data.acf.slider_box.description.map((g)=>{
                        return (
                                    <p className="SecPar">{g.text_1} </p>
                               )
                     })
                  }
               </div>
            </div>
            <div className="col-md-6">
               <div className="ImgSec"> <img src={page.data.acf.slider_box.image} alt="shared hosting logic daddy" /> </div>
            </div>
         </div>
      </div>
   </div>
   <div className="WhyHosting WebDev">
   <div className="container">
         <div className="Heading" data-aos="zoom-in">{page.data.acf.web_development_process.heading.heading} <span>{page.data.acf.web_development_process.heading.color_heading}</span></div>
         <div className="row">
               {
                  page.data.acf.web_development_process.box.map((g)=>{
                     return (
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in">
                        <div className="box">
                           <img src={g.image} alt={g.heading} />
                           <div className="h4">{g.heading}</div>
                           <p>{g.description}</p>
                        </div>
                     </div>
                     )
                  })
               }
         </div>
      </div>
  </div>
  <div className="centersection">
    <div className="container">
      <h2 className="Heading">{page.data.acf.center_box.heading}</h2>
      <p>{page.data.acf.center_box.description}</p>
    </div>
  </div>
  <div className="Services-offer WebDevelopments Inner">
    <div className="container">
      <div className="Heading aos-init aos-animate" data-aos="zoom-in">{page.data.acf.features_included.heading.heading}<span> {page.data.acf.features_included.heading.color_heading}</span></div>
      <div className="row">
      {
                  page.data.acf.features_included.box.map((g)=>{
                     return (
                      <div className="col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up">
                      <div className="Card">
                        <div className="IMg">  <img src={g.icon} className="img" alt={g.heading} /></div>
                        <div className="h4"> {g.heading} </div>
                        <img src={require('../../img/shape-dot.png')} className="shape" alt="shape" />
                        <p> {g.description} </p>
                      </div>
                    </div>
                     )
                  })
      }
      </div>
    </div>
  </div>
</div>
) : <div className="LoaderSection">
<img src={require('../../img/logo2.svg').default} alt="Logo"/>
</div>
}
    </>
    )
}

export default WebDev;