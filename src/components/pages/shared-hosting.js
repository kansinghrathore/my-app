import { useState, useEffect } from 'react';
import React from 'react';
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import WithoutSecurity from "../Tabs/WithoutSecurity";
import WithSecurity from "../Tabs/WithSecurity";
import FeaturesIncluded from "../FeaturesIncluded";
import SEO from '../SEO'
function Shared(){
   const [page, setPage] = useState({}); 
      useEffect(()=>{
        let url = `${process.env.REACT_APP_API_ROOT_OPTION}/pages/2097`
        axios.get(url).then((res)=>{ 
           //console.log('res',res); 
            setPage(res);       
        }).catch(err => {
            console.log('error', err.message);
        });
    }, []);
    return( <>
    <SEO
          title='Shared Hosting | Best Web Hosting Provider in INDIA | Logic Daddy'
          description="India's Best Web Hosting company offering you domain registration, ssl certificate, site lock, shared hosting, reseller hosting, vps & dedicated servers, cloud"
          keyword="best web hosting india, web hosting, Cheap web hosting, windows reseller hosting, linux reseller hosting, Domain registration, ssl certificates,vps hosting, dedicated servers, linux dedicated servers, windows dedicated servers, office 365 , business email in india , cloud hosting, Cloud servers in india, Server Management in india, web hosting services in india"
          name='Logic Daddy'
          type='Page' 
    />
    { Object.keys(page).length ? (
    <div className="main-content">
   <div className="SliderWrap Inner" style={{backgroundImage: `url(${page.data.acf.slider_box.background_image})`}}>
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
   <div className="WhyHosting">
      <div className="container">
         <div className="Heading" data-aos="zoom-in">{page.data.acf.why_shared_hosting.heading.heading} <span>{page.data.acf.why_shared_hosting.heading.color_heading}</span></div>
         <div className="row">
               {
                  page.data.acf.why_shared_hosting.box.map((g)=>{
                     return (
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-right">
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
   <div className="HotingPlan InnerPLan HotingPlanTabs">
      <div className="container">
         <div className="Heading aos-init aos-animate" data-aos="zoom-in">{page.data.acf.our_pricing.heading.heading} <span>{page.data.acf.our_pricing.heading.color_heading}</span></div>
         <Tabs className="">
               <div className='tab'>
                  <TabList>
                     <Tab className="button">{page.data.acf.our_pricing.tab_heading.tab_1}</Tab>
                     <Tab className="button">{page.data.acf.our_pricing.tab_heading.Tab_2}</Tab>  
                  </TabList> 
               </div>
               <div className="tab-main-box">
                  <TabPanel>
                     <WithoutSecurity />
                  </TabPanel>
                  <TabPanel>
                     <WithSecurity />
                  </TabPanel>
               </div>
         </Tabs>
      </div>
   </div>
   <div className="Services-offer Inner">
     <FeaturesIncluded />
   </div>
</div>
) : <div className="LoaderSection">
<img src={require('../../img/logo2.svg').default} alt="Logo"/>
</div>
}
    </>
    )
}

export default Shared;