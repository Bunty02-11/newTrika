import React from 'react'

function Contactus() {
    return (
        <div>
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
                                                            <rect width={36} height={1} transform="translate(0.707) rotate(45)" />
                                                            <rect width={36} height={1} transform="translate(0 25.456) rotate(-45)" />
                                                        </svg>
                                                    </span>
                                                    <ul className="navigation clearfix">
                                                        <li className="dropdown">
                                                            <a href="index.html">Home</a>
                                                            <ul>
                                                                <li><a href="index.html">Homepage 1</a></li>
                                                                <li><a href="homepage-2.html">Homepage 2</a></li>
                                                                <li><a href="homepage-3.html">Homepage 3</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="dropdown">
                                                            <a href="#">Pages</a>
                                                            <ul>
                                                                <li><a href="about-us.html">About Us</a></li>
                                                                <li><a href="our-history.html">Our History</a></li>
                                                                <li><a href="classes.html">Classes</a></li>
                                                                <li><a href="our-team-member.html">Our Team Member</a></li>
                                                                <li><a href="team-single-detail.html">Team Single Detail</a></li>
                                                                <li><a href="faq.html">Faq</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="dropdown">
                                                            <a href="#">Services</a>
                                                            <ul>
                                                                <li><a href="service-details.html">Service Detail</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="dropdown">
                                                            <a href="#">Events</a>
                                                            <ul>
                                                                <li><a href="event-style-1.html">Event Style 1</a></li>
                                                                <li><a href="event-single-detail.html">Event Single Detail</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="dropdown">
                                                            <a href="#">Blog</a>
                                                            <ul>
                                                                <li className="dropdown">
                                                                    <a href="#">Grid View</a>
                                                                    <ul>
                                                                        <li><a href="blog-grid-2.html">Grid Col 2</a></li>
                                                                        <li><a href="blog-grid-3.html">Grid Col-3</a></li>
                                                                        <li><a href="blog-grid-4.html">Grid Col-4</a></li>
                                                                        <li><a href="blog-grid-wide.html">Grid Col Wide</a></li>
                                                                    </ul>
                                                                </li>
                                                                <li className="dropdown">
                                                                    <a href="#">Sortable View</a>
                                                                    <ul>
                                                                        <li><a href="blog-sortable-col-2.html">Sortable Col 2</a></li>
                                                                        <li><a href="blog-sortable-col-3.html">Sortable Col 3</a></li>
                                                                        <li><a href="blog-sortable-col-4.html">Sortable Col 4</a></li>
                                                                    </ul>
                                                                </li>
                                                                <li><a href="blog-classic.html">Blog Classic</a></li>
                                                                <li><a href="blog-details.html">Blog Detail</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="active"><a href="contact-us.html">Contact Us</a></li>
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
                                            <h1 className="pbmit-tbar-title"> Contact Us</h1>
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
                                            <span><span className="post-root post post-post current-item"> Contact Us</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Title Bar End*/}
                    {/* Contact Us Content */}
                    <div className="page-content">
                        {/* Ihbox */}
                        <section className="section-xl ihbox_section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 col-xl-4">
                                        <div className="pbmit-ihbox-style-9">
                                            <div className="pbmit-ihbox-headingicon d-sm-flex align-items-center">
                                                <div className="pbmit-ihbox-icon">
                                                    <div className="pbmit-ihbox-icon-wrapper">
                                                        <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                                            <i className="pbmit-yoge-icon pbmit-yoge-icon-phone-call" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pbmit-ihbox-contents">
                                                    <h2 className="pbmit-element-title">24/7 Contact us</h2>
                                                    <div className="pbmit-heading-desc">Phone : (+55) 654 - 545 - 5418<br /> Mobile : (+01) 654 - 545 - 1235
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-xl-4">
                                        <div className="pbmit-ihbox-style-9">
                                            <div className="pbmit-ihbox-headingicon d-sm-flex align-items-center">
                                                <div className="pbmit-ihbox-icon">
                                                    <div className="pbmit-ihbox-icon-wrapper">
                                                        <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                                            <i className="pbmit-yoge-icon pbmit-yoge-icon-email" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pbmit-ihbox-contents">
                                                    <h2 className="pbmit-element-title">24/7 Mail us</h2>
                                                    <div className="pbmit-heading-desc"><a href="https://yoge-demo.pbminfotech.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="711f1e5c0314011d083101131c18055f121e1c">[email&nbsp;protected]</a> <br /> <a href="https://yoge-demo.pbminfotech.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="f19f9edc8394819d88b181939c9885df929e9c">[email&nbsp;protected]</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-xl-4">
                                        <div className="pbmit-ihbox-style-9">
                                            <div className="pbmit-ihbox-headingicon d-sm-flex align-items-center">
                                                <div className="pbmit-ihbox-icon">
                                                    <div className="pbmit-ihbox-icon-wrapper">
                                                        <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                                            <i className="pbmit-yoge-icon pbmit-yoge-icon-location" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pbmit-ihbox-contents">
                                                    <h2 className="pbmit-element-title">Our Address</h2>
                                                    <div className="pbmit-heading-desc">4821 Ride Top, Anch St, Alaska <br /> 997998, USA main city.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Ihbox End */}
                        {/* Contact Form */}
                        <section className="section-lgb">
                            <div className="container">
                                <div className="pbmit-heading-subheading animation-style2">
                                    <h4 className="pbmit-subtitle">Contact us</h4>
                                    <h2 className="pbmit-title">Contact &amp; hire us for your fitness!</h2>
                                    <div className="mt-4">
                                        There are many variations of passages of Lorem Ipsum available, but the in some form, or randomised words which don't look even.
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-md-8 contact-us-left_col">
                                        <div className="contact-form_main">
                                            <h3 className="pbmit-title mb-3">Send a message</h3>
                                            <form className="contact-form" method="post" id="contact-form" action="https://yoge-demo.pbminfotech.com/html-demo/send.php">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <input type="text" className="form-control" placeholder="Your Name *" name="name" required />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input type="email" className="form-control" placeholder="Your Email *" name="email" required />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input type="tel" className="form-control" placeholder="Your Phone *" name="phone" required />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input type="text" className="form-control" placeholder="Subject" name="subject" required />
                                                    </div>
                                                    <div className="col-md-12">
                                                        <textarea name="message" cols={40} rows={10} className="form-control" placeholder="Message" required defaultValue={""} />
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" />
                                                            <label className="form-check-label">
                                                                Save my name, email, and website in this browser for the next time I comment.
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <button className="pbmit-btn pbmit-btn-global">
                                                            <i className="form-btn-loader fa fa-circle-o-notch fa-spin fa-fw margin-bottom d-none" />
                                                            <span className="pbmit-btn-content-wrapper">
                                                                <span className="pbmit-button-icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.76" height="22.76" viewBox="0 0 22.76 22.76">
                                                                        <title>black-arrow</title>
                                                                        <path d="M22.34,1A14.67,14.67,0,0,1,12,5.3,14.6,14.6,0,0,1,6.08,4.06,14.68,14.68,0,0,1,1.59,1" transform="translate(-0.29 -0.29)" fill="none" stroke="#000" strokeWidth={2} />
                                                                        <path d="M22.34,1a14.67,14.67,0,0,0,0,20.75" transform="translate(-0.29 -0.29)" fill="none" stroke="#000" strokeWidth={2} /><path d="M22.34,1,1,22.34" transform="translate(-0.29 -0.29)" fill="none" stroke="#000" strokeWidth={2} />
                                                                    </svg>
                                                                </span>
                                                                <span className="pbmit-button-text">Submit Now</span>
                                                            </span>
                                                        </button>
                                                    </div>
                                                    <div className="col-md-12 col-lg-12 message-status" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-4 contact-us-right_col">
                                        <div className="contact-us-right-box">
                                            <div className="contact-us-right_img">
                                                <div className="pbmit-animation-style4">
                                                    <img src="images/contact-us-img.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="ihbox-style_11">
                                                <div className="pbmit-ihbox-style-11">
                                                    <div className="pbmit-ihbox-headingicon">
                                                        <div className="pbmit-ihbox-contents">
                                                            <h2 className="pbmit-element-title">Relax body &amp; mind for
                                                                visit our yoga session!!
                                                            </h2>
                                                            <h4 className="pbmit-element-heading">
                                                                Opening days :
                                                            </h4>
                                                            <div className="pbmit-heading-desc">mon- fri : 07:00am to 06:00pm <br />
                                                                sat - sun : Closed
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pbmit-contact-share-btn_box">
                                                <div className="pbmit-contact-share-btn">
                                                    <div className="pbmit-share-icon-wrapper">
                                                        <span className="pbmit-share-icon">
                                                            <i className="pbmit-base-icon-share-2" />
                                                        </span>
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
                                                        <div className="pbmit-sticky-corner  pbmit-bottom-left-corner">
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
                            </div>
                        </section>
                        {/* Contact Form */}
                        {/* Iframe */}
                        <section className="iframe_section section-lgb">
                            <div className="container-fluid">
                                <div className="iframe_box">
                                    <iframe src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=10&output=embed&iwloc=near" title="London Eye, London, United Kingdom" aria-label="London Eye, London, United Kingdom" />
                                </div>
                            </div>
                        </section>
                        {/* Iframe End*/}
                    </div>
                    {/* Contact Us Content End */}
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
                {/* Page Wrapper End */}
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
        </div>
    )
}

export default Contactus
