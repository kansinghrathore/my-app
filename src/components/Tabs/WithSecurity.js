import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
const WithSecurity = () => {
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
    <div id="Plan-1" className="tabcontent active">
    <div className="Plans">
       <div className="row">
       {
        page.data.acf.pricing_box.tab_2.tab_boxs.map((g)=>{
          return (
            <div className="col-md-4 aos-init aos-animate" data-aos="zoom-in">
            <div className="ProductsCustomCart">
              <div className="pricing-head">
                <div className="pricing-title">{g.heading}</div>
                <div className="product-pricing"> <span className="price">{g.price}</span> <span className="Detail"> {g.time} </span> </div>
              </div>
              <div className="prod-details">
                <ul className="productDescription1">
                  { g.listing.map((l)=>{
                        return (
                                  <li>{l.list} </li>
                               )
                      })
                  }  
                </ul>
                <div className="CrtButton"><Link to={g.button.link} className="BtnDesign"> <i className="fas fa-shopping-cart"></i> {g.button.text} </Link> </div>
              </div>
            </div>
          </div>
          )
      })
      }
       </div>
     </div>
 </div>
 ) : <div className='text-center mt-4'>Loading...</div>
}
 </>
  );
};

export default WithSecurity;
