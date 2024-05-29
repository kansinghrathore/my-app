import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import OwlCarousel from 'react-owl-carousel';
const options = {
   margin: 0,
   responsiveClass: true,
   nav: false,
   dots: false,
   loop:true,
   autoplay: true,
   autoplayTimeout:5000,
   smartSpeed: 500,
   responsive: {
       0: {
           items: 2,
       },
       400: {
           items: 2,
       },
       600: {
           items: 3,
       },
       700: {
           items: 3,
       },
       1000: {
           items: 5,

       }
   },
};
const OurClient = () => {
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
  return (
   <>
   { Object.keys(page).length ? (
   <div className="OurClient">
   <div className="container">
   <div className="Heading" data-aos="zoom-in">{page.data.acf.our_client.heading.heading} <span>{page.data.acf.our_client.heading.color_heading}</span></div>
   <div className="row">
         <OwlCarousel className='owl-theme Our-Client' data-aos="zoom-in-up" {...options}>
            {
                page.data.acf.our_client.images.map((g)=>{
                    return (
                        <div className="item"><img src={g.image} width="260" height="74" alt="Our Client Logic Daddy" /></div>   
                    )
                })
            } 
            </OwlCarousel>
         </div>
      </div>
   </div>
   ) : <div className='text-center mb-4'>Loading...</div>
}
   </>
  );
};

export default OurClient;
