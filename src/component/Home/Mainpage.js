import React from 'react'

function Mainpage() {
  return (
    <div>
       {/* Tab Start */}
       <section>
              <div className="container">
                <div className="position-relative">
                  <div className="pbmit-heading-subheading animation-style2">
                    <h4 className="pbmit-subtitle">motivation</h4>
                    <h2 className="pbmit-title">Let's change your life</h2>
                  </div>
                  <div className="tab_btn">
                    <a className="pbmit-btn pbmit-btn-outline" href="about-us.html" data-magnetic>
                      <span className="pbmit-btn-content-wrapper">
                        <span className="pbmit-button-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22.76" height="22.76" viewBox="0 0 22.76 22.76">
                            <title>black-arrow</title>
                            <path d="M22.34,1A14.67,14.67,0,0,1,12,5.3,14.6,14.6,0,0,1,6.08,4.06,14.68,14.68,0,0,1,1.59,1" transform="translate(-0.29 -0.29)" fill="none" stroke="#000" strokeWidth={2} />
                            <path d="M22.34,1a14.67,14.67,0,0,0,0,20.75" transform="translate(-0.29 -0.29)" fill="none" stroke="#000" strokeWidth={2} /><path d="M22.34,1,1,22.34" transform="translate(-0.29 -0.29)" fill="none" stroke="#000" strokeWidth={2} />
                          </svg>
                        </span>
                        <span className="pbmit-button-text">View All</span>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="pbmit-tab">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a className="nav-link active" data-bs-toggle="tab" href="#tab-2-1" aria-selected="true" role="tab">
                        <span>Flow for agility</span>
                        <i className="pbmit-base-icon-black-arrow-1" />
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" data-bs-toggle="tab" href="#tab-2-2" aria-selected="false" role="tab" tabIndex={-1}>
                        <span>Market Strategy</span>
                        <i className="pbmit-base-icon-black-arrow-1" />
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" data-bs-toggle="tab" href="#tab-2-3" aria-selected="false" role="tab" tabIndex={-1}>
                        <span>Market Strategy</span>
                        <i className="pbmit-base-icon-black-arrow-1" />
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" data-bs-toggle="tab" href="#tab-2-4" aria-selected="false" role="tab" tabIndex={-1}>
                        <span>Market Strategy</span>
                        <i className="pbmit-base-icon-black-arrow-1" />
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane show active" id="tab-2-1" role="tabpanel">
                      <div className="pbmit-column-inner">
                        <div className="row g-0">
                          <div className="col-md-12 col-xl-6 pbmit-tab-img">
                            <img src="images/homepage-3/tap-img-01.jpg" className="img-fluid" alt="" />
                          </div>
                          <div className="col-md-12 col-xl-6 pbmit-tab-list">
                            <h2>We are an awesome team of yoga lovers</h2>
                            <div>The best yoga and meditation practices, adapted at a high level to the needs of the modern pace of life There are many variatio ns of passage of lorem Ipsum available.</div>
                            <ul className="list-group list-group-borderless">
                              <li className="list-group-item">
                                <span className="pbmit-icon-list-icon">
                                  <i aria-hidden="true" className="pbmit-base-icon-check" />
                                </span>
                                <span className="pbmit-icon-list-text">Effective exercises</span>
                              </li>
                              <li className="list-group-item">
                                <span className="pbmit-icon-list-icon">
                                  <i aria-hidden="true" className="pbmit-base-icon-check" />
                                </span>
                                <span className="pbmit-icon-list-text">Body condition improving</span>
                              </li>
                              <li className="list-group-item">
                                <span className="pbmit-icon-list-icon">
                                  <i aria-hidden="true" className="pbmit-base-icon-check" />
                                </span>
                                <span className="pbmit-icon-list-text">Mood &amp; feeling control</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="tab-2-2" role="tabpanel">
                      <div className="pbmit-column-inner">
                        <div className="row g-0">
                          <div className="col-md-12 col-xl-6 pbmit-tab-img">
                            <img src="images/homepage-3/tap-img-02.jpg" className="img-fluid" alt="" />
                          </div>
                          <div className="col-md-12 col-xl-6 pbmit-tab-list">
                            <h2>We don’t set out to save the world</h2>
                            <div>The best yoga and meditation practices, adapted at a high level to the needs of the modern pace of life There are many variatio ns of passage of lorem Ipsum available.</div>
                            <ul className="list-group list-group-borderless">
                              <li className="list-group-item">
                                <span className="pbmit-icon-list-icon">
                                  <i aria-hidden="true" className="pbmit-base-icon-check" />
                                </span>
                                <span className="pbmit-icon-list-text">Discover a calmer mind</span>
                              </li>
                              <li className="list-group-item">
                                <span className="pbmit-icon-list-icon">
                                  <i aria-hidden="true" className="pbmit-base-icon-check" />
                                </span>
                                <span className="pbmit-icon-list-text">Increase Flexibility</span>
                              </li>
                              <li className="list-group-item">
                                <span className="pbmit-icon-list-icon">
                                  <i aria-hidden="true" className="pbmit-base-icon-check" />
                                </span>
                                <span className="pbmit-icon-list-text">Find relief from pain</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="tab-2-3" role="tabpanel">
                      <div className="pbmit-column-inner">
                        <div className="row g-0">
                          <div className="col-md-12 col-xl-6 pbmit-tab-img">
                            <img src="images/homepage-3/tap-img-03.jpg" className="img-fluid" alt="" />
                          </div>
                          <div className="col-md-12 col-xl-6 pbmit-tab-list">
                            <h2>The more we grow in love &amp; virtue &amp; holiness</h2>
                            <div>The best yoga and meditation practices, adapted at a high level to the needs of the modern pace of life There are many variatio ns of passage of lorem Ipsum available.</div>
                            <ul className="list-group list-group-borderless">
                              <li className="list-group-item">
                                <span className="pbmit-icon-list-icon">
                                  <i aria-hidden="true" className="pbmit-base-icon-check" />
                                </span>
                                <span className="pbmit-icon-list-text">Hostility decreases</span>
                              </li>
                              <li className="list-group-item">
                                <span className="pbmit-icon-list-icon">
                                  <i aria-hidden="true" className="pbmit-base-icon-check" />
                                </span>
                                <span className="pbmit-icon-list-text">Well-being increases</span>
                              </li>
                              <li className="list-group-item">
                                <span className="pbmit-icon-list-icon">
                                  <i aria-hidden="true" className="pbmit-base-icon-check" />
                                </span>
                                <span className="pbmit-icon-list-text">Self-acceptance increase</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="tab-2-4" role="tabpanel">
                      <div className="pbmit-column-inner">
                        <div className="row g-0">
                          <div className="col-md-12 col-xl-6 pbmit-tab-img">
                            <img src="images/homepage-3/tap-img-04.jpg" className="img-fluid" alt="" />
                          </div>
                          <div className="col-md-12 col-xl-6 pbmit-tab-list">
                            <h2>Truly, the wise proclaim that love is the only path</h2>
                            <div>The best yoga and meditation practices, adapted at a high level to the needs of the modern pace of life There are many variatio ns of passage of lorem Ipsum available.</div>
                            <ul className="list-group list-group-borderless">
                              <li className="list-group-item">
                                <span className="pbmit-icon-list-icon">
                                  <i aria-hidden="true" className="pbmit-base-icon-check" />
                                </span>
                                <span className="pbmit-icon-list-text">Concentration improves</span>
                              </li>
                              <li className="list-group-item">
                                <span className="pbmit-icon-list-icon">
                                  <i aria-hidden="true" className="pbmit-base-icon-check" />
                                </span>
                                <span className="pbmit-icon-list-text">Improve posture</span>
                              </li>
                              <li className="list-group-item">
                                <span className="pbmit-icon-list-icon">
                                  <i aria-hidden="true" className="pbmit-base-icon-check" />
                                </span>
                                <span className="pbmit-icon-list-text">Depth perception improves</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Tab end */}
            {/* Inbox Start */}
            <section className="ihbox-section_three">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-xl-4">
                    <div className="pbmit-ihbox-style-7">
                      <div className="pbmit-ihbox-box">
                        <div className="pbmit-icon-wrapper d-flex align-items-center">
                          <div className="pbmit-ihbox-icon">
                            <div className="pbmit-ihbox-icon-wrapper">
                              <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                <i className="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose" />
                              </div>
                            </div>
                          </div>
                          <h2 className="pbmit-element-title">5+ years experience</h2>
                        </div>
                        <div className="pbmit-content-wrapper">
                          <div className="pbmit-heading-desc">Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.</div>
                        </div>
                      </div>
                      <div className="pbmit-ihbox-box-number">01</div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="pbmit-ihbox-style-7">
                      <div className="pbmit-ihbox-box">
                        <div className="pbmit-icon-wrapper d-flex align-items-center">
                          <div className="pbmit-ihbox-icon">
                            <div className="pbmit-ihbox-icon-wrapper">
                              <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                <i className="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose-4" />
                              </div>
                            </div>
                          </div>
                          <h2 className="pbmit-element-title">Personal approach</h2>
                        </div>
                        <div className="pbmit-content-wrapper">
                          <div className="pbmit-heading-desc">Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.</div>
                        </div>
                      </div>
                      <div className="pbmit-ihbox-box-number">02</div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="pbmit-ihbox-style-7">
                      <div className="pbmit-ihbox-box">
                        <div className="pbmit-icon-wrapper d-flex align-items-center">
                          <div className="pbmit-ihbox-icon">
                            <div className="pbmit-ihbox-icon-wrapper">
                              <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                <i className="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose-9" />
                              </div>
                            </div>
                          </div>
                          <h2 className="pbmit-element-title">World class gurus</h2>
                        </div>
                        <div className="pbmit-content-wrapper">
                          <div className="pbmit-heading-desc">Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.</div>
                        </div>
                      </div>
                      <div className="pbmit-ihbox-box-number">03</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Ihbox End */}
            {/* Service Start */}
            <section className="section-xl pbmit-extend-animation service-three_bg pbmit-bg-color-global">
              <div className="container">
                <div className="position-relative">
                  <div className="pbmit-heading-subheading text-white animation-style2">
                    <h4 className="pbmit-subtitle">our Services</h4>
                    <h2 className="pbmit-title">Our main services</h2>
                  </div>
                  <div className="service-three_btn">
                    <a className="pbmit-btn pbmit-btn-outline" href="service-details.html">
                      <span className="pbmit-btn-content-wrapper">
                        <span className="pbmit-button-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22.76" height="22.76" viewBox="0 0 22.76 22.76">
                            <title>black-arrow</title>
                            <path d="M22.34,1A14.67,14.67,0,0,1,12,5.3,14.6,14.6,0,0,1,6.08,4.06,14.68,14.68,0,0,1,1.59,1" transform="translate(-0.29 -0.29)" fill="none" stroke="#000" strokeWidth={2} />
                            <path d="M22.34,1a14.67,14.67,0,0,0,0,20.75" transform="translate(-0.29 -0.29)" fill="none" stroke="#000" strokeWidth={2} /><path d="M22.34,1,1,22.34" transform="translate(-0.29 -0.29)" fill="none" stroke="#000" strokeWidth={2} />
                          </svg>
                        </span>
                        <span className="pbmit-button-text">View All</span>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="pbmit-element-service-style-3">
                  <div className="pbmit-main-hover-slider d-flex align-items-center">
                    <div className="swiper-hover-slide-images col-md-5 col-lg-5">
                      <div className="swiper pbmit-hover-image">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="pbmit-featured-img-wrapper">
                              <div className="pbmit-featured-wrapper">
                                <img src="images/homepage-3/service/service-img-01.jpg" alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="pbmit-featured-img-wrapper">
                              <div className="pbmit-featured-wrapper">
                                <img src="images/homepage-3/service/service-img-02.jpg" alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="pbmit-featured-img-wrapper">
                              <div className="pbmit-featured-wrapper">
                                <img src="images/homepage-3/service/service-img-03.jpg" alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="pbmit-featured-img-wrapper">
                              <div className="pbmit-featured-wrapper">
                                <img src="images/homepage-3/service/service-img-04.jpg" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-hover-slide-nav col-md-7 col-lg-7">
                      <ul className="pbmit-hover-inner">
                        <li>
                          <span className="pbmit-service-icon">
                            <i className="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose" />
                          </span>
                          <h3 className="pbmit-title-data-hover d-flex align-items-center" data-text="Ardha Chakrasana">
                            <span className="pbmit-text-content">
                              <span className="pbmit-serv-cat">
                                <a href="service-details.html" rel="tag">DJ Yoga Trainer</a>
                              </span>
                              <a className="pbmit-title-inner" href="service-details.html">
                                <span>Ardha Chakrasana</span>
                              </a>
                            </span>
                            <span className="pbmit-featured-img-wrapper">
                              <span className="pbmit-featured-wrapper">
                                <img src="images/homepage-3/service/service-img-01.jpg" className="img-fluid" alt="" />
                              </span>
                            </span>
                            <span className="pbmit-service-btn">
                              <a href="service-details.html">
                                <span className="pbmit-button-icon-wrapper">
                                  <span className="pbmit-button-icon">
                                    <i className="pbmit-base-icon-black-arrow-1" />
                                  </span>
                                </span>
                              </a>
                            </span>
                          </h3>
                          <a className="pbmit-link" href="service-details.html" />
                        </li>
                        <li>
                          <span className="pbmit-service-icon">
                            <i className="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose-18" />
                          </span>
                          <h3 className="pbmit-title-data-hover d-flex align-items-center" data-text="Baddha Konasana">
                            <span className="pbmit-text-content">
                              <span className="pbmit-serv-cat">
                                <a href="service-details.html" rel="tag">Mantra yoga Trainer</a>
                              </span>
                              <a className="pbmit-title-inner" href="service-details.html">
                                <span>Baddha Konasana</span>
                              </a>
                            </span>
                            <span className="pbmit-featured-img-wrapper">
                              <span className="pbmit-featured-wrapper">
                                <img src="images/homepage-3/service/service-img-02.jpg" className="img-fluid" alt="" />
                              </span>
                            </span>
                            <span className="pbmit-service-btn">
                              <a href="service-details.html">
                                <span className="pbmit-button-icon-wrapper">
                                  <span className="pbmit-button-icon">
                                    <i className="pbmit-base-icon-black-arrow-1" />
                                  </span>
                                </span>
                              </a>
                            </span>
                          </h3>
                          <a className="pbmit-link" href="service-details.html" />
                        </li>
                        <li>
                          <span className="pbmit-service-icon">
                            <i className="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose-8" />
                          </span>
                          <h3 className="pbmit-title-data-hover d-flex align-items-center" data-text="Ashtanga Namaskara">
                            <span className="pbmit-text-content">
                              <span className="pbmit-serv-cat">
                                <a href="service-details.html" rel="tag">DJ Yoga Trainer</a>
                              </span>
                              <a className="pbmit-title-inner" href="service-details.html">
                                <span>Ashtanga Namaskara</span>
                              </a>
                            </span>
                            <span className="pbmit-featured-img-wrapper">
                              <span className="pbmit-featured-wrapper">
                                <img src="images/homepage-3/service/service-img-03.jpg" className="img-fluid" alt="" />
                              </span>
                            </span>
                            <span className="pbmit-service-btn">
                              <a href="service-details.html">
                                <span className="pbmit-button-icon-wrapper">
                                  <span className="pbmit-button-icon">
                                    <i className="pbmit-base-icon-black-arrow-1" />
                                  </span>
                                </span>
                              </a>
                            </span>
                          </h3>
                          <a className="pbmit-link" href="service-details.html" />
                        </li>
                        <li>
                          <span className="pbmit-service-icon">
                            <i className="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose-7" />
                          </span>
                          <h3 className="pbmit-title-data-hover d-flex align-items-center" data-text="Urdhva Hastasana">
                            <span className="pbmit-text-content">
                              <span className="pbmit-serv-cat">
                                <a href="service-details.html" rel="tag">Astanga yoga Trainer</a>
                              </span>
                              <a className="pbmit-title-inner" href="service-details.html">
                                <span>Urdhva Hastasana</span>
                              </a>
                            </span>
                            <span className="pbmit-featured-img-wrapper">
                              <span className="pbmit-featured-wrapper">
                                <img src="images/homepage-3/service/service-img-04.jpg" className="img-fluid" alt="" />
                              </span>
                            </span>
                            <span className="pbmit-service-btn">
                              <a href="service-details.html">
                                <span className="pbmit-button-icon-wrapper">
                                  <span className="pbmit-button-icon">
                                    <i className="pbmit-base-icon-black-arrow-1" />
                                  </span>
                                </span>
                              </a>
                            </span>
                          </h3>
                          <a className="pbmit-link" href="service-details.html" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Service End */}
    </div>
  )
}

export default Mainpage
