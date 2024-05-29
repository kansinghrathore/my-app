import { useState, useEffect,useRef  } from 'react';
import emailjs from '@emailjs/browser';
import axios from "axios";
import SEO from '../SEO'
import { Link } from 'react-router-dom';
function Contact(){
  const [statusMessage, setStatusMessage] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_tfdiql9', 'template_d1uhx5b', form.current, {
        publicKey: 'ylK7CYggDN50QjZTg',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
          setStatusMessage("We've received your message. Someone from our team will contact you soon. sent success");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    };
  
  const [page, setPage] = useState({}); 
      useEffect(()=>{
        let url = `${process.env.REACT_APP_API_ROOT_OPTION}/pages/2677`
        axios.get(url).then((res)=>{ 
           //console.log('res',res); 
            setPage(res);       
        }).catch(err => {
            console.log('error', err.message);
        });
    }, []);
    
    return( <>
    <SEO
          title='Contact Us | Best Web Hosting Provider in INDIA | Logic Daddy'
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
        <div className="ImgSec"> <img src={page.data.acf.slider_box.image} alt="Contact Us logic daddy" /> </div>
      </div>
    </div>
  </div>
</div>
<div className="WhyHosting ContactUs">
  <div className="container">
    <div className="Heading" data-aos="zoom-in">{page.data.acf.contact_with_us.heading.heading} <span>{page.data.acf.contact_with_us.heading.color_heading}</span></div>
    <div className="row">
        
      <div className="col-lg-4 col-md-6" data-aos="zoom-in-right">
        <div className="box"> 
        <img src={page.data.acf.contact_with_us.find_us.icon} alt={page.data.acf.contact_with_us.find_us.heading} />
          <div className="h4">{page.data.acf.contact_with_us.find_us.heading}</div>
          <p>{page.data.acf.contact_with_us.find_us.text}</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6" data-aos="zoom-in-up">
        <div className="box"> 
        <img src={page.data.acf.contact_with_us.make_a_call.icon} alt={page.data.acf.contact_with_us.make_a_call.heading} />
          <div className="h4">{page.data.acf.contact_with_us.make_a_call.heading} </div>
          <p>
          {
                     page.data.acf.contact_with_us.make_a_call.link_box.map((g)=>{
                        return (
                                  <Link className='d-block' target="_blank" to={g.link}>{g.text} </Link>
                               )
                     })
                  }
            </p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6" data-aos="zoom-in-left">
        <div className="box"> 
        <img src={page.data.acf.contact_with_us.send_mail.icon} alt={page.data.acf.contact_with_us.send_mail.heading} />
        <div className="h4">{page.data.acf.contact_with_us.send_mail.heading} </div>
        <p>
          {
                     page.data.acf.contact_with_us.send_mail.link_box.map((g)=>{
                        return (
                                  <Link className='d-block' target="_blank" to={g.link}>{g.text} </Link>
                               )
                     })
                  }
            </p>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="ContactPage">
    <div className="container">
        <div className="BoxShadow">
      <div className="row">
        <div className="col-md-6">
          <div className="LeftSIde">
<iframe title="google map" src={page.data.acf.get_in_touch.iframe_link} width="100%" height="550" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
        <div className="col-md-6">
      
          <div className="RightSide">
            <div className="MainHeadingSection">
              <div className="Heading">{page.data.acf.get_in_touch.heading.heading} <span>{page.data.acf.get_in_touch.heading.color_heading}</span></div>
            </div>
            <div className="ContactForm">
              <form ref={form} onSubmit={sendEmail} className="contact-form QueryForm">
                <div className="row">
                  <div className="col-md-6">
                    <div className="Form-Control">
                      <input type="text" name="user_name" id="name" placeholder="Name *" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="Form-Control">
                      <input type="email" name="user_email" id="email" placeholder="Your Email" required />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="Form-Control">
                      <input type="text" name="subject" id="subject" placeholder="Your Subject" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="Form-Control">
                      <textarea rows="4" placeholder="Message" name="message" id="message"></textarea>
                    </div>
                  </div>
                  
                  <div className="col-md-12">
                    <div className="Form-Control">
                      <input type="submit" value="Send Message" className="BtnDesign" />
                    </div>
                  </div>
                  
                </div>
              </form>
              {statusMessage ? (
                <p className='MessageAfterSubmit'>{statusMessage}</p>
            ) :  ( 
                <></>
            )}
              
            </div>
          </div>
        </div>
      </div>
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

export default Contact;