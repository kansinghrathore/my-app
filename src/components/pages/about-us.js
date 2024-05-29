import { useState, useEffect } from 'react';
import React from 'react';
import axios from "axios";
import  SEO  from '../SEO';
function About(){
   const [page, setPage] = useState({}); 
      useEffect(()=>{
        let url = `${process.env.REACT_APP_API_ROOT_OPTION}/pages/2004`
        axios.get(url).then((res)=>{ 
            //console.log('res',res); 
            setPage(res);       
        }).catch(err => {
            console.log('error', err.message);
        });
    }, []);
   return( <>
  <SEO
          title='About Us | Best Web Hosting Provider in INDIA | Logic Daddy'
          description="India's Best Web Hosting company offering you domain registration, ssl certificate, site lock, shared hosting, reseller hosting, vps & dedicated servers, cloud"
          keyword="best web hosting india, web hosting, Cheap web hosting, windows reseller hosting, linux reseller hosting, Domain registration, ssl certificates,vps hosting, dedicated servers, linux dedicated servers, windows dedicated servers, office 365 , business email in india , cloud hosting, Cloud servers in india, Server Management in india, web hosting services in india"
          name='Logic Daddy'
          type='Page' 
    />
    { Object.keys(page).length ? (
   <div className="main-content">
    {page.data.acf.hide_slider_box === true ? (
      '' 
      ) : (
         <div className="SliderWrap Inner" style={{backgroundImage: `url(${page.data.acf.slider_box.background_image})`}}>
     <div className="container">
        <div className="row">
           <div className="col-md-6">
              <div className="ContentWrap">
                 <p className="First">{page.data.acf.slider_box.Sub_Heading} by</p>
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
              <div className="ImgSec"> <img src={page.data.acf.slider_box.image} alt="slider-img" /> </div>
           </div>
        </div>
     </div>
  </div>
      )}  

  {page.data.acf.hide_who_we_are === true ? (
      '' 
      ) : (
         <div className="WhoWeAre">
     <div className="container">
        <div className="Heading" data-aos="zoom-in">{page.data.acf.who_we_are.heading.heading} <span>{page.data.acf.who_we_are.heading.color_heading}</span></div>
        <div className="row">
           <div className="col-md-6" data-aos="fade-up-right">
              <div className="h3">{page.data.acf.who_we_are.left_box.heading}</div>
              <p>{page.data.acf.who_we_are.left_box.description}</p>
           </div>
           <div className="col-md-6" data-aos="fade-up-left"> <img src={page.data.acf.who_we_are.image} alt="logic daddy about us" className="d-block" /> </div>
        </div>
     </div>
  </div>
      )}

  
</div>
) : <div className="LoaderSection">
<img src={require('../../img/logo2.svg').default} alt="Logo"/>
</div>
}
   </>
   )
}

export default About;