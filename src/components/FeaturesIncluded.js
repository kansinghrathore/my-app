import { useState, useEffect } from 'react';
import React from 'react';
import axios from "axios";
const FeaturesIncluded = () => {
   const [page, setPage] = useState({}); 
      useEffect(()=>{
        let url = `${process.env.REACT_APP_API_ROOT_OPTION}/features-included/2128`
        axios.get(url).then((res)=>{ 
            //console.log('Fea',res); 
            setPage(res);       
        }).catch(err => {
            console.log('error', err.message);
        });
    }, []);
  return (
    <>
    { Object.keys(page).length ? (
   <div className="container">
   <div className="Heading aos-init aos-animate" data-aos="zoom-in">{page.data.acf.features_included.heading.heading}<span> {page.data.acf.features_included.heading.color_heading}</span></div>
   <div className="row">
            {
               page.data.acf.features_included.box.map((g)=>{
               return (
                  <div className="col-lg-4 col-md-6 aos-init aos-animate" data-aos="zoom-in">
                  <div className="Card">
                     <div className="IMg"><img src={g.image} className="img" alt="icon1" /></div>
                     <div className="h4">{g.heading}</div>
                     <img src={require('../img/shape-dot.png')} className="shape" alt="shape" /> 
                     <p>{g.description}</p>
                  </div>
               </div>
                     )
               })
            }           
   </div>
   
</div>
) : <div className='text-center mt-4'>Loading...</div>
}
</>
  );
};

export default FeaturesIncluded;
