import React,{useState} from 'react'
import{ Link, useNavigate } from "react-router-dom";

function Header() {

  
  return (
    <div>
      <header className="site-header header-style-3">
            <div className="pbmit-header-overlay">
              <div className="pbmit-main-header-area">
                <div className="container">
                  <div className="pbmit-header-content d-flex align-items-center justify-content-between">
                    <div className="pbmit-logo-area">
                      <div className="site-branding">
                        <h1 className="site-title">
                          <a href="index.html">
                            <img className="logo-img" src="images/logo-white.svg" alt="Yoge" />
                          </a>
                        </h1>
                      </div>
                    </div>
                    <div className="site-navigation">
                      <nav className="main-menu navbar-expand-xl navbar-light">
                        <div className="navbar-header">
                          {/* Toggle Button */}
                          <button className="navbar-toggler" type="button">
                            <i className="pbmit-base-icon-menu-1" />
                          </button>
                        </div>
                        <div className="pbmit-mobile-menu-bg" />
                        <div className="collapse navbar-collapse clearfix show" id="pbmit-menu">
                          <div className="pbmit-menu-wrap">
                            <span className="closepanel">
                              <svg className="qodef-svg--close qodef-m" xmlns="http://www.w3.org/2000/svg" width="20.163" height="20.163" viewBox="0 0 26.163 26.163">
                                <rect width={36} height={1} transform="translate(0.707) rotate(45)" />
                                <rect width={36} height={1} transform="translate(0 25.456) rotate(-45)" />
                              </svg>
                            </span>
                            <ul className="navigation clearfix">
                              <li className="dropdown active">
                                <a href="index.html">Home</a>
                                
                              </li>
                              <li className="dropdown">
                                <a href="#">Pages</a>
                               
                              </li>
                              <li className="dropdown">
                                <a href="#">Services</a>
                                
                              </li>
                              <li className="dropdown">
                                <a href="#">Events</a>
                               
                              </li>
                              <li className="dropdown">
                                <a href="#">Blog</a>
                               
                              </li>
                        
                              <li><Link to="/contactus" href="contact-us.html">Contact Us</Link></li>
                             
                            </ul>
                          </div>
                        </div>
                      </nav>
                    </div>
                    <div className="pbmit-right-box d-flex align-items-center">
                      <div className="pbmit-header-search-btn">
                        <a href="#" title="Search">
                          <i className="pbmit-base-icon-search-1" />
                        </a>
                      </div>
                      <div className="pbmit-button-box-second">
                        <a className="pbmit-btn" href="contact-us.html">
                          <span className="pbmit-btn-content-wrapper">
                            <span className="pbmit-button-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="22.76" height="22.76" viewBox="0 0 22.76 22.76">
                                <title>black-arrow</title>
                                <path d="M22.34,1A14.67,14.67,0,0,1,12,5.3,14.6,14.6,0,0,1,6.08,4.06,14.68,14.68,0,0,1,1.59,1" transform="translate(-0.29 -0.29)" fill="none" stroke="#000" strokeWidth={2} />
                                <path d="M22.34,1a14.67,14.67,0,0,0,0,20.75" transform="translate(-0.29 -0.29)" fill="none" stroke="#000" strokeWidth={2} /><path d="M22.34,1,1,22.34" transform="translate(-0.29 -0.29)" fill="none" stroke="#000" strokeWidth={2} />
                              </svg>
                            </span>
                            <span className="pbmit-button-text">Make An Appointment</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pbmit-slider-social">
              <ul className="pbmit-social-links">
                <li className="pbmit-social-li pbmit-social-facebook">
                  <a title="Facebook" href="#" target="_blank">
                    <span><i className="pbmit-base-icon-facebook-f" /></span>
                  </a>
                </li>
                <li className="pbmit-social-li pbmit-social-twitter">
                  <a title="Twitter" href="#" target="_blank">
                    <span><i className="pbmit-base-icon-twitter-2" /></span>
                  </a>
                </li>
                <li className="pbmit-social-li pbmit-social-linkedin">
                  <a title="LinkedIn" href="#" target="_blank">
                    <span><i className="pbmit-base-icon-linkedin-in" /></span>
                  </a>
                </li>
                <li className="pbmit-social-li pbmit-social-instagram">
                  <a title="Instagram" href="#" target="_blank">
                    <span><i className="pbmit-base-icon-instagram" /></span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="pbmit-slider-area">
              {/* START Slider Demo 03 REVOLUTION SLIDER 6.6.17 */}<p className="rs-p-wp-fix" />
              <rs-module-wrap id="rev_slider_1_3_wrapper" data-alias="slider-demo-03" data-source="gallery" style={{ visibility: 'hidden', background: 'transparent', padding: 0, margin: '0px auto', marginTop: 0, marginBottom: 0 }}>
                <rs-module id="rev_slider_1_3" data-version="6.6.17">
                  <rs-slides style={{ overflow: 'hidden', position: 'absolute' }}>
                    <rs-slide style={{ position: 'absolute' }} data-key="rs-1" data-title="Slide" data-in="o:0;" data-out="a:false;">
                      <img src="revolution/images/transparent.png" alt="Slide" className="rev-slidebg tp-rs-img" data-bg="c:#448c74;" data-no-retina />
                      {/*
								*/}<rs-layer id="slider-1-slide-1-layer-0" data-type="image" data-rsp_ch="on" data-xy="xo:30px,30px,30px,29px;yo:708px,570px,433px,327px;" data-text="w:normal;s:20,14,10,6;l:0,17,12,7;" data-dim="w:197px,150px,120px,74px;h:79px,60px,48px,29px;" data-vbility="t,t,t,f" data-frame_0="x:-100%;" data-frame_0_mask="u:t;" data-frame_1="st:3530;sp:1000;sR:3530;" data-frame_1_mask="u:t;" data-frame_999="o:0;st:w;sR:4470;" style={{ zIndex: 12 }}><img src="revolution/images/icon-img.png" alt="" className="tp-rs-img" width={197} height={79} data-no-retina />
                      </rs-layer>{/*

								*/}<rs-layer id="slider-1-slide-1-layer-1" data-type="text" data-rsp_ch="on" data-xy="xo:30px;y:m;yo:-206px,-144px,-74px,-27px;" data-text="w:normal;s:12,12,12,10;l:24,24,20,17;ls:1px,0px,0px,0px;fw:500;" data-padding="t:2,1,0,0;r:18,15,0,0;b:2,1,0,0;l:18,15,0,0;" data-border="bos:solid,solid,none,none;boc:#ffffff;bow:1px,1px,1px,1px;bor:20px,20px,20px,20px;" data-frame_0="sX:2;sY:2;" data-frame_0_mask="u:t;" data-frame_1="e:power2.out;st:600;sp:1200;sR:600;" data-frame_1_mask="u:t;" data-frame_999="o:0;st:w;sR:7200;" style={{ zIndex: 8, fontFamily: '"Sora"', textTransform: 'uppercase' }}>Practice positive energy
                      </rs-layer>{/*

								*/}<rs-layer id="slider-1-slide-1-layer-2" data-type="text" data-rsp_ch="on" data-xy="xo:30px;y:m;yo:-84px,-58px,-7px,24px;" data-text="w:normal;s:80,56,42,28;l:80,56,42,28;fw:500;" data-frame_0="x:-100%;" data-frame_0_mask="u:t;" data-frame_1="y:-7px,-4px,-3px,-1px;st:1380;sp:1000;sR:1380;" data-frame_1_mask="u:t;" data-frame_999="o:0;st:8900;sR:6520;" style={{ zIndex: 9, fontFamily: '"Sora"' }}>Relax your <span>mind<br /> and body.</span>
                      </rs-layer>{/*

								*/}<rs-layer id="slider-1-slide-1-layer-3" data-type="image" data-rsp_ch="on" data-xy="xo:690px,427px,326px,199px;y:m;yo:30px,40px,30px,40px;" data-text="w:normal;s:20,14,10,6;l:0,17,12,7;" data-dim="w:920px,600px,455px,280px;h:777px,507px,385px,237px;" data-frame_0="sX:0.9;sY:0.9;" data-frame_1="e:power2.inOut;st:190;sp:1000;" data-frame_999="o:0;st:w;sR:7810;" data-tloop="u:true;" data-loop_0="y:-10;" data-loop_999="y:10;sp:6000;e:sine.inOut;yym:t;" style={{ zIndex: 7 }}><img src="revolution/images/demo3-slider-1.png" alt="" className="tp-rs-img" width={920} height={777} data-no-retina />
                      </rs-layer>{/*

								*/}<rs-layer id="slider-1-slide-1-layer-5" data-type="text" data-rsp_ch="on" data-xy="xo:30px,30px,34px,40px;y:m;yo:57px,39px,29px,17px;" data-text="w:normal;s:18,13,9,5;l:30,22,16,9;" data-dim="w:675px,473px,359px,221px;" data-vbility="t,t,f,f" data-padding="t:20,14,11,7;" data-border="bos:solid;boc:rgba(255, 255, 255, 0.5);bow:1px,0,0,0;" data-frame_0="sX:0.9;sY:0.9;" data-frame_1="e:power2.inOut;st:1950;sp:1000;sR:1950;" data-frame_999="o:0;st:w;sR:6050;" style={{ zIndex: 10, fontFamily: '"Roboto"' }}>You cannot always control what goes on outside, but you can always control <br />what goes on inside! Happy Yoga Day.
                      </rs-layer>{/*

								*/}<a id="slider-1-slide-1-layer-6" className="rs-layer pbmit-rev-btn rev-btn" href="contact-us.html" target="_self" data-type="button" data-color="#000000" data-rsp_ch="on" data-xy="xo:30px;y:m;yo:159px,121px,75px,94px;" data-text="w:normal;s:12;l:36,36,36,34;fw:500;" data-dim="minh:0px,none,none,none;" data-padding="t:12,12,10,6;r:35,35,30,25;b:12,12,10,6;l:35,35,30,25;" data-border="bor:30px,30px,30px,30px;" data-frame_1="e:power4.inOut;st:2490;sp:1500;sR:2490;" data-frame_999="o:0;st:w;sR:5010;" data-frame_hover="c:#fff;bgc:#000;bor:30px,30px,30px,30px;sp:600ms;" style={{ zIndex: 11, backgroundColor: 'rgba(255,255,255,1)', fontFamily: '"Sora"', textTransform: 'uppercase' }}>Contact Us <span className="pbmit-button-icon-wrapper"><span className="pbmit-button-icon"><i className="pbmit-base-icon-black-arrow-1" /></span></span>
                      </a>{/*

								*/}<rs-layer id="slider-1-slide-1-layer-7" data-type="text" data-rsp_ch="on" data-xy="xo:261px,198px,166px,113px;yo:729px,585px,444px,334px;" data-text="w:normal;s:17,15,12,7;l:24,20,16,9;fw:500;" data-vbility="t,t,t,f" data-frame_0="sX:2;sY:2;" data-frame_0_mask="u:t;" data-frame_1="e:power2.out;st:4190;sp:1000;sR:4190;" data-frame_1_mask="u:t;" data-frame_999="o:0;st:w;sR:3810;" style={{ zIndex: 13, fontFamily: '"Sora"' }}>More than <span className="pbmit-color-secondarycolor">9.5k members</span> are <br />connected with us
                      </rs-layer>{/*

								*/}<rs-layer id="slider-1-slide-1-layer-8" data-type="image" data-rsp_ch="on" data-text="w:normal;s:20,14,10,6;l:0,17,12,7;" data-dim="w:['100%','100%','100%','100%'];h:['100%','100%','100%','100%'];" data-basealign="slide" data-frame_999="o:0;st:w;sR:8700;" style={{ zIndex: 5 }}><img src="revolution/images/slider-pattern-1536x761.png" alt="" className="tp-rs-img" width={1536} height={761} data-c="cover-proportional" data-no-retina />
                      </rs-layer>{/*
	*/}						</rs-slide>
                    <rs-slide style={{ position: 'absolute' }} data-key="rs-2" data-title="Slide" data-in="o:0;" data-out="a:false;">
                      <img src="revolution/images/transparent.png" alt="Slide" className="rev-slidebg tp-rs-img" data-bg="c:#448c74;" data-no-retina />
                      {/*
								*/}<rs-layer id="slider-1-slide-2-layer-0" data-type="image" data-rsp_ch="on" data-xy="xo:30px,22px,16px,9px;yo:708px,570px,418px,327px;" data-text="w:normal;s:20,14,10,6;l:0,17,12,7;" data-dim="w:197px,150px,120px,74px;h:79px,60px,48px,29px;" data-vbility="t,t,t,f" data-frame_0="x:-100%;" data-frame_0_mask="u:t;" data-frame_1="st:3530;sp:1000;sR:3530;" data-frame_1_mask="u:t;" data-frame_999="o:0;st:w;sR:4470;" style={{ zIndex: 12 }}><img src="revolution/images/icon-img.png" alt="" className="tp-rs-img" width={197} height={79} data-no-retina />
                      </rs-layer>{/*

								*/}<rs-layer id="slider-1-slide-2-layer-1" data-type="text" data-rsp_ch="on" data-xy="xo:30px,22px,16px,9px;y:m;yo:-206px,-144px,-89px,-27px;" data-text="w:normal;s:12,12,9,8;l:24,24,18,15;ls:1px,0px,0px,0px;fw:500;" data-padding="t:2,1,1,1;r:18,15,11,7;b:2,1,1,1;l:18,15,11,7;" data-border="bos:solid;boc:#ffffff;bow:1px,1px,1px,1px;bor:20px,20px,20px,20px;" data-frame_0="sX:2;sY:2;" data-frame_0_mask="u:t;" data-frame_1="e:power2.out;st:600;sp:1200;sR:600;" data-frame_1_mask="u:t;" data-frame_999="o:0;st:w;sR:7200;" style={{ zIndex: 8, fontFamily: '"Sora"', textTransform: 'uppercase' }}>Practice positive energy
                      </rs-layer>{/*

								*/}<rs-layer id="slider-1-slide-2-layer-2" data-type="text" data-rsp_ch="on" data-xy="xo:30px,22px,16px,9px;y:m;yo:-84px,-58px,-22px,24px;" data-text="w:normal;s:80,56,42,28;l:80,56,42,28;fw:500;" data-frame_0="x:-100%;" data-frame_0_mask="u:t;" data-frame_1="y:-7px,-4px,-3px,-1px;st:1380;sp:1000;sR:1380;" data-frame_1_mask="u:t;" data-frame_999="o:0;st:8900;sR:6520;" style={{ zIndex: 9, fontFamily: '"Sora"' }}>Relax your <span>mind<br /> and body.</span>
                      </rs-layer>{/*

								*/}<rs-layer id="slider-1-slide-2-layer-3" data-type="image" data-rsp_ch="on" data-xy="x:l,l,r,r;xo:690px,427px,0,0;y:m;yo:0,30px,30px,40px;" data-text="w:normal;s:20,14,10,6;l:0,17,12,7;" data-dim="w:920px,600px,400px,246px;h:626px,408px,272px,167px;" data-blendmode="luminosity" data-frame_0="sX:0.9;sY:0.9;" data-frame_1="e:power2.inOut;st:190;sp:1000;" data-frame_999="o:0;st:w;sR:7810;" data-tloop="u:true;" data-loop_0="y:-10;" data-loop_999="y:10;sp:6000;e:sine.inOut;yym:t;" style={{ zIndex: 7 }}><img src="revolution/images/demo3-slider-2.png" alt="" className="tp-rs-img" width={956} height={650} data-no-retina />
                      </rs-layer>{/*

								*/}<rs-layer id="slider-1-slide-2-layer-5" data-type="text" data-rsp_ch="on" data-xy="xo:30px,22px,16px,9px;y:m;yo:57px,39px,29px,17px;" data-text="w:normal;s:18,13,9,5;l:30,22,16,9;" data-dim="w:675px,473px,359px,221px;" data-vbility="t,t,f,f" data-padding="t:20,14,11,7;" data-border="bos:solid;boc:rgba(255, 255, 255, 0.5);bow:1px,0,0,0;" data-frame_0="sX:0.9;sY:0.9;" data-frame_1="e:power2.inOut;st:1950;sp:1000;sR:1950;" data-frame_999="o:0;st:w;sR:6050;" style={{ zIndex: 10, fontFamily: '"Roboto"' }}>You cannot always control what goes on outside, but you can always control <br />what goes on inside! Happy Yoga Day.
                      </rs-layer>{/*

								*/}<a id="slider-1-slide-2-layer-6" className="rs-layer pbmit-rev-btn rev-btn" href="contact-us.html" target="_self" data-type="button" data-color="#000000" data-rsp_ch="on" data-xy="xo:30px,22px,16px,9px;y:m;yo:159px,121px,60px,94px;" data-text="w:normal;s:12;l:36,36,36,34;fw:500;" data-dim="minh:0px,none,none,none;" data-padding="t:12,12,10,6;r:35,35,30,25;b:12,12,10,6;l:35,35,30,25;" data-border="bor:30px,30px,30px,30px;" data-frame_1="e:power4.inOut;st:2490;sp:1500;sR:2490;" data-frame_999="o:0;st:w;sR:5010;" data-frame_hover="c:#fff;bgc:#000;bor:30px,30px,30px,30px;sp:600ms;" style={{ zIndex: 11, backgroundColor: 'rgba(255,255,255,1)', fontFamily: '"Sora"', textTransform: 'uppercase' }}>Contact Us <span className="pbmit-button-icon-wrapper"><span className="pbmit-button-icon"><i className="pbmit-base-icon-black-arrow-1" /></span></span>
                      </a>{/*

								*/}<rs-layer id="slider-1-slide-2-layer-7" data-type="text" data-rsp_ch="on" data-xy="xo:261px,190px,152px,93px;yo:729px,585px,429px,334px;" data-text="w:normal;s:17,15,12,7;l:24,20,16,9;fw:500;" data-vbility="t,t,t,f" data-frame_0="sX:2;sY:2;" data-frame_0_mask="u:t;" data-frame_1="e:power2.out;st:4190;sp:1000;sR:4190;" data-frame_1_mask="u:t;" data-frame_999="o:0;st:w;sR:3810;" style={{ zIndex: 13, fontFamily: '"Sora"' }}>More than <span className="pbmit-color-secondarycolor">9.5k members</span> are <br />connected with us
                      </rs-layer>{/*

								*/}<rs-layer id="slider-1-slide-2-layer-8" data-type="image" data-rsp_ch="on" data-text="w:normal;s:20,14,10,6;l:0,17,12,7;" data-dim="w:['100%','100%','100%','100%'];h:['100%','100%','100%','100%'];" data-basealign="slide" data-frame_999="o:0;st:w;sR:8700;" style={{ zIndex: 6 }}><img src="revolution/images/slider-pattern.png" alt="" className="tp-rs-img" width={1900} height={941} data-c="cover-proportional" data-no-retina />
                      </rs-layer>{/*
	*/}						</rs-slide>
                    <rs-slide style={{ position: 'absolute' }} data-key="rs-3" data-title="Slide" data-in="o:0;" data-out="a:false;">
                      <img src="revolution/images/transparent.png" alt="Slide" className="rev-slidebg tp-rs-img" data-bg="c:#448c74;" data-no-retina />
                      {/*
								*/}<rs-layer id="slider-1-slide-3-layer-0" data-type="image" data-rsp_ch="on" data-xy="xo:30px,22px,16px,9px;yo:708px,570px,418px,327px;" data-text="w:normal;s:20,14,10,6;l:0,17,12,7;" data-dim="w:197px,150px,120px,74px;h:79px,60px,48px,29px;" data-vbility="t,t,t,f" data-frame_0="x:-100%;" data-frame_0_mask="u:t;" data-frame_1="st:3530;sp:1000;sR:3530;" data-frame_1_mask="u:t;" data-frame_999="o:0;st:w;sR:4470;" style={{ zIndex: 12 }}><img src="revolution/images/icon-img.png" alt="" className="tp-rs-img" width={197} height={79} data-no-retina />
                      </rs-layer>{/*

								*/}<rs-layer id="slider-1-slide-3-layer-1" data-type="text" data-rsp_ch="on" data-xy="xo:30px,22px,16px,9px;y:m;yo:-206px,-144px,-89px,-54px;" data-text="w:normal;s:12,12,9,8;l:24,24,18,15;ls:1px,0px,0px,0px;fw:500;" data-padding="t:2,1,1,1;r:18,15,11,7;b:2,1,1,1;l:18,15,11,7;" data-border="bos:solid;boc:#ffffff;bow:1px,1px,1px,1px;bor:20px,20px,20px,20px;" data-frame_0="sX:2;sY:2;" data-frame_0_mask="u:t;" data-frame_1="e:power2.out;st:820;sp:1200;sR:820;" data-frame_1_mask="u:t;" data-frame_999="o:0;st:w;sR:6980;" style={{ zIndex: 8, fontFamily: '"Sora"', textTransform: 'uppercase' }}>Practice positive energy
                      </rs-layer>{/*

								*/}<rs-layer id="slider-1-slide-3-layer-2" data-type="text" data-rsp_ch="on" data-xy="xo:30px,22px,16px,9px;y:m;yo:-84px,-58px,-22px,-16px;" data-text="w:normal;s:80,56,42,28;l:80,56,42,28;fw:500;" data-frame_0="x:-100%;" data-frame_0_mask="u:t;" data-frame_1="y:-7px,-4px,-3px,-1px;st:1380;sp:1000;sR:1380;" data-frame_1_mask="u:t;" data-frame_999="o:0;st:8900;sR:6520;" style={{ zIndex: 9, fontFamily: '"Sora"' }}>Relax your <span>mind<br /> and body.</span>
                      </rs-layer>{/*

								*/}<rs-layer id="slider-1-slide-3-layer-3" data-type="image" data-rsp_ch="on" data-xy="xo:690px,427px,324px,199px;yo:92px,154px,117px,122px;" data-text="w:normal;s:20,14,10,6;l:0,17,12,7;" data-dim="w:920px,600px,455px,280px;h:777px,507px,385px,237px;" data-frame_0="sX:0.9;sY:0.9;" data-frame_1="e:power2.inOut;st:190;sp:1000;" data-frame_999="o:0;st:w;sR:7810;" data-tloop="u:true;" data-loop_0="y:-10;" data-loop_999="y:10;sp:6000;e:sine.inOut;yym:t;" style={{ zIndex: 7 }}><img src="revolution/images/demo3-slider-3.png" alt="" className="tp-rs-img" width={920} height={777} data-no-retina />
                      </rs-layer>{/*

								*/}<rs-layer id="slider-1-slide-3-layer-5" data-type="text" data-rsp_ch="on" data-xy="xo:30px,22px,16px,9px;y:m;yo:57px,39px,29px,17px;" data-text="w:normal;s:18,13,9,5;l:30,22,16,9;" data-dim="w:675px,473px,359px,221px;" data-vbility="t,t,f,f" data-padding="t:20,14,11,7;" data-border="bos:solid;boc:rgba(255, 255, 255, 0.5);bow:1px,0,0,0;" data-frame_0="sX:0.9;sY:0.9;" data-frame_1="e:power2.inOut;st:1950;sp:1000;sR:1950;" data-frame_999="o:0;st:w;sR:6050;" style={{ zIndex: 10, fontFamily: '"Roboto"' }}>You cannot always control what goes on outside, but you can always control <br />what goes on inside! Happy Yoga Day.
                      </rs-layer>{/*

								*/}<a id="slider-1-slide-3-layer-6" className="rs-layer pbmit-rev-btn rev-btn" href="contact-us.html" target="_self" data-type="button" data-color="#000000" data-rsp_ch="on" data-xy="xo:30px,22px,16px,9px;y:m;yo:159px,121px,60px,54px;" data-text="w:normal;s:12;l:36,36,36,34;fw:500;" data-dim="minh:0px,none,none,none;" data-padding="t:12,12,10,6;r:35,35,30,25;b:12,12,10,6;l:35,35,30,25;" data-border="bor:30px,30px,30px,30px;" data-frame_1="e:power4.inOut;st:2490;sp:1500;sR:2490;" data-frame_999="o:0;st:w;sR:5010;" data-frame_hover="c:#fff;bgc:#000;bor:30px,30px,30px,30px;sp:600ms;" style={{ zIndex: 11, backgroundColor: 'rgba(255,255,255,1)', fontFamily: '"Sora"', textTransform: 'uppercase' }}>Contact Us <span className="pbmit-button-icon-wrapper"><span className="pbmit-button-icon"><i className="pbmit-base-icon-black-arrow-1" /></span></span>
                      </a>{/*

								*/}<rs-layer id="slider-1-slide-3-layer-7" data-type="text" data-rsp_ch="on" data-xy="xo:261px,190px,152px,93px;yo:729px,585px,429px,334px;" data-text="w:normal;s:17,15,12,7;l:24,20,16,9;fw:500;" data-vbility="t,t,t,f" data-frame_0="sX:2;sY:2;" data-frame_0_mask="u:t;" data-frame_1="e:power2.out;st:4190;sp:1000;sR:4190;" data-frame_1_mask="u:t;" data-frame_999="o:0;st:w;sR:3810;" style={{ zIndex: 13, fontFamily: '"Sora"' }}>More than <span className="pbmit-color-secondarycolor">9.5k members</span> are <br />connected with us
                      </rs-layer>{/*

								*/}<rs-layer id="slider-1-slide-3-layer-8" data-type="image" data-rsp_ch="on" data-text="w:normal;s:20,14,10,6;l:0,17,12,7;" data-dim="w:['100%','100%','100%','100%'];h:['100%','100%','100%','100%'];" data-basealign="slide" data-frame_999="o:0;st:w;sR:8700;" style={{ zIndex: 6 }}><img src="revolution/images/slider-pattern.png" alt="" className="tp-rs-img" width={1900} height={941} data-c="cover-proportional" data-no-retina />
                      </rs-layer>{/*
	*/}						</rs-slide>
                  </rs-slides>
                </rs-module>
              </rs-module-wrap>
              {/* END REVOLUTION SLIDER */}
            </div>
          </header>
    </div>
  )
}


export default Header
