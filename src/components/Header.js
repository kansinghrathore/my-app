import React from "react";
import { useState, useRef, useEffect } from 'react';
import axios from "axios";
import { Link , useLocation } from 'react-router-dom';
const scrollToTop = () => {
  window.scrollTo(0, 0)
}
function openNavM() {
    document.getElementById("MobileSideNav").style.width = "100%"
}

function closeNavM() {
    document.getElementById("MobileSideNav").style.width = "0"
}

function Header(){
  
  const [option, setOption] = useState({}); 
  useEffect(()=>{
    let url = `${process.env.REACT_APP_API_ROOT_OPTION}/theme-option/1854`
    axios.get(url).then((res)=>{ 
        //console.log('option',res); 
        setOption(res);       
    }).catch(err => {
        console.log('error', err.message);
    });
}, []);
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef(null);

  // handle scroll event
  const handleScroll = (elTopOffset, elHeight) => {
    if (window.pageYOffset > (elTopOffset + elHeight)) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  // add/remove scroll event listener
  useEffect(() => {
    var header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height)
    }

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);
  const [show, setShow] = React.useState();

    return( <>

<div className="MainHEaderWrap">
<div id="MainHeader" className={`HeaderSection DesktopHeader ${sticky.isSticky ? 'sticky' : ''}`} ref={headerRef}>
{ Object.keys(option).length ? (
 <div className="TopBarHeader">
    <div className="container">
        <div className="TopBarContent">
            <div className="LeftWrapContent">
               <ul>
          <li><Link to={option.data.acf.top_bar.left_box.label[0].link}><i className="fas fa-phone"></i> {option.data.acf.top_bar.left_box.label[0].text}</Link></li>
          <li><Link to={option.data.acf.top_bar.left_box.label[1].link}><i className="fas fa-envelope"></i> {option.data.acf.top_bar.left_box.label[1].text}</Link></li>
        </ul>
            </div>
            <div className="RightWrapContent">
                <ul className="TOpNavC">
                    <li>
                   <Link to={option.data.acf.top_bar.right_box.button.link} ><i className="fas fa-shopping-cart"></i><span className="item-text">{option.data.acf.top_bar.right_box.button.text}</span> </Link>
                     </li>
                    </ul>
          <ul className="HeaderSocialTop">
            
          <li><Link to={option.data.acf.top_bar.right_box.social_icon.skype_link} target="_blank"><i className="fab fa-skype"></i></Link></li>
          <li><Link to={option.data.acf.top_bar.right_box.social_icon.facebook_link} target="_blank"><i className="fab fa-facebook-f"></i> </Link></li>
          <li><Link to={option.data.acf.top_bar.right_box.social_icon.twitter_link} target="_blank"><i className="fab fa-twitter"></i></Link></li>
          <li><Link to={option.data.acf.top_bar.right_box.social_icon.instagram_link_} target="_blank"><i className="fab fa-instagram"></i></Link></li>
          <li><Link to={option.data.acf.top_bar.right_box.social_icon.linkedin_link} target="_blank"><i className="fab fa-linkedin-in"></i></Link></li>
        </ul> 
            </div>
        </div>
    </div>
 </div>
) : '' }

 <div className="HeaderFix">
 <div className="container">

 { Object.keys(option).length ? (
    <section id="navigation" className="MainNavigation">
        <div className="LogWrap" onClick={scrollToTop}><Link to="/">
         <img src={option.data.acf.logo} width="135px" height="61" alt="Logo" /> 
           </Link></div>
        <nav> 
       
          <ul className="nav-list">
          
          <li onClick={scrollToTop}><Link to={option.data.acf.header.menu[0].link} className={splitLocation[1] === "" ? "active-new" : ""}>{option.data.acf.header.menu[0].label}</Link></li>
          <li onClick={scrollToTop}><Link to={option.data.acf.header.menu[1].link} className={splitLocation[1] === "about-us" ? "active-new" : ""}>{option.data.acf.header.menu[1].label}</Link></li>
                    {
                     option.data.acf.header.mega_menu.map((g)=>{
                        return (
                                  <li> <Link to="#" className="menu Hosting">{g.heading}<i className="fas fa-chevron-down"></i></Link>
                                    <div className="nav-dropdown ServicesInner">
                                      <div className="ServicesInnerdropdown">
                                        <div className="row">
                                          <div className="col-md-8">
                                            <div className="row">
                                            {
                                          g.menu.map((m)=>{
                                              return (
                                                <div className="col-md-6 MarginBottomSection">
                                                <div className="DropDownCard">
                                                  <div className="Dicon"> <img src={m.icon} width="51" height="46" alt={m.menu_text}/> </div>
                                                  <div className="TxtBox"><Link onClick={scrollToTop} to={m.menu_link}>{m.menu_text} </Link>
                                                    <p>{m.label}</p>
                                                  </div>
                                                </div>
                                              </div>
                                                    )
                                          })
                                        }
                                            </div>
                                          </div>
                                          <div className="col-md-4 RightImgSectionMain">
                                            <div className="RightImgSection"> <Link onClick={scrollToTop} to={g.image_box.link}> <img src={g.image_box.image} width="289" height="194" alt="Contact Us" /> </Link> </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                )
                            })
                      }
            <li><Link onClick={scrollToTop} to={option.data.acf.header.menu[2].link} className={splitLocation[1] === "domain" ? "active-new" : ""}>{option.data.acf.header.menu[2].label}</Link> </li>
            <li><Link onClick={scrollToTop} to={option.data.acf.header.menu[3].link} className={splitLocation[1] === "portfolio" ? "active-new" : ""}>{option.data.acf.header.menu[3].label}</Link> </li>
           
            <li> <Link onClick={scrollToTop} to={option.data.acf.header.menu[4].link} className={splitLocation[1] === "contact-us" ? "active-new" : ""}>{option.data.acf.header.menu[4].label}</Link></li>
          
            </ul>
         
        </nav>
        
        <div className="RightWrapBtn">
            <p className='LoginBtnPOp d-inline'>{ Object.keys(option).length ? ( <><Link to="#" onClick={() => setShow(!show)} className="LogBt"> <i className="fas fa-user"></i>  {option.data.acf.header.button_1.text} </Link></> ) : '' } </p>
            { Object.keys(option).length ? ( <><Link to={option.data.acf.header.button_2.link} className="LogBt Log"><i className="fas fa-user-plus"></i> {option.data.acf.header.button_2.text}</Link></> ) : '' }
           <div className={`LoginPopUp ${show ? "show" : ""}`}>
            <form method="post" action="https://logicdaddy.com/billing/dologin.php" className="login-form user-login-dropdown-form" data-form="validate">
              <div className="form-group username">
                <input type="email" name="username" placeholder="Your Email" required className="form-control" />
                <i className="fas fa-at"></i> </div>
              <div className="form-group password">
                <input type="password" name="password" placeholder="Password" required className="form-control" />
                <i className="fas fa-lock"></i> </div>
              <button data-toggle="tooltip" data-placement="left" title="" className="user-login-dropdown-form-button" type="submit" data-original-title="login"><i className="fas fa-angle-right"></i></button>
            </form>
            </div> 
        </div>
        
        </section>
        ) : '' }
    </div>
</div>
</div>
<div className={`mobileheader ${sticky.isSticky ? 'stickyw' : ''}`} ref={headerRef}>
  <div className="container">
    <div className="MainWrap">
      <div className="logo"> <Link to="/" className="d-block"> { Object.keys(option).length ? ( <img src={option.data.acf.logo_white} alt='Logo'/> ) : '' } </Link> </div>
      <div className="BtnSection"><span className="SideMenuBarBtn" onClick={openNavM}>&#9776;</span></div>
    </div>
  </div>
  <div id="MobileSideNav" className="sidenav"> <span className="closebtn" onClick={closeNavM}>&times;</span>
    <div className="SideBarAdd">
      <div className="Nav">
      
        <ul className="nav-list">
        { Object.keys(option).length ? (<>
            <li onClick={scrollToTop}> <Link to="/" className={splitLocation[1] === "" ? "active-new" : ""} onClick={closeNavM}>{option.data.acf.header.menu[0].label}</Link></li>
            <li onClick={scrollToTop}><Link to={option.data.acf.header.menu[1].link} className={splitLocation[1] === "about-us" ? "active-new" : "menu"} onClick={closeNavM}>{option.data.acf.header.menu[1].label}</Link></li>
           {
                     option.data.acf.header.mega_menu.map((g)=>{
                        return (
                                  <li> <Link to="#" className="menu Hosting">{g.heading}<i className="fas fa-chevron-down"></i></Link>
                                    <ul className="nav-dropdown HostingDrop ServicesInner active-menu">
                                      <div className="ServicesInnerdropdown">
                                        <div className="row">
                                          <div className="col-md-8">
                                            <div className="row">
                                            {
                                          g.menu.map((m)=>{
                                              return (
                                                <div className="col-md-6 MarginBottomSection">
                                                <div className="DropDownCard">
                                                  <div className="Dicon"> <img src={m.icon} width="51" height="46" alt={m.menu_text}/> </div>
                                                  <div className="TxtBox" onClick={closeNavM}><Link onClick={scrollToTop} to={m.menu_link}>{m.menu_text} </Link>
                                                    <p>{m.label}</p>
                                                  </div>
                                                </div>
                                              </div>
                                                    )
                                          })
                                        }
                                            </div>
                                          </div>
                                          
                                        </div>
                                      </div>
                                    </ul>
                                  </li>
                                )
                            })
                      }
                   </> ) : '' }
            { Object.keys(option).length ? (<>
            <li onClick={scrollToTop}> <Link to={option.data.acf.header.menu[2].link} className={splitLocation[1] === "domain" ? "active-new" : "menu"} onClick={closeNavM}>{option.data.acf.header.menu[2].label}</Link> </li>
        
            <li onClick={scrollToTop}> <Link to={option.data.acf.header.menu[3].link} className={splitLocation[1] === "portfolio" ? "active-new" : "menu"} onClick={closeNavM}>{option.data.acf.header.menu[3].label}</Link></li>
          
            <li onClick={scrollToTop}> <Link to={option.data.acf.header.menu[4].link} className={splitLocation[1] === "contact-us" ? "active-new" : "menu"} onClick={closeNavM}>{option.data.acf.header.menu[4].label}</Link></li>
            </>
            ) : '' }
            { Object.keys(option).length ? (<>
            <li className="MobileLogin"> <Link to={option.data.acf.header.button_1.link} onClick={closeNavM}><i className="fas fa-user"></i> {option.data.acf.header.button_1.text}</Link></li>
            <li className="MobileLogin"><Link to={option.data.acf.header.button_2.link} onClick={closeNavM}><i className="fas fa-user-plus"></i> {option.data.acf.header.button_2.text}</Link></li>
            </> ) : '' }
            </ul>
          
      </div>
    </div>
  </div>
</div>
</div>

    </>
    )     
}

export default Header;