import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function About() {
    return (
        <div>
            {/* Page Wrapper */}
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
                                                        <rect width={36} height={1} transform="translate(0.707) rotate(45)">
                                                        </rect>
                                                        <rect width={36} height={1} transform="translate(0 25.456) rotate(-45)">
                                                        </rect>
                                                    </svg>
                                                </span>
                                                <ul className="navigation clearfix">
                                                    <li >
                                                    <Link to="/">Home</Link>
                                                    </li>
                                                    <li>
                                                        <a>ABOUT US</a>
                                                    </li>
                                                    <li >
                                                    <Link to="/services">Service</Link>
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
                                        <h1 className="pbmit-tbar-title"> About Us</h1>
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
                                        <span><span className="post-root post post-post current-item"> About Us</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Title Bar End*/}
                {/* Page Content */}
                <div className="page-content">
                    {/* About Us Start */}
                    <section className="section-md">
                        <div className="container">
                            <div className="row g-0">
                                <div className="col-md-12 col-xl-6">
                                    <div className="about-us-two_img">
                                        <div className="fid-style-2_box">
                                            <div className="pbminfotech-ele-fid-style-2">
                                                <div className="pbmit-fld-contents">
                                                    <div className="pbmit-fld-wrap">
                                                        <h4 className="pbmit-fid-inner">
                                                            <span className="pbmit-fid-before" />
                                                            <span className="pbmit-number-rotate numinate" data-appear-animation="animateDigits" data-from={0} data-to={235} data-interval={5} data-before data-before-style data-after data-after-style>235</span>
                                                            <span className="pbmit-fid"><sup>+</sup></span>
                                                        </h4>
                                                        <div className="pbmit-fid-sub">
                                                            <div className="pbmit-heading-desc">Happy club members</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pbmit-sticky-corner  pbmit-bottom-left-corner">
                                                    <svg width={30} height={30} viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M30 30V0C30 16 16 30 0 30H30Z" />
                                                    </svg>
                                                </div>
                                                <div className="pbmit-sticky-corner pbmit-top-right-corner">
                                                    <svg width={30} height={30} viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M30 30V0C30 16 16 30 0 30H30Z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-xl-6">
                                    <div className="about-us-two_rightbox">
                                        <div className="pbmit-heading-subheading animation-style2">
                                            <h4 className="pbmit-subtitle">About Us</h4>
                                            <h2 className="pbmit-title">Start your healthy life today with us</h2>
                                            <div className="pbmit-heading-desc">
                                                There are many variations of passages of Lorem Ipsum available, but the majority
                                                have suffered alteration in some form, by injected humour, or randomised words
                                                which don't look even.
                                            </div>
                                        </div>
                                        <div className="about-us-two_ihbox">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="pbmit-ihbox-style-6">
                                                        <div className="pbmit-ihbox-headingicon">
                                                            <div className="pbmit-ihbox-icon">
                                                                <div className="pbmit-ihbox-icon-wrapper">
                                                                    <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                                                        <i className="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="pbmit-ihbox-contents">
                                                                <h2 className="pbmit-element-title">Changing rooms</h2>
                                                                <div className="pbmit-heading-desc">Neque blandit consectetur
                                                                    viverra placerat ante.</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="pbmit-ihbox-style-6">
                                                        <div className="pbmit-ihbox-headingicon">
                                                            <div className="pbmit-ihbox-icon">
                                                                <div className="pbmit-ihbox-icon-wrapper">
                                                                    <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                                                        <i className="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose-18" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="pbmit-ihbox-contents">
                                                                <h2 className="pbmit-element-title">Training Programs</h2>
                                                                <div className="pbmit-heading-desc">Neque blandit consectetur
                                                                    viverra placerat ante.</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <a className="pbmit-btn pbmit-btn-global" href="classes.html">
                                            <span className="pbmit-btn-content-wrapper">
                                                <span className="pbmit-button-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.76" height="22.76" viewBox="0 0 22.76 22.76">
                                                        <title>black-arrow</title>
                                                        <path d="M22.34,1A14.67,14.67,0,0,1,12,5.3,14.6,14.6,0,0,1,6.08,4.06,14.68,14.68,0,0,1,1.59,1" transform="translate(-0.29 -0.29)" fill="none" stroke="#000" strokeWidth={2} />
                                                        <path d="M22.34,1a14.67,14.67,0,0,0,0,20.75" transform="translate(-0.29 -0.29)" fill="none" stroke="#000" strokeWidth={2} />
                                                        <path d="M22.34,1,1,22.34" transform="translate(-0.29 -0.29)" fill="none" stroke="#000" strokeWidth={2} />
                                                    </svg>
                                                </span>
                                                <span className="pbmit-button-text">know more</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* About Us End */}
                    {/* Static Box */}
                    <section className="static-box-section_two pbmit-element-static-box-style-1">
                        <div className="container-fluid">
                            <div className="pbmit-element-posts-wrapper row">
                                <article className="pbmit-static-box-style-1 pbmit-ele-static-box col-md-4">
                                    <div className="pbmit-bg-imgbox" style={{ backgroundImage: 'url(images/homepage-2/static-box/static-box-img01.jpg)' }}>
                                        <div className="pbmit-img-text">
                                            <div className="pbmit-text d-flex align-items-center justify-content-center">
                                                <div className="pbminfotech-static-box-number">01</div>
                                                <div className="pbminfotech-box-title">
                                                    <h4>Protection From Injury</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pbmit-img">
                                        <img src="images/homepage-2/static-box/static-box-img01.jpg" alt="Protection From Injury" />
                                    </div>
                                    <div className="pbmit-contentbox">
                                        <div className="pbmit-contentbox-inner">
                                            <div className="pbmit-ihbox-icon" />
                                            <div className="pbminfotech-box-title">
                                                <h4>Protection From Injury</h4>
                                            </div>
                                            <div className="pbminfotech-static-box-desc">There are many variations of passages of
                                                Lorem Ipsum available, but the majority have suffered alteration.</div>
                                            <div className="pbmit-button">
                                                <a href="our-history.html">
                                                    <span className="pbmit-button-text">Read More</span>
                                                    <span className="pbmit-button-icon-wrapper">
                                                        <span className="pbmit-button-icon">
                                                            <i className="pbmit-base-icon-black-arrow-1" />
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article className="pbmit-static-box-style-1 pbmit-ele-static-box col-md-4">
                                    <div className="pbmit-bg-imgbox" style={{ backgroundImage: 'url(images/homepage-2/static-box/static-box-img02.jpg)' }}>
                                        <div className="pbmit-img-text">
                                            <div className="pbmit-text d-flex align-items-center justify-content-center">
                                                <div className="pbminfotech-static-box-number">02</div>
                                                <div className="pbminfotech-box-title">
                                                    <h4>Weight Reduction</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pbmit-img">
                                        <img src="images/homepage-2/static-box/static-box-img02.jpg" alt="Weight Reduction" />
                                    </div>
                                    <div className="pbmit-contentbox">
                                        <div className="pbmit-contentbox-inner">
                                            <div className="pbmit-ihbox-icon" />
                                            <div className="pbminfotech-box-title">
                                                <h4>Weight Reduction</h4>
                                            </div>
                                            <div className="pbminfotech-static-box-desc">There are many variations of passages of
                                                Lorem Ipsum available, but the majority have suffered alteration.</div>
                                            <div className="pbmit-button">
                                                <a href="our-history.html">
                                                    <span className="pbmit-button-text">Read More</span>
                                                    <span className="pbmit-button-icon-wrapper">
                                                        <span className="pbmit-button-icon">
                                                            <i className="pbmit-base-icon-black-arrow-1" />
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article className="pbmit-static-box-style-1 pbmit-ele-static-box col-md-4">
                                    <div className="pbmit-bg-imgbox" style={{ backgroundImage: 'url(images/homepage-2/static-box/static-box-img03.jpg)' }}>
                                        <div className="pbmit-img-text">
                                            <div className="pbmit-text d-flex align-items-center justify-content-center">
                                                <div className="pbminfotech-static-box-number">03</div>
                                                <div className="pbminfotech-box-title">
                                                    <h4>Increased Flexibility</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pbmit-img">
                                        <img src="images/homepage-2/static-box/static-box-img03.jpg" alt="Increased Flexibility" />
                                    </div>
                                    <div className="pbmit-contentbox">
                                        <div className="pbmit-contentbox-inner">
                                            <div className="pbmit-ihbox-icon" />
                                            <div className="pbminfotech-box-title">
                                                <h4>Increased Flexibility</h4>
                                            </div>
                                            <div className="pbminfotech-static-box-desc">There are many variations of passages of
                                                Lorem Ipsum available, but the majority have suffered alteration.</div>
                                            <div className="pbmit-button">
                                                <a href="our-history.html">
                                                    <span className="pbmit-button-text">Read More</span>
                                                    <span className="pbmit-button-icon-wrapper">
                                                        <span className="pbmit-button-icon">
                                                            <i className="pbmit-base-icon-black-arrow-1" />
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </section>
                    {/* Static Box End */}
                    {/* Marquee Start */}
                    <section className="section-lgb">
                        <div className="container-fluid p-0">
                            <div className="swiper-slider marquee">
                                <div className="swiper-wrapper">
                                    <article className="pbmit-marquee-effect-style-1 swiper-slide">
                                        <div className="pbmit-tag-wrapper">
                                            <h2 className="pbmit-element-title" data-text="Spa area">
                                                Spa area
                                            </h2>
                                        </div>
                                    </article>
                                    <article className="pbmit-marquee-effect-style-1 swiper-slide">
                                        <div className="pbmit-tag-wrapper">
                                            <h2 className="pbmit-element-title" data-text="Changing rooms">
                                                Changing rooms
                                            </h2>
                                        </div>
                                    </article>
                                    <article className="pbmit-marquee-effect-style-1 swiper-slide">
                                        <div className="pbmit-tag-wrapper">
                                            <h2 className="pbmit-element-title" data-text="Lounge cafe">
                                                Lounge cafe
                                            </h2>
                                        </div>
                                    </article>
                                    <article className="pbmit-marquee-effect-style-1 swiper-slide">
                                        <div className="pbmit-tag-wrapper">
                                            <h2 className="pbmit-element-title" data-text="Bright halls">
                                                Bright halls
                                            </h2>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Marquee End */}
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
                                                    <path d="M22.34,1a14.67,14.67,0,0,0,0,20.75" transform="translate(-0.29 -0.29)" fill="none" stroke="#000" strokeWidth={2} />
                                                    <path d="M22.34,1,1,22.34" transform="translate(-0.29 -0.29)" fill="none" stroke="#000" strokeWidth={2} />
                                                </svg>
                                            </span>
                                            <span className="pbmit-button-text">Read More</span>
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
                    {/* Tween Effect Start */}
                    <section className="tween-effect-section_one">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="pbmit-tween-effect-style-1">
                                        <div className="tween-text tween-image pbmit-tween-effect" data-x-start={-30} data-x-end={0} data-y-start={10} data-y-end={0} data-scale-x-start={1} data-scale-x-end={1} data-skew-x-start=" 0deg" data-skew-x-end="0deg" data-skew-y-start=" 0deg" data-skew-y-end=" 0deg" data-rotate-x-start={0} data-rotate-x-end={0}>
                                            <h3 className="pbmit-element-title">qualified</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="pbmit-tween-effect-style-2">
                                        <div className="tween-text tween-image pbmit-tween-effect" data-x-start={30} data-x-end={0} data-y-start={10} data-y-end={0} data-scale-x-start={1} data-scale-x-end={1} data-skew-x-start=" 0deg" data-skew-x-end="0deg" data-skew-y-start=" 0deg" data-skew-y-end=" 0deg" data-rotate-x-start={0} data-rotate-x-end={0}>
                                            <h3 className="pbmit-element-title">instructors</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Tween Effect End */}
                    {/* Team Start */}
                    <section className="section-lgb">
                        <div className="container">
                            <article className="pbmit-team-style-2">
                                <div className="pbminfotech-post-item">
                                    <div className="pbminfotech-box-content">
                                        <div className="pbmit-team-title-wapper d-flex">
                                            <h3 className="pbmit-team-title">
                                                <a href="team-single-detail.html">Jordan Peele</a>
                                            </h3>
                                            <div className="pbminfotech-box-team-position">yoga trainer</div>
                                        </div>
                                        <div className="pbminfotech-team-wrapper">
                                            <div className="pbmit-featured-img-wrapper">
                                                <div className="pbmit-featured-wrapper">
                                                    <img src="images/homepage-1/team/team-01.jpg" className="img-fluid" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <a className="pbmit-team-btn" href="team-single-detail.html">
                                            <span className="pbmit-button-text">Read More</span>
                                            <span className="pbmit-button-icon-wrapper">
                                                <span className="pbmit-button-icon">
                                                    <i className="pbmit-base-icon-black-arrow-1" />
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                    <a className="pbmit-link" href="team-single-detail.html" />
                                </div>
                            </article>
                            <article className="pbmit-team-style-2">
                                <div className="pbminfotech-post-item">
                                    <div className="pbminfotech-box-content">
                                        <div className="pbmit-team-title-wapper d-flex">
                                            <h3 className="pbmit-team-title">
                                                <a href="team-single-detail.html">David Lee</a>
                                            </h3>
                                            <div className="pbminfotech-box-team-position">yoga instructor</div>
                                        </div>
                                        <div className="pbminfotech-team-wrapper">
                                            <div className="pbmit-featured-img-wrapper">
                                                <div className="pbmit-featured-wrapper">
                                                    <img src="images/homepage-1/team/team-02.jpg" className="img-fluid" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <a className="pbmit-team-btn" href="team-single-detail.html">
                                            <span className="pbmit-button-text">Read More</span>
                                            <span className="pbmit-button-icon-wrapper">
                                                <span className="pbmit-button-icon">
                                                    <i className="pbmit-base-icon-black-arrow-1" />
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                    <a className="pbmit-link" href="team-single-detail.html" />
                                </div>
                            </article>
                            <article className="pbmit-team-style-2">
                                <div className="pbminfotech-post-item">
                                    <div className="pbminfotech-box-content">
                                        <div className="pbmit-team-title-wapper d-flex">
                                            <h3 className="pbmit-team-title">
                                                <a href="team-single-detail.html">Norton Berry</a>
                                            </h3>
                                            <div className="pbminfotech-box-team-position">Yoga Therapist</div>
                                        </div>
                                        <div className="pbminfotech-team-wrapper">
                                            <div className="pbmit-featured-img-wrapper">
                                                <div className="pbmit-featured-wrapper">
                                                    <img src="images/homepage-1/team/team-03.jpg" className="img-fluid" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <a className="pbmit-team-btn" href="team-single-detail.html">
                                            <span className="pbmit-button-text">Read More</span>
                                            <span className="pbmit-button-icon-wrapper">
                                                <span className="pbmit-button-icon">
                                                    <i className="pbmit-base-icon-black-arrow-1" />
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                    <a className="pbmit-link" href="team-single-detail.html" />
                                </div>
                            </article>
                            <article className="pbmit-team-style-2">
                                <div className="pbminfotech-post-item">
                                    <div className="pbminfotech-box-content">
                                        <div className="pbmit-team-title-wapper d-flex">
                                            <h3 className="pbmit-team-title">
                                                <a href="team-single-detail.html">Paula Deen</a>
                                            </h3>
                                            <div className="pbminfotech-box-team-position">yoga instructor</div>
                                        </div>
                                        <div className="pbminfotech-team-wrapper">
                                            <div className="pbmit-featured-img-wrapper">
                                                <div className="pbmit-featured-wrapper">
                                                    <img src="images/homepage-1/team/team-04.jpg" className="img-fluid" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <a className="pbmit-team-btn" href="team-single-detail.html">
                                            <span className="pbmit-button-text">Read More</span>
                                            <span className="pbmit-button-icon-wrapper">
                                                <span className="pbmit-button-icon">
                                                    <i className="pbmit-base-icon-black-arrow-1" />
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                    <a className="pbmit-link" href="team-single-detail.html" />
                                </div>
                            </article>
                            <article className="pbmit-team-style-2">
                                <div className="pbminfotech-post-item">
                                    <div className="pbminfotech-box-content">
                                        <div className="pbmit-team-title-wapper d-flex">
                                            <h3 className="pbmit-team-title">
                                                <a href="team-single-detail.html">Carla Hall</a>
                                            </h3>
                                            <div className="pbminfotech-box-team-position">yoga trainer</div>
                                        </div>
                                        <div className="pbminfotech-team-wrapper">
                                            <div className="pbmit-featured-img-wrapper">
                                                <div className="pbmit-featured-wrapper">
                                                    <img src="images/homepage-1/team/team-05.jpg" className="img-fluid" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <a className="pbmit-team-btn" href="team-single-detail.html">
                                            <span className="pbmit-button-text">Read More</span>
                                            <span className="pbmit-button-icon-wrapper">
                                                <span className="pbmit-button-icon">
                                                    <i className="pbmit-base-icon-black-arrow-1" />
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                    <a className="pbmit-link" href="team-single-detail.html" />
                                </div>
                            </article>
                        </div>
                    </section>
                    {/* Team End */}
                    {/* Client Start */}
                    <section>
                        <div className="container">
                            <div className="swiper-slider" data-arrows-class="service-two_arrow" data-autoplay="true" data-loop="true" data-dots="false" data-arrows="false" data-columns={6} data-margin={30} data-effect="slide">
                                <div className="swiper-wrapper">
                                    {/* Slide1 */}
                                    <article className="pbmit-client-style-1 swiper-slide">
                                        <div className="pbmit-border-wrapper">
                                            <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                                                <h4 className="pbmit-hide">Client-06</h4>
                                                <div className="pbmit-client-hover-img">
                                                    <img src="images/homepage-2/client/green-client-logo-01.png" alt="" />
                                                </div>
                                                <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                        <img src="images/homepage-2/client/dark-client-logo-01.png" className="img-fluid" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    {/* Slide2 */}
                                    <article className="pbmit-client-style-1 swiper-slide">
                                        <div className="pbmit-border-wrapper">
                                            <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                                                <h4 className="pbmit-hide">Client-06</h4>
                                                <div className="pbmit-client-hover-img">
                                                    <img src="images/homepage-2/client/green-client-logo-02.png" alt="" />
                                                </div>
                                                <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                        <img src="images/homepage-2/client/dark-client-logo-02.png" className="img-fluid" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    {/* Slide3 */}
                                    <article className="pbmit-client-style-1 swiper-slide">
                                        <div className="pbmit-border-wrapper">
                                            <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                                                <h4 className="pbmit-hide">Client-06</h4>
                                                <div className="pbmit-client-hover-img">
                                                    <img src="images/homepage-2/client/green-client-logo-03.png" alt="" />
                                                </div>
                                                <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                        <img src="images/homepage-2/client/dark-client-logo-03.png" className="img-fluid" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    {/* Slide4 */}
                                    <article className="pbmit-client-style-1 swiper-slide">
                                        <div className="pbmit-border-wrapper">
                                            <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                                                <h4 className="pbmit-hide">Client-06</h4>
                                                <div className="pbmit-client-hover-img">
                                                    <img src="images/homepage-2/client/green-client-logo-04.png" alt="" />
                                                </div>
                                                <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                        <img src="images/homepage-2/client/dark-client-logo-04.png" className="img-fluid" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    {/* Slide5 */}
                                    <article className="pbmit-client-style-1 swiper-slide">
                                        <div className="pbmit-border-wrapper">
                                            <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                                                <h4 className="pbmit-hide">Client-06</h4>
                                                <div className="pbmit-client-hover-img">
                                                    <img src="images/homepage-2/client/green-client-logo-05.png" alt="" />
                                                </div>
                                                <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                        <img src="images/homepage-2/client/dark-client-logo-05.png" className="img-fluid" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    {/* Slide6 */}
                                    <article className="pbmit-client-style-1 swiper-slide">
                                        <div className="pbmit-border-wrapper">
                                            <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                                                <h4 className="pbmit-hide">Client-06</h4>
                                                <div className="pbmit-client-hover-img">
                                                    <img src="images/homepage-2/client/green-client-logo-06.png" alt="" />
                                                </div>
                                                <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                        <img src="images/homepage-2/client/dark-client-logo-06.png" className="img-fluid" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Client End */}
                    {/* Testimonial Start */}
                    <section className="testimonial_two section-xl">
                        <div className="container">
                            <div className="testimonial-two_bg">
                                <div className="row g-0">
                                    <div className="col-md-12 col-xl-6 pbmit-col_1">
                                        <div className="testimonial-two-left_img" />
                                    </div>
                                    <div className="col-md-12 col-xl-6 pbmit-col_2">
                                        <div className="testimonial-two_rightbox">
                                            <div className="pbmit-heading-subheading text-white animation-style2">
                                                <h4 className="pbmit-subtitle">Testimonial</h4>
                                                <h2 className="pbmit-title">Clients feedback</h2>
                                            </div>
                                            <div className="swiper-slider" data-arrows-class="testimonial-two_btn" data-autoplay="true" data-loop="true" data-dots="true" data-arrows="false" data-columns={1} data-margin={30} data-effect="slide">
                                                <div className="swiper-wrapper">
                                                    {/* Slide1 */}
                                                    <article className="pbmit-testimonial-style-2 swiper-slide">
                                                        <div className="pbminfotech-post-item">
                                                            <div className="pbminfotech-box-star-ratings">
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1" />
                                                            </div>
                                                            <div className="pbminfotech-box-desc">
                                                                <blockquote className="pbminfotech-testimonial-text">
                                                                    <p>I would recommend practitioners at this center to
                                                                        everyone! They are great to work with and are excellemt
                                                                        trainers. Thank you all!</p>
                                                                </blockquote>
                                                            </div>
                                                            <div className="pbminfotech-box-author d-flex align-items-center">
                                                                <div className="pbminfotech-box-img">
                                                                    <div className="pbmit-featured-img-wrapper">
                                                                        <div className="pbmit-featured-wrapper">
                                                                            <img src="images/homepage-2/testimonial/testimonial-01.jpg" className="img-fluid" alt="" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="pbmit-auther-content">
                                                                    <h3 className="pbminfotech-box-title">Maria Flynn</h3>
                                                                    <div className="pbminfotech-testimonial-detail">Satisfied Client
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>
                                                    {/* Slide2 */}
                                                    <article className="pbmit-testimonial-style-2 swiper-slide">
                                                        <div className="pbminfotech-post-item">
                                                            <div className="pbminfotech-box-star-ratings">
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1" />
                                                            </div>
                                                            <div className="pbminfotech-box-desc">
                                                                <blockquote className="pbminfotech-testimonial-text">
                                                                    <p>I would recommend practitioners at this center to
                                                                        everyone! They are great to work with and are excellemt
                                                                        trainers. Thank you all!</p>
                                                                </blockquote>
                                                            </div>
                                                            <div className="pbminfotech-box-author d-flex align-items-center">
                                                                <div className="pbminfotech-box-img">
                                                                    <div className="pbmit-featured-img-wrapper">
                                                                        <div className="pbmit-featured-wrapper">
                                                                            <img src="images/homepage-2/testimonial/testimonial-02.jpg" className="img-fluid" alt="" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="pbmit-auther-content">
                                                                    <h3 className="pbminfotech-box-title">Jennifer Smith</h3>
                                                                    <div className="pbminfotech-testimonial-detail">Satisfied Client
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>
                                                    {/* Slide3 */}
                                                    <article className="pbmit-testimonial-style-2 swiper-slide">
                                                        <div className="pbminfotech-post-item">
                                                            <div className="pbminfotech-box-star-ratings">
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1" />
                                                            </div>
                                                            <div className="pbminfotech-box-desc">
                                                                <blockquote className="pbminfotech-testimonial-text">
                                                                    <p>I would recommend practitioners at this center to
                                                                        everyone! They are great to work with and are excellemt
                                                                        trainers. Thank you all!</p>
                                                                </blockquote>
                                                            </div>
                                                            <div className="pbminfotech-box-author d-flex align-items-center">
                                                                <div className="pbminfotech-box-img">
                                                                    <div className="pbmit-featured-img-wrapper">
                                                                        <div className="pbmit-featured-wrapper">
                                                                            <img src="images/homepage-2/testimonial/testimonial-03.jpg" className="img-fluid" alt="" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="pbmit-auther-content">
                                                                    <h3 className="pbminfotech-box-title">Jane Brown</h3>
                                                                    <div className="pbminfotech-testimonial-detail">Satisfied Client
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>
                                                    {/* Slide4 */}
                                                    <article className="pbmit-testimonial-style-2 swiper-slide">
                                                        <div className="pbminfotech-post-item">
                                                            <div className="pbminfotech-box-star-ratings">
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1" />
                                                            </div>
                                                            <div className="pbminfotech-box-desc">
                                                                <blockquote className="pbminfotech-testimonial-text">
                                                                    <p>I would recommend practitioners at this center to
                                                                        everyone! They are great to work with and are excellemt
                                                                        trainers. Thank you all!</p>
                                                                </blockquote>
                                                            </div>
                                                            <div className="pbminfotech-box-author d-flex align-items-center">
                                                                <div className="pbminfotech-box-img">
                                                                    <div className="pbmit-featured-img-wrapper">
                                                                        <div className="pbmit-featured-wrapper">
                                                                            <img src="images/homepage-2/testimonial/testimonial-04.jpg" className="img-fluid" alt="" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="pbmit-auther-content">
                                                                    <h3 className="pbminfotech-box-title">Becky Linch</h3>
                                                                    <div className="pbminfotech-testimonial-detail">Satisfied Client
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>
                                                    {/* Slide5 */}
                                                    <article className="pbmit-testimonial-style-2 swiper-slide">
                                                        <div className="pbminfotech-post-item">
                                                            <div className="pbminfotech-box-star-ratings">
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1" />
                                                            </div>
                                                            <div className="pbminfotech-box-desc">
                                                                <blockquote className="pbminfotech-testimonial-text">
                                                                    <p>I would recommend practitioners at this center to
                                                                        everyone! They are great to work with and are excellemt
                                                                        trainers. Thank you all!</p>
                                                                </blockquote>
                                                            </div>
                                                            <div className="pbminfotech-box-author d-flex align-items-center">
                                                                <div className="pbminfotech-box-img">
                                                                    <div className="pbmit-featured-img-wrapper">
                                                                        <div className="pbmit-featured-wrapper">
                                                                            <img src="images/homepage-2/testimonial/testimonial-05.jpg" className="img-fluid" alt="" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="pbmit-auther-content">
                                                                    <h3 className="pbminfotech-box-title">Daniel Craig</h3>
                                                                    <div className="pbminfotech-testimonial-detail">Satisfied Client
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>
                                                    {/* Slide6 */}
                                                    <article className="pbmit-testimonial-style-2 swiper-slide">
                                                        <div className="pbminfotech-post-item">
                                                            <div className="pbminfotech-box-star-ratings">
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1" />
                                                            </div>
                                                            <div className="pbminfotech-box-desc">
                                                                <blockquote className="pbminfotech-testimonial-text">
                                                                    <p>I would recommend practitioners at this center to
                                                                        everyone! They are great to work with and are excellemt
                                                                        trainers. Thank you all!</p>
                                                                </blockquote>
                                                            </div>
                                                            <div className="pbminfotech-box-author d-flex align-items-center">
                                                                <div className="pbminfotech-box-img">
                                                                    <div className="pbmit-featured-img-wrapper">
                                                                        <div className="pbmit-featured-wrapper">
                                                                            <img src="images/homepage-2/testimonial/testimonial-06.jpg" className="img-fluid" alt="" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="pbmit-auther-content">
                                                                    <h3 className="pbminfotech-box-title">Mariam Ness</h3>
                                                                    <div className="pbminfotech-testimonial-detail">Satisfied Client
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>
                                                </div>
                                            </div>
                                            <div className="testimonial-two_btn swiper-btn-custom d-flex flex-row-reverse">
                                                <div className="pbmit-sticky-corner pbmit-bottom-left-corner">
                                                    <svg width={30} height={30} viewBox="0 0 30 30" fill xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M30 30V0C30 16 16 30 0 30H30Z" fill="red" />
                                                    </svg>
                                                </div>
                                                <div className="pbmit-sticky-corner pbmit-top-right-corner">
                                                    <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M30 30V0C30 16 16 30 0 30H30Z" fill="red" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Testimonial End */}
                </div>
                {/* Page Content End */}
                {/* footer */}
                <footer className="site-footer">
                    <div className="footer-top-section">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-8 pbmit-col_1">
                                    <ul className="pbmit-icon-list-items pbmit-inline-items">
                                        <li className="pbmit-icon-list-item pbmit-inline-item">
                                            <a href="classes.html">
                                                <span className="pbmit-icon-list-text">Classes</span>
                                            </a>
                                        </li>
                                        <li className="pbmit-icon-list-item pbmit-inline-item">
                                            <a href="our-team-member.html">
                                                <span className="pbmit-icon-list-text">Trainers</span>
                                            </a>
                                        </li>
                                        <li className="pbmit-icon-list-item pbmit-inline-item">
                                            <a href="event-style-1.html">
                                                <span className="pbmit-icon-list-text">Schedule</span>
                                            </a>
                                        </li>
                                        <li className="pbmit-icon-list-item pbmit-inline-item">
                                            <a href="event-single-detail.html">
                                                <span className="pbmit-icon-list-text">Event</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-2 pbmit-col_2">
                                    <div className="pbmit-ihbox-style-13">
                                        <div className="pbmit-ihbox-box d-flex align-items-center">
                                            <div className="pbmit-ihbox-icon">
                                                <div className="pbmit-ihbox-icon-wrapper">
                                                    <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                                        <i className="pbmit-yoge-icon pbmit-yoge-icon-phone-call" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pbmit-ihbox-contents">
                                                <h2 className="pbmit-element-title">+ 1(212) 255-511</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 pbmit-col_3">
                                    <div className="pbmit-ihbox-style-13">
                                        <div className="pbmit-ihbox-box d-flex align-items-center">
                                            <div className="pbmit-ihbox-icon">
                                                <div className="pbmit-ihbox-icon-wrapper">
                                                    <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                                        <i className="pbmit-yoge-icon pbmit-yoge-icon-email" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pbmit-ihbox-contents">
                                                <h2 className="pbmit-element-title"><a href="https://yoge-demo.pbminfotech.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="c7aea9a1a887bea8a0a6a4a6b5a2e9a4a8aa">[email&nbsp;protected]</a>
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pbmit-footer-wrapper">
                        <div className="footer-wrap pbmit-footer-big-area">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 col-xl-4" />
                                    <div className="col-md-12 col-xl-8 pbmit-footer-right">
                                        <h3 className="pbmit-title">Professional &amp; modern, a theme designed to help <br /> your
                                            business stand out from the rest.</h3>
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
                                                    Mauris sed molestie sem. Sed vel vestibulum elit, non accumsan risus. In
                                                    vitae sapien viverra est Duo ei ullum inani senserit.
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
                                                    <li><span className="pbmit-timelist-li-title">Mon - Fri: 9.00am - 5.00pm</span>
                                                    </li>
                                                    <li><span className="pbmit-timelist-li-title">Saturday: 10.00am - 6.00pm</span>
                                                    </li>
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
                {/* Search Box Start Here */}
                <div className="pbmit-search-overlay">
                    <div className="pbmit-icon-close">
                        <svg className="qodef-svg--close qodef-m" xmlns="http://www.w3.org/2000/svg" width="28.163" height="28.163" viewBox="0 0 26.163 26.163">
                            <rect width={36} height={1} transform="translate(0.707) rotate(45)" />
                            <rect width={36} height={1} transform="translate(0 25.456) rotate(-45)" />
                        </svg>
                    </div>
                    <div className="pbmit-search-outer">
                        <form className="pbmit-site-searchform">
                            <input type="search" className="form-control field searchform-s" name="s" placeholder="Search …" />
                            <button type="submit" />
                        </form>
                    </div>
                </div>
                {/* Search Box End Here */}
                {/* Scroll To Top */}
                <div className="pbmit-progress-wrap">
                    <svg className="pbmit-progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                    </svg>
                </div>
                {/* Scroll To Top End */}
            </div>
            {/* Page Wrapper End */}

        </div>
    )
}

export default About
