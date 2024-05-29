import { useState, useEffect } from 'react';
import axios from "axios";
import FeaturesIncluded from "../FeaturesIncluded";
import SEO from '../SEO'
function Domian(){
  const [page, setPage] = useState({}); 
      useEffect(()=>{
        let url = `${process.env.REACT_APP_API_ROOT_OPTION}/pages/2561`
        axios.get(url).then((res)=>{ 
           //console.log('res',res); 
            setPage(res);       
        }).catch(err => {
            console.log('error', err.message);
        });
    }, []);
    return( <>
    <SEO
          title='Domain | Best Web Hosting Provider in INDIA | Logic Daddy'
          description="India's Best Web Hosting company offering you domain registration, ssl certificate, site lock, shared hosting, reseller hosting, vps & dedicated servers, cloud"
          keyword="best web hosting india, web hosting, Cheap web hosting, windows reseller hosting, linux reseller hosting, Domain registration, ssl certificates,vps hosting, dedicated servers, linux dedicated servers, windows dedicated servers, office 365 , business email in india , cloud hosting, Cloud servers in india, Server Management in india, web hosting services in india"
          name='Logic Daddy'
          type='Page' 
    />
    { Object.keys(page).length ? (
    <div className="main-content">
    <div className="SliderWrap DomianSearch Inner" style={{backgroundImage: `url(${page.data.acf.slider_box.background_image})`}}>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="ContentWrap">
            <p className="First">{page.data.acf.slider_box.Sub_Heading}</p>
            <h1 className="h1" >{page.data.acf.slider_box.heading}</h1>
            {
                     page.data.acf.slider_box.description.map((g)=>{
                        return (
                                    <p className="SecPar">{g.text_1} </p>
                               )
                     })
                  }
          </div>
          <div className="DomainSearch">
            <form name="find-domain" action="https://www.logicdaddy.com/billing/cart.php?a=add&amp;domain=register" method="post" id="domain-search-header">
              <div className="Input"><i className="fas fa-globe"></i>
                <input type="text" placeholder="Enter Domain Name" id="domain" name="query" required="" />
              </div>
              <div className="BtnWrap">
                <input type="submit" className="BtnDesign" id="search-btn" name="submit" value="Search" />
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="ImgSec"> <img src={page.data.acf.slider_box.image} alt="Domain Name logic daddy" /> </div>
        </div>
      </div>
    </div>
  </div>
  <div className="WhyHosting">
    <div className="container">
      <div className="Heading" data-aos="zoom-in">{page.data.acf.why_hosting.heading.heading} <span>{page.data.acf.why_hosting.heading.color_heading}</span></div>
      <div className="row">
              {
                  page.data.acf.why_hosting.box.map((g)=>{
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
  <div className="TablePlan" data-aos="zoom-in-up">
    <div className="container">
      <div className="table-responsive">
      <table className="table table-striped">
          <thead>
            <tr>
            {
                     page.data.acf.table.table_header.map((g)=>{
                        return (
                                    <th >{g.heading}</th>
                               )
                     })
                  }
            </tr>
          </thead>
          <tbody>
          {
                     page.data.acf.table.table_body.text.map((g)=>{
                        return ( 
                          <tr>
                            <td> <img src={g.icon} className="shape" alt="domain name" /> </td>
                            {
                            g.label.map((b)=>{
                               return (
                                 <td> {b.text} </td>
                                      )
                            }) 
                          }
                             </tr>  )
                     })
             }
            
          </tbody>
        </table>
      </div>
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

export default Domian;