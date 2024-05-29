import { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
const scrollToTop = () => {
  window.scrollTo(0, 0)
}
function Footer(){
  const [page, setPage] = useState({}); 
      useEffect(()=>{
        let url = `${process.env.REACT_APP_API_ROOT_OPTION}/footer/2756`
        axios.get(url).then((res)=>{ 
            //console.log('res',res); 
            setPage(res);       
        }).catch(err => {
            console.log('error', err.message);
        });
    }, []);
   
    return( <>
    { Object.keys(page).length ? (
    <div className="Footer" style={{backgroundImage: `url(${page.data.acf.footer.footer_background})`}}>
 
 <div className="container">
   <div className="row">
     <div className="col-md-6 col-lg-3">
       <div className="Middle">
         <div className="h5">{page.data.acf.footer.box[0].heading}</div>
         <ul className="Contact">
         {
            page.data.acf.footer.box[0].text.map((g)=>{
                return (
                  <li> <Link target="_blank" to={g.link}>{g.label}</Link></li> 
                )
            })
        }
         </ul>
         <Link to="javascript:void(Tawk_API.toggle())" className="BtnDesign" ><i className="far fa-comment-dots"></i> Live Chat</Link> 
         </div>
     </div>
     <div className="col-md-6 col-lg-3">
       <div className="Middle">
         <div className="h5">{page.data.acf.footer.box[1].heading}</div>
         <ul> 
         {
            page.data.acf.footer.box[1].text.map((g)=>{
                return (
                  <li> <Link onClick={scrollToTop} to={g.link}><i className="fas fa-caret-right"></i> {g.label}</Link></li> 
                )
            })
        }
         </ul>
       </div>
     </div> 
     <div className="col-md-6 col-lg-3">
       <div className="Middle">
         <div className="h5">{page.data.acf.footer.box[2].heading}</div>
         <ul>
         {
            page.data.acf.footer.box[2].text.map((g)=>{
                return (
                  <li> <Link onClick={scrollToTop} to={g.link}><i className="fas fa-caret-right"></i> {g.label}</Link></li> 
                )
            })
        }
         </ul>
       </div>
     </div> 
     <div className="col-md-6 col-lg-3">
       <div className="Middle">
         <div className="h5">{page.data.acf.footer.box[3].heading}</div>
         <ul>
         {
            page.data.acf.footer.box[3].text.map((g)=>{
                return (
                  <li> <Link onClick={scrollToTop} to={g.link}><i className="fas fa-caret-right"></i> {g.label}</Link></li> 
                )
            })
        }
         </ul>
         <ul className="SocialFooter">
        
         <li><Link to={page.data.acf.footer.social_link.skype_link} target="_blank"><i className="fab fa-skype"></i></Link></li>
         <li><Link to={page.data.acf.footer.social_link.facebook_link} target="_blank"><i className="fab fa-facebook-f"></i> </Link></li>
         <li><Link to={page.data.acf.footer.social_link.twitter_link} target="_blank"><i className="fab fa-twitter"></i></Link></li>
         <li><Link to={page.data.acf.footer.social_link.instagram_link} target="_blank"><i className="fab fa-instagram"></i></Link></li>
         <li><Link to={page.data.acf.footer.social_link.linkedin_link} target="_blank"><i className="fab fa-linkedin-in"></i></Link></li>
       </ul>
       </div>
     </div>
   </div>
   <div className="FooterBottom">
     <p dangerouslySetInnerHTML={{__html: page.data.acf.footer.copy_right_text}}></p>
   </div>
 </div>
</div>
) : ''
}
    </>
    )
}

export default Footer;