import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Servise() {
  return (
    <div>
              <div className="page-wrapper">
        {/* Header Main Area */}
        <header className="site-header header-style-1">
          <div className="pbmit-header-overlay">
            <div className="container">
              <div className="pbmit-header-content d-flex justify-content-between align-items-center">
                <div className="site-branding">
                  <h1 className="site-title">
                    <a href="index.html">
                      <img className="logo-img" src="images/logo-white.svg" alt="Yoge" />
                    </a>
                  </h1>
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
                          <li>
                          <Link to="/">Home</Link>
                          </li>
                          <li><Link to="/about">ABOUT Us</Link>

                          </li>
                          <li>
                            <a href="#">Services</a>
                          </li>
                          <li><Link to="/contactus">Contact Us</Link></li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
                <div className="pbmit-right-box d-flex align-items-center">
                  <div className="pbmit-button-box">
                    <div className="pbmit-header-button">
                      <a href="tel:+%201(212)%20255-511">
                        <span className="pbmit-header-button-text-1">+1(212)255-511</span>			
                        <span className="pbmit-header-button-text-2">+ 1(212) 255-511</span>		
                      </a>
                    </div>
                  </div>
                  <div className="pbmit-header-search-btn">
                    <a href="#" title="Search">
                      <i className="pbmit-base-icon-search-1" />
                    </a>
                  </div>
                  <div className="pbmit-button-box-second">
                    <a className="pbmit-btn pbmit-btn-global" href="contact-us.html">
                      <span className="pbmit-btn-content-wrapper">
                        <span className="pbmit-button-text">Make An Appointment</span>
                        <span className="pbmit-button-icon">
                          <i className="pbmit-base-icon-black-arrow-1" />
                        </span>
                      </span>
                    </a>
                    <div className="pbmit-sticky-corner pbmit-top-left-corner">
                      <svg width={30} height={30} viewBox="0 0 30 30" fill xmlns="http://www.w3.org/2000/svg">
                        <path d="M30 30V0C30 16 16 30 0 30H30Z" fill="red" />
                      </svg>
                    </div>
                    <div className="pbmit-sticky-corner pbmit-bottom-right-corner">
                      <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30 30V0C30 16 16 30 0 30H30Z" fill="red" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Header Main Area End Here */}
        {/* Title Bar */}
        <div className="pbmit-title-bar-wrapper">
          <div className="container">
            <div className="pbmit-title-bar-content">
              <div className="pbmit-title-bar-content-inner">
                <div className="pbmit-tbar">
                  <div className="pbmit-tbar-inner container">
                    <h3 className="pbmit-tbar-subtitle"> Service</h3>
                    <h1 className="pbmit-tbar-title"> Ardha Chakrasana</h1>
                  </div>
                </div>
                <div className="pbmit-breadcrumb">
                  <div className="pbmit-breadcrumb-inner">
                    <span>
                      <a title href="#" className="home"><span>Yoge</span></a>
                    </span>
                    <span className="sep">
                      <i className="pbmit-base-icon-angle-double-right" />
                    </span>
                    <span>
                      <a title href="#" className="home"><span>Services</span></a>
                    </span>
                    <span className="sep">
                      <i className="pbmit-base-icon-angle-double-right" />
                    </span>
                    <span>
                      <a title href="#" className="home"><span>DJ Yoga Trainer</span></a>
                    </span>
                    <span className="sep">
                      <i className="pbmit-base-icon-angle-double-right" />
                    </span>
                    <span><span className="post-root post post-post current-item"> Ardha Chakrasana</span></span>
                  </div>
                </div>
              </div>
            </div> 
          </div> 
        </div>
        {/* Title Bar End*/}
        {/* Page Content */}
        <div className="page-content">
          {/* Service Details */} 
          <section className="site_content service_details">
            <div className="container">
              <div className="row">
                <div className="col-lg-9 service-right-col">
                  <div className="pbmit-service-feature-image">
                    <img src="images/services/service-detail-01.jpg" className="img-fluid w-100" alt="" />
                  </div>
                  <div className="pbmit-entry-content">
                    <div className="pbmit-service_content">
                      <div className="pbmit-heading animation-style2">
                        <h3 className="pbmit-title mb-3">Our yoga is the fountain of youth</h3>
                      </div>
                      <p className="pbmit-firstletter">
                        We It’s time to roll out your yoga mat and discovers combinations of physically and mentally exercises be While most people associate yoga with stretching and flexibility, some <u><a className="pbmit-global-color" href="#">considered strength-building</a></u>  types of yoga classes can also be. It just depends on the class level, approach, and teacher. This makes yoga asana a multimodal form of exercise
                      </p>
                      <p>The scientific research into yoga’s benefits is still somewhat preliminary, but much of the evidence so far supports what practitioners seem to have known for millennia: Yoga is incredibly beneficial to our overall well-being. <u><a className="pbmit-global-color" href="#">Flexibility is an important</a></u> component of physical health. Yoga offers many styles to choose from, varying in intensity from high to moderate to mild. Even the lowest and intensity styles have been found to increase flexibilitySo, it makes sense that the second most cited reason people selected as to why they do yoga was to relieve stress.</p>
                      <div className="pbmit-heading pt-3 animation-style2">
                        <h3 className="pbmit-title mb-3">Different types of yoga method</h3>
                      </div>
                      <p>In some cases, a financial consultant may have more financial plan experience than the typical financial advisor. Financial consultants usually provide investment services as well, though. our clients are often surprised by the possibilities we present to them; by thinking outside the box we present exciting new ventures:</p>
                    </div>
                    <div className="ihbox_style_box">
                      <div className="row">
                        <div className="col-md-6 col-xl-4">
                          <div className="pbmit-ihbox-style-10">
                            <div className="pbmit-ihbox-box">
                              <div className="pbmit-content-wrapper">
                                <div className="pbmit-heading-desc">yoga trainer</div>
                                <h2 className="pbmit-element-title">5+ years <br />Experience</h2>
                              </div>
                              <div className="pbmit-ihbox-icon">
                                <div className="pbmit-ihbox-icon-wrapper">
                                  <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                    <i className="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose-18" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="pbmit-ihbox-box-number">01</div>
                          </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                          <div className="pbmit-ihbox-style-10">
                            <div className="pbmit-ihbox-box">
                              <div className="pbmit-content-wrapper">
                                <div className="pbmit-heading-desc">yoga trainer</div>
                                <h2 className="pbmit-element-title">Modern yoga <br /> Trainer</h2>
                              </div>
                              <div className="pbmit-ihbox-icon">
                                <div className="pbmit-ihbox-icon-wrapper">
                                  <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                    <i className="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="pbmit-ihbox-box-number">02</div>
                          </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                          <div className="pbmit-ihbox-style-10">
                            <div className="pbmit-ihbox-box">
                              <div className="pbmit-content-wrapper">
                                <div className="pbmit-heading-desc">yoga trainer</div>
                                <h2 className="pbmit-element-title">World class <br /> gurus</h2>
                              </div>
                              <div className="pbmit-ihbox-icon">
                                <div className="pbmit-ihbox-icon-wrapper">
                                  <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                    <i className="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose-8" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="pbmit-ihbox-box-number">03</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="list-group_box">
                      <div className="row">
                        <div className="col-md-12 col-xl-6">
                          <div className="pbmit-animation-style7">
                            <img src="images/services/service-detail-02.jpg" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="col-md-12 col-xl-6">
                          <div className="service-list-group">
                            <div className="pbmit-heading animation-style2">
                              <h3 className="pbmit-title mb-3">Benefits of yoga session</h3>
                            </div>
                            <p>When your immunity is compromised, to you’re more susceptible to illness. However, as discussed earlier, yoga is considered a best scientifically backed alternative treatment for stress.</p>
                            <ul className="list-group list-group-borderless">
                              <li className="list-group-item">
                                <span className="pbmit-icon-list-icon">
                                  <i aria-hidden="true" className="pbmit-base-icon-check" />
                                </span>
                                <span className="pbmit-icon-list-text">Yoga improves strength, balance and flexibility.</span>
                              </li>
                              <li className="list-group-item">
                                <span className="pbmit-icon-list-icon">
                                  <i aria-hidden="true" className="pbmit-base-icon-check" />
                                </span>
                                <span className="pbmit-icon-list-text">Yoga connects you with a supportive community.</span>
                              </li>
                              <li className="list-group-item">
                                <span className="pbmit-icon-list-icon">
                                  <i aria-hidden="true" className="pbmit-base-icon-check" />
                                </span>
                                <span className="pbmit-icon-list-text">Yoga can mean more energy and brighter moods.</span>
                              </li>
                              <li className="list-group-item">
                                <span className="pbmit-icon-list-icon">
                                  <i aria-hidden="true" className="pbmit-base-icon-check" />
                                </span>
                                <span className="pbmit-icon-list-text">Yoga may improve cardiovascular functioning.</span>
                              </li>
                              <li className="list-group-item">
                                <span className="pbmit-icon-list-icon">
                                  <i aria-hidden="true" className="pbmit-base-icon-check" />
                                </span>
                                <span className="pbmit-icon-list-text">Yoga can promote better posture and body awareness</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service-detail-accordion_box">
                      <div className="pbmit-heading animation-style2">
                        <h3 className="pbmit-title mb-3">Frequently asked questions</h3>
                      </div>
                      <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud laboris nisi ut aliquip ex ea commodo consequat. fugiat nulla pariatur. Nemo enim ipsam voluptatem quia voluptas voluptatem.</p>
                      <div className="accordion" id="accordionExample1">
                        <div className="accordion-item active" id="headingOne1">
                          <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="false" aria-controls="collapseOne1">
                              <span className="pbmit-accordion-icon pbmit-accordion-icon-right">
                                <span className="pbmit-accordion-icon-closed">
                                  <i className="pbmit-yoge-icon pbmit-yoge-icon-up-arrow" />
                                </span>
                                <span className="pbmit-accordion-icon-opened">
                                  <i className="pbmit-yoge-icon pbmit-yoge-icon-down-arrow-1" />
                                </span>
                              </span>
                              <span className="pbmit-accordion-title">
                                <span className="pbmit-global-color">01.</span>
                                How many times a week should I practice?
                              </span>
                            </button>
                          </h2>
                          <div id="collapseOne1" className="accordion-collapse collapse show" aria-labelledby="headingOne1" data-bs-parent="#accordionExample1">
                            <div className="accordion-body">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingTwo1">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo1" aria-expanded="false" aria-controls="collapseTwo1">
                              <span className="pbmit-accordion-icon pbmit-accordion-icon-right">
                                <span className="pbmit-accordion-icon-closed">
                                  <i className="pbmit-yoge-icon pbmit-yoge-icon-up-arrow" />
                                </span>
                                <span className="pbmit-accordion-icon-opened">
                                  <i className="pbmit-yoge-icon pbmit-yoge-icon-down-arrow-1" />
                                </span>
                              </span>
                              <span className="pbmit-accordion-title">
                                <span className="pbmit-global-color">02.</span> What are the best poses for the morning?
                              </span>
                            </button>
                          </h2>
                          <div id="collapseTwo1" className="accordion-collapse collapse" aria-labelledby="headingTwo1" data-bs-parent="#accordionExample1">
                            <div className="accordion-body">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingThree1">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree1" aria-expanded="false" aria-controls="collapseThree1">
                              <span className="pbmit-accordion-icon pbmit-accordion-icon-right">
                                <span className="pbmit-accordion-icon-closed">
                                  <i className="pbmit-yoge-icon pbmit-yoge-icon-up-arrow" />
                                </span>
                                <span className="pbmit-accordion-icon-opened">
                                  <i className="pbmit-yoge-icon pbmit-yoge-icon-down-arrow-1" />
                                </span>
                              </span>
                              <span className="pbmit-accordion-title">
                                <span className="pbmit-global-color">03.</span>
                                What is the purpose of sun salutations?
                              </span>
                            </button>
                          </h2>
                          <div id="collapseThree1" className="accordion-collapse collapse" aria-labelledby="headingThree1" data-bs-parent="#accordionExample1">
                            <div className="accordion-body">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div class="pbmit-service-related">
								<h3>Related Service</h3>
								<article class="pbmit-service-style-1">
									<div class="pbminfotech-post-item">
										<div class="pbminfotech-box-content">
											<div class="pbmit-box-content-wrap">
												<div class="pbmit-box-content-inner">
													<div class="pbmit-contant-box">
														<div class="pbmit-serv-cat">
															<a href="service-details.html" rel="tag">DJ Yoga Trainer</a>
														</div>
														<h3 class="pbmit-service-title">
															<a href="service-details.html">Viparita Virabhadrasana</a>
														</h3>
													</div>
													<div class="pbmit-service-icon">
														<i class="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose-1"></i>			
													</div>
												</div>
											</div>
											<a class="pbmit-service-btn" href="service-details.html" title="Viparita Virabhadrasana">
												<span class="pbmit-button-icon-wrapper">
													<span class="pbmit-button-icon">
														<i class="pbmit-base-icon-black-arrow-1"></i>
													</span>
												</span>
											</a>
										</div>
										<a class="pbmit-link" href="service-details.html"></a>
									</div>
								</article>
								<article class="pbmit-service-style-1">
									<div class="pbminfotech-post-item">
										<div class="pbminfotech-box-content">
											<div class="pbmit-box-content-wrap">
												<div class="pbmit-box-content-inner">
													<div class="pbmit-contant-box">
														<div class="pbmit-serv-cat">
															<a href="service-details.html" rel="tag">DJ Yoga Trainer</a>
														</div>
														<h3 class="pbmit-service-title">
															<a href="service-details.html">Ashtanga Namaskara</a>
														</h3>
													</div>
													<div class="pbmit-service-icon">
														<i class="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose-8"></i>			
													</div>
												</div>
											</div>
											<a class="pbmit-service-btn" href="service-details.html" title="Ashtanga Namaskara">
												<span class="pbmit-button-icon-wrapper">
													<span class="pbmit-button-icon">
														<i class="pbmit-base-icon-black-arrow-1"></i>
													</span>
												</span>
											</a>
										</div>
										<a class="pbmit-link" href="service-details.html"></a>
									</div>
								</article>
							</div> */}
                </div>
                <div className="col-lg-3 service-left-col sidebar">
                  <aside className="service-sidebar">
                    <aside className="widget post-list">
                      <h2 className="widget-title">Our Service</h2>
                      <div className="all-post-list">
                        <ul>
                          <li className="post-active"><a href="service-details.html"> Ardha Chakrasana </a></li>
                          <li><a href="service-details.html"> Baddha Konasana </a></li>
                          <li><a href="service-details.html"> Ashtanga Namaskara </a></li>
                          <li><a href="service-details.html"> Urdhva Hastasana </a></li>
                          <li><a href="service-details.html"> Ardha Uttanasana </a></li>
                          <li><a href="service-details.html"> Viparita Virabhadrasana </a></li>
                          <li><a href="service-details.html"> Utthita Trikonasana </a></li>
                          <li><a href="service-details.html"> Utthita Parvakonasana </a></li>
                          <li><a href="service-details.html"> Sukhasana yoga </a></li>
                        </ul>
                      </div>
                    </aside>
                    <aside className="widget pbmit-service-ad">
                      <div className="textwidget">
                        <div className="pbmit-service-ads">
                          <div className="pbmit-logo-img">
                            <img src="images/widget-img.png" alt="" />
                          </div>
                          <h4 className="pbmit-ads-title">Book your yoga session</h4>
                          <div className="pbmit-ads-desc">
                            <i className="pbmit-base-icon-phone-call-1" />+(123) 1234-567-8901
                          </div>
                          <a className="pbmit-btn" href="#">
                            <span className="pbmit-btn-content-wrapper">
                              <span className="pbmit-button-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22.76" height="22.76" viewBox="0 0 22.76 22.76">
                                  <title>black-arrow</title>
                                  <path d="M22.34,1A14.67,14.67,0,0,1,12,5.3,14.6,14.6,0,0,1,6.08,4.06,14.68,14.68,0,0,1,1.59,1" transform="translate(-0.29 -0.29)" fill="none" stroke="#000" strokeWidth={2} />
                                  <path d="M22.34,1a14.67,14.67,0,0,0,0,20.75" transform="translate(-0.29 -0.29)" fill="none" stroke="#000" strokeWidth={2} /><path d="M22.34,1,1,22.34" transform="translate(-0.29 -0.29)" fill="none" stroke="#000" strokeWidth={2} />
                                </svg>
                              </span>
                              <span className="pbmit-button-text">Register now</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </aside>
                    <aside className="widget">
                      <h2 className="widget-title">Company profile</h2>
                      <div className="textwidget">
                        <div className="download">
                          <div className="item-download">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                              <span className="pbmit-download-content">
                                <i className="pbminfotech-base-icons pbmit-base-icon-document" /> Download Pdf File 
                              </span>
                              <span className="pbmit-download-item">
                                <i className="pbminfotech-base-icons pbmit-righticon pbmit-base-icon-download" />
                              </span>
                            </a>
                          </div>
                          <div className="item-download">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                              <span className="pbmit-download-content">
                                <i className="pbminfotech-base-icons pbmit-base-icon-document" /> Download Word File 
                              </span>
                              <span className="pbmit-download-item">
                                <i className="pbminfotech-base-icons pbmit-righticon pbmit-base-icon-download" />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </aside>
                  </aside>
                </div>
              </div>
            </div>
          </section>
          {/* Service Details End */}
        </div>
        {/* Page Content End */}
        {/* footer */}
        <footer className="site-footer">
          <div className="pbmit-footer-wrapper">
            <div className="footer-wrap pbmit-footer-big-area">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 col-xl-4" />
                  <div className="col-md-12 col-xl-8 pbmit-footer-right">
                    <h3 className="pbmit-title">Professional &amp; modern, a theme designed to help <br /> your business stand out from the rest.</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="pbmit-footer-widget-area">
              <div className="container">
                <div className="row">
                  <div className="pbmit-footer-widget-col-1 col-md-6 col-lg-3">
                    <aside className="widget widget_text">
                      <div className="textwidget">
                        <div className="pbmit-footer-logo">
                          <img src="images/logo.svg" alt="" />
                        </div>
                        <div className="pbmit-footer-text">
                          Mauris sed molestie sem. Sed vel vestibulum elit, non accumsan risus. In vitae sapien viverra est Duo ei ullum inani senserit.
                        </div>
                        <ul className="pbmit-social-links">
                          <li className="pbmit-social-li pbmit-social-facebook">
                            <a title="Facebook" href="https://www.facebook.com/" target="_blank" rel="noopener">
                              <span><i className="pbmit-base-icon-facebook-f" /></span>
                            </a>
                          </li>
                          <li className="pbmit-social-li pbmit-social-twitter">
                            <a title="Twitter" href="https://www.twitter.com/" target="_blank" rel="noopener">
                              <span><i className="pbmit-base-icon-twitter-2" /></span>
                            </a>
                          </li>
                          <li className="pbmit-social-li pbmit-social-linkedin">
                            <a title="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noopener">
                              <span><i className="pbmit-base-icon-linkedin-in" /></span>
                            </a>
                          </li>
                          <li className="pbmit-social-li pbmit-social-instagram">
                            <a title="Instagram" href="https://www.instagram.com/" target="_blank" rel="noopener">
                              <span><i className="pbmit-base-icon-instagram" /></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </aside>
                  </div>
                  <div className="pbmit-footer-widget-col-2 col-md-6 col-lg-3">
                    <div className="widget">
                      <h2 className="widget-title">Useful Link</h2>
                      <div className="textwidget">
                        <ul>
                          <li><a href="#">Company</a></li>
                          <li><a href="about-us.html">About</a></li>
                          <li><a href="contact-us.html">Contact</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="pbmit-footer-widget-col-3 col-md-6 col-lg-3">
                    <div className="widget">
                      <h2 className="widget-title">Working Time</h2>
                      <div className="pbmit-timelist-wrapper">
                        <ul className="pbmit-timelist-list">
                          <li><span className="pbmit-timelist-li-title">Mon - Fri: 9.00am - 5.00pm</span></li>
                          <li><span className="pbmit-timelist-li-title">Saturday: 10.00am - 6.00pm</span></li>
                          <li><span className="pbmit-timelist-li-title">Sunday Closed</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="pbmit-footer-widget-col-4 col-md-6 col-lg-3">
                    <aside className="widget">
                      <h2 className="widget-title">Our address</h2>
                      <div className="pbmit-contact-widget-line pbmit-contact-widget-address">
                        Old Westbury 256, New York <br /> 11201, United States
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
            </div>
            <div className="pbmit-footer-text-area">
              <div className="container">
                <div className="pbmit-footer-text-inner">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="pbmit-footer-copyright-text-area"> © 2023 PBM Infotech</div>
                    </div>
                    <div className="col-md-6">
                      <ul className="pbmit-footer-menu">
                        <li className="menu-item">
                          <a href="#">Terms and conditions</a>
                        </li>
                        <li className="menu-item">
                          <a href="#">Privacy policy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>	
          </div>
        </footer>
        {/* footer End */}
      </div>
      
    </div>
  )
}

export default Servise
