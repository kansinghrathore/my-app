import { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import WithoutSecurity from "../Tabs/WithoutSecurity";
import WithSecurity from "../Tabs/WithSecurity";
import OurClient from "../OurClient";
import  SEO  from '../SEO';
const scrollToTop = () => {
  window.scrollTo(0, 0)
}
function Home(){
  const [page, setPage] = useState({}); 
      useEffect(()=>{
        let url = `${process.env.REACT_APP_API_ROOT_OPTION}/pages/701`
        axios.get(url).then((res)=>{ 
           //console.log('res',res); 
            setPage(res);       
        }).catch(err => {
            console.log('error', err.message);
        });
    }, []);
    return ( <>
    <SEO
          title='Best Web Hosting Provider in INDIA | Logic Daddy'
          description="India's Best Web Hosting company offering you domain registration, ssl certificate, site lock, shared hosting, reseller hosting, vps & dedicated servers, cloud"
          keyword="best web hosting india, web hosting, Cheap web hosting, windows reseller hosting, linux reseller hosting, Domain registration, ssl certificates,vps hosting, dedicated servers, linux dedicated servers, windows dedicated servers, office 365 , business email in india , cloud hosting, Cloud servers in india, Server Management in india, web hosting services in india"
          name='Logic Daddy'
          type='Home Page' 
    />
     { Object.keys(page).length ? (
    <div className="main-content">
<div className="SliderWrap HOmePage" style={{backgroundImage: `url(${page.data.acf.slider_box.background_image})`}}>
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="ContentWrap">
          <p className="First">{page.data.acf.slider_box.Sub_Heading} Test</p>
          <h1 className="h1">{page.data.acf.slider_box.heading}</h1>
          {
            page.data.acf.slider_box.description.map((g)=>{
                return (
                 <p>{g.text_1} </p>
                )
            })
        }
          <Link to={page.data.acf.slider_box.button.button_url} onClick={scrollToTop} className="BtnDesign">{page.data.acf.slider_box.button.button_text}</Link>
        </div>
     
      </div>
      <div className="col-md-6">
        <div className="ImgSec">
        <link rel="preload" fetchpriority="high" as="image" href={page.data.acf.slider_box.image} type="image/webp"></link>
          <img src={page.data.acf.slider_box.image} width="555" height="505" alt="Slider"/> </div>
      </div>
    </div>
  </div>
</div>
<div className="DomainSearchMain">
    <div className="container">
    <div className="DomainSearchWrap">
        <div className="DomainHeading">{page.data.acf.find_domain.heading}</div>
          <form name="find-domain" action="https://www.logicdaddy.com/billing/cart.php?a=add&domain=register" method="post" id="domain-search-header">
            <input type="text" placeholder="Enter Domain Name" id="domain" name="query" required />
           
            <div className="BtnWrap">
                <button type="submit"><i className="fas fa-search" id="search-btn"></i></button>
            </div>
          </form>
          <ul>
          {
            page.data.acf.find_domain.bottom_images.map((g)=>{
                return (
                  <li>
                 <img src={g.image} width="441" height="26" alt="Domain"></img>     
                </li>
                )
            })
        }
          </ul>
        </div>
</div>
</div>
<div className="Services-offer">
  <div className="container">
    <div className="Heading" data-aos="zoom-in">{page.data.acf.services.heading.heading} <span>{page.data.acf.services.heading.color_heading} </span></div>
    <div className="row"> 
    {
            page.data.acf.services.boxes.map((g)=>{
                return (
                  <div className="col-lg-4 col-md-6" data-aos="zoom-in">
                  <div className="Card"> <img src={g.image} className="img" alt="icon1" />
                  <div className="h4"><Link to={g.link} onClick={scrollToTop}>{g.heading}</Link></div>
                  <img src={require('../../img/shape-dot.png')} width="48" height="6" className="shape" alt="shape" />
                  <p>{g.description}</p>
                </div>
                </div>
                )
            })
        }
    </div>
  </div>
</div>
<div className="HotingPlan HotingPlanTabs">
  <div className="container">
    <div className="Heading" data-aos="zoom-in">{page.data.acf.pricing_box.heading.heading} <span>{page.data.acf.pricing_box.heading.color_heading}</span></div>
    <Tabs className="">
               <div className='tab'>
       <TabList>
         <Tab className="button">{page.data.acf.pricing_box.tab_heading.tab_1}</Tab>
         <Tab className="button">{page.data.acf.pricing_box.tab_heading.tab_2}</Tab>  
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
<div className="WhyChoose WhyChooseNewWrap">
  <div className="container">
    <div className="Heading" data-aos="zoom-in">{page.data.acf.why_choose.heading.heading} <span>{page.data.acf.why_choose.heading.color_heading}</span></div>
   
  <div className="row">
  {
            page.data.acf.why_choose.box.map((g)=>{
                return (
                  <div className="col-lg-3 col-md-6"  data-aos="zoom-in-right">
                    <div className="Ser_Card">
                      <div className="Card_Content"> 
	                      <img src={g.image} width="70" height="70" alt="logic daddy why choose" />
                        <h5>{g.heading}</h5>
                        <p>{g.text}</p>
                      </div>
                    </div>
                  </div>    
                )
            })
        }  
  </div>
</div>
</div>
<OurClient />
</div>
) : <div className="LoaderSection">
<img src={require('../../img/logo2.svg').default} alt="Logo"/>
</div>
}
</>
    )
}

export default Home;
