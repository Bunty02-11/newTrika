import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import Mainpage from './Mainpage'

function Home() {
    return (
        <div>
            <div>
                <div className="page-wrapper">
                    {/* Header Main Area */}
                    <Header />
                    {/* Header Main Area End Here */}
                    {/* page content */}
                    <div className="page-content pbmit-bg-color-light">
                        {/* Marquee */}
                        <section className="marquee-section_three">
                            <div className="container-fluid p-0">
                                <div className="swiper-slider marquee">
                                    <div className="swiper-wrapper">
                                        <article className="pbmit-marquee-effect-style-1 swiper-slide">
                                            <div className="pbmit-tag-wrapper">
                                                <h2 className="pbmit-element-title" data-text="Ashtanga vinyasa yoga">
                                                    Ashtanga vinyasa yoga
                                                </h2>
                                            </div>
                                        </article>
                                        <article className="pbmit-marquee-effect-style-1 swiper-slide">
                                            <div className="pbmit-tag-wrapper">
                                                <h2 className="pbmit-element-title" data-text="Iyengar Yoga">
                                                    Iyengar Yoga
                                                </h2>
                                            </div>
                                        </article>
                                        <article className="pbmit-marquee-effect-style-1 swiper-slide">
                                            <div className="pbmit-tag-wrapper">
                                                <h2 className="pbmit-element-title" data-text="Hot yoga">
                                                    Hot yoga
                                                </h2>
                                            </div>
                                        </article>
                                        <article className="pbmit-marquee-effect-style-1 swiper-slide">
                                            <div className="pbmit-tag-wrapper">
                                                <h2 className="pbmit-element-title" data-text="Kundalini yoga">
                                                    Kundalini yoga
                                                </h2>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Marquee end */}
                        <Mainpage />

                        {/* Testimonial Start */}
                        <section className="testimonial-three_bg">
                            <div className="container">
                                <div className="row g-0">
                                    <div className="col-md-8 pbmit-col_1" />
                                    <div className="col-md-4 pbmit-col_2">
                                        <div className="swiper-slider" data-autoplay="true" data-loop="true" data-dots="false" data-arrows="false" data-columns={1} data-margin={30} data-effect="slide">
                                            <div className="swiper-wrapper">
                                                {/* Slide1 */}
                                                <article className="pbmit-testimonial-style-3 swiper-slide">
                                                    <div className="pbminfotech-post-item">
                                                        <div className="pbmit-box-content-wrap">
                                                            <div className="pbminfotech-box-star-ratings">
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                            </div>
                                                            <div className="pbminfotech-box-desc">
                                                                <blockquote className="pbminfotech-testimonial-text">
                                                                    <p>I would recommend practitioners at this center to everyone! They are great to work with and are excellemt trainers. Thank you all!</p>
                                                                </blockquote>
                                                            </div>
                                                            <div className="pbminfotech-box-author d-flex align-items-center">
                                                                <div className="pbminfotech-box-img">
                                                                    <div className="pbmit-featured-img-wrapper">
                                                                        <div className="pbmit-featured-wrapper">
                                                                            <img src="images/homepage-3/testimonial/testimonial-01.jpg" alt="" className="img-fluid" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="pbmit-auther-content">
                                                                    <h3 className="pbminfotech-box-title">Maria Flynn</h3>
                                                                    <div className="pbminfotech-testimonial-detail">Satisfied Client</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                {/* Slide2 */}
                                                <article className="pbmit-testimonial-style-3 swiper-slide">
                                                    <div className="pbminfotech-post-item">
                                                        <div className="pbmit-box-content-wrap">
                                                            <div className="pbminfotech-box-star-ratings">
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                            </div>
                                                            <div className="pbminfotech-box-desc">
                                                                <blockquote className="pbminfotech-testimonial-text">
                                                                    <p>I would recommend practitioners at this center to everyone! They are great to work with and are excellemt trainers. Thank you all!</p>
                                                                </blockquote>
                                                            </div>
                                                            <div className="pbminfotech-box-author d-flex align-items-center">
                                                                <div className="pbminfotech-box-img">
                                                                    <div className="pbmit-featured-img-wrapper">
                                                                        <div className="pbmit-featured-wrapper">
                                                                            <img src="images/homepage-3/testimonial/testimonial-02.jpg" alt="" className="img-fluid" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="pbmit-auther-content">
                                                                    <h3 className="pbminfotech-box-title">Jennifer Smith</h3>
                                                                    <div className="pbminfotech-testimonial-detail">Satisfied Client</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                {/* Slide3 */}
                                                <article className="pbmit-testimonial-style-3 swiper-slide">
                                                    <div className="pbminfotech-post-item">
                                                        <div className="pbmit-box-content-wrap">
                                                            <div className="pbminfotech-box-star-ratings">
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                            </div>
                                                            <div className="pbminfotech-box-desc">
                                                                <blockquote className="pbminfotech-testimonial-text">
                                                                    <p>I would recommend practitioners at this center to everyone! They are great to work with and are excellemt trainers. Thank you all!</p>
                                                                </blockquote>
                                                            </div>
                                                            <div className="pbminfotech-box-author d-flex align-items-center">
                                                                <div className="pbminfotech-box-img">
                                                                    <div className="pbmit-featured-img-wrapper">
                                                                        <div className="pbmit-featured-wrapper">
                                                                            <img src="images/homepage-3/testimonial/testimonial-03.jpg" alt="" className="img-fluid" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="pbmit-auther-content">
                                                                    <h3 className="pbminfotech-box-title">Jane Brown</h3>
                                                                    <div className="pbminfotech-testimonial-detail">Satisfied Client</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                {/* Slide4 */}
                                                <article className="pbmit-testimonial-style-3 swiper-slide">
                                                    <div className="pbminfotech-post-item">
                                                        <div className="pbmit-box-content-wrap">
                                                            <div className="pbminfotech-box-star-ratings">
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                            </div>
                                                            <div className="pbminfotech-box-desc">
                                                                <blockquote className="pbminfotech-testimonial-text">
                                                                    <p>I would recommend practitioners at this center to everyone! They are great to work with and are excellemt trainers. Thank you all!</p>
                                                                </blockquote>
                                                            </div>
                                                            <div className="pbminfotech-box-author d-flex align-items-center">
                                                                <div className="pbminfotech-box-img">
                                                                    <div className="pbmit-featured-img-wrapper">
                                                                        <div className="pbmit-featured-wrapper">
                                                                            <img src="images/homepage-3/testimonial/testimonial-04.jpg" alt="" className="img-fluid" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="pbmit-auther-content">
                                                                    <h3 className="pbminfotech-box-title">Becky Linch</h3>
                                                                    <div className="pbminfotech-testimonial-detail">Satisfied Client</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                {/* Slide5 */}
                                                <article className="pbmit-testimonial-style-3 swiper-slide">
                                                    <div className="pbminfotech-post-item">
                                                        <div className="pbmit-box-content-wrap">
                                                            <div className="pbminfotech-box-star-ratings">
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                            </div>
                                                            <div className="pbminfotech-box-desc">
                                                                <blockquote className="pbminfotech-testimonial-text">
                                                                    <p>I would recommend practitioners at this center to everyone! They are great to work with and are excellemt trainers. Thank you all!</p>
                                                                </blockquote>
                                                            </div>
                                                            <div className="pbminfotech-box-author d-flex align-items-center">
                                                                <div className="pbminfotech-box-img">
                                                                    <div className="pbmit-featured-img-wrapper">
                                                                        <div className="pbmit-featured-wrapper">
                                                                            <img src="images/homepage-3/testimonial/testimonial-05.jpg" alt="" className="img-fluid" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="pbmit-auther-content">
                                                                    <h3 className="pbminfotech-box-title">Daniel Craig</h3>
                                                                    <div className="pbminfotech-testimonial-detail">Satisfied Client</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                {/* Slide6 */}
                                                <article className="pbmit-testimonial-style-3 swiper-slide">
                                                    <div className="pbminfotech-post-item">
                                                        <div className="pbmit-box-content-wrap">
                                                            <div className="pbminfotech-box-star-ratings">
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                                            </div>
                                                            <div className="pbminfotech-box-desc">
                                                                <blockquote className="pbminfotech-testimonial-text">
                                                                    <p>I would recommend practitioners at this center to everyone! They are great to work with and are excellemt trainers. Thank you all!</p>
                                                                </blockquote>
                                                            </div>
                                                            <div className="pbminfotech-box-author d-flex align-items-center">
                                                                <div className="pbminfotech-box-img">
                                                                    <div className="pbmit-featured-img-wrapper">
                                                                        <div className="pbmit-featured-wrapper">
                                                                            <img src="images/homepage-3/testimonial/testimonial-06.jpg" alt="" className="img-fluid" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="pbmit-auther-content">
                                                                    <h3 className="pbminfotech-box-title">Mariam Ness</h3>
                                                                    <div className="pbminfotech-testimonial-detail">Satisfied Client</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Testimonial End */}
                        {/* Blog Start */}
                        <section className="section-xl">
                            <div className="container">
                                <div className="position-relative">
                                    <div className="pbmit-heading-subheading animation-style2">
                                        <h4 className="pbmit-subtitle">blogs</h4>
                                        <h2 className="pbmit-title">Recent blogs</h2>
                                    </div>
                                    <div className="blog-two_arrow swiper-btn-custom d-flex flex-row-reverse" />
                                </div>
                                <div className="swiper-slider" data-arrows-class="blog-two_arrow" data-autoplay="false" data-loop="false" data-dots="false" data-arrows="true" data-columns={2} data-margin={30} data-effect="slide">
                                    <div className="swiper-wrapper">
                                        {/* Slide1 */}
                                        <article className="pbmit-blog-style-2 swiper-slide">
                                            <div className="post-item d-flex">
                                                <div className="pbmit-featured-container">
                                                    <div className="pbmit-bg-image" style={{ backgroundImage: 'url(images/homepage-2/blog/blog-img-01.jpg)' }}>
                                                        <div className="pbmit-featured-img-wrapper">
                                                            <div className="pbmit-featured-wrapper" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pbminfotech-box-wrap">
                                                    <div className="pbminfotech-box-content">
                                                        <div className="pbmit-date-admin-wraper d-flex align-items-center">
                                                            <div className="pbmit-meta-cat-wrapper pbmit-meta-line">
                                                                <div className="pbmit-meta-category">
                                                                    <a href="blog-classic.html" rel="category tag">Motivation</a>
                                                                </div>
                                                            </div>
                                                            <div className="pbmit-meta-date pbmit-meta-line">
                                                                <span className="pbmit-post-date">August  29. 2023</span>
                                                            </div>
                                                        </div>
                                                        <h3 className="pbmit-post-title">
                                                            <a href="blog-details.html">Which Yoga Class Is Best for Beginners?</a>
                                                        </h3>
                                                        <div className="pbminfotech-box-desc">
                                                            We It’s time to roll out your yoga mat and discovers the combinations of physically…
                                                        </div>
                                                    </div>
                                                    <a className="pbmit-blog-btn" href="blog-details.html">
                                                        <span className="pbmit-button-icon-wrapper">
                                                            <span className="pbmit-button-icon">
                                                                <i className="pbmit-base-icon-black-arrow-1" />
                                                            </span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </article>
                                        {/* Slide2 */}
                                        <article className="pbmit-blog-style-2 swiper-slide">
                                            <div className="post-item d-flex">
                                                <div className="pbmit-featured-container">
                                                    <div className="pbmit-bg-image" style={{ backgroundImage: 'url(images/homepage-2/blog/blog-img-02.jpg)' }}>
                                                        <div className="pbmit-featured-img-wrapper">
                                                            <div className="pbmit-featured-wrapper" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pbminfotech-box-wrap">
                                                    <div className="pbminfotech-box-content">
                                                        <div className="pbmit-date-admin-wraper d-flex align-items-center">
                                                            <div className="pbmit-meta-cat-wrapper pbmit-meta-line">
                                                                <div className="pbmit-meta-category">
                                                                    <a href="blog-classic.html" rel="category tag">Meditation</a>
                                                                </div>
                                                            </div>
                                                            <div className="pbmit-meta-date pbmit-meta-line">
                                                                <span className="pbmit-post-date">August  29. 2023</span>
                                                            </div>
                                                        </div>
                                                        <h3 className="pbmit-post-title">
                                                            <a href="blog-details.html">Spiritual Cleansing: 14 Rituals to Detox Your Soul</a>
                                                        </h3>
                                                        <div className="pbminfotech-box-desc">
                                                            We It’s time to roll out your yoga mat and discovers the combinations of physically…
                                                        </div>
                                                    </div>
                                                    <a className="pbmit-blog-btn" href="blog-details.html">
                                                        <span className="pbmit-button-icon-wrapper">
                                                            <span className="pbmit-button-icon">
                                                                <i className="pbmit-base-icon-black-arrow-1" />
                                                            </span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </article>
                                        {/* Slide3 */}
                                        <article className="pbmit-blog-style-2 swiper-slide">
                                            <div className="post-item d-flex">
                                                <div className="pbmit-featured-container">
                                                    <div className="pbmit-bg-image" style={{ backgroundImage: 'url(images/homepage-2/blog/blog-img-03.jpg)' }}>
                                                        <div className="pbmit-featured-img-wrapper">
                                                            <div className="pbmit-featured-wrapper" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pbminfotech-box-wrap">
                                                    <div className="pbminfotech-box-content">
                                                        <div className="pbmit-date-admin-wraper d-flex align-items-center">
                                                            <div className="pbmit-meta-cat-wrapper pbmit-meta-line">
                                                                <div className="pbmit-meta-category">
                                                                    <a href="blog-classic.html" rel="category tag">fitness</a>
                                                                </div>
                                                            </div>
                                                            <div className="pbmit-meta-date pbmit-meta-line">
                                                                <span className="pbmit-post-date">August  29. 2023</span>
                                                            </div>
                                                        </div>
                                                        <h3 className="pbmit-post-title">
                                                            <a href="blog-details.html">Spiritual Awakening: Definition, Signs and Symptoms</a>
                                                        </h3>
                                                        <div className="pbminfotech-box-desc">
                                                            We It’s time to roll out your yoga mat and discovers the combinations of physically…
                                                        </div>
                                                    </div>
                                                    <a className="pbmit-blog-btn" href="blog-details.html">
                                                        <span className="pbmit-button-icon-wrapper">
                                                            <span className="pbmit-button-icon">
                                                                <i className="pbmit-base-icon-black-arrow-1" />
                                                            </span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </article>
                                        {/* Slide4 */}
                                        <article className="pbmit-blog-style-2 swiper-slide">
                                            <div className="post-item d-flex">
                                                <div className="pbmit-featured-container">
                                                    <div className="pbmit-bg-image" style={{ backgroundImage: 'url(images/homepage-2/blog/blog-img-04.jpg)' }}>
                                                        <div className="pbmit-featured-img-wrapper">
                                                            <div className="pbmit-featured-wrapper" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pbminfotech-box-wrap">
                                                    <div className="pbminfotech-box-content">
                                                        <div className="pbmit-date-admin-wraper d-flex align-items-center">
                                                            <div className="pbmit-meta-cat-wrapper pbmit-meta-line">
                                                                <div className="pbmit-meta-category">
                                                                    <a href="blog-classic.html" rel="category tag">Inspiration</a>
                                                                </div>
                                                            </div>
                                                            <div className="pbmit-meta-date pbmit-meta-line">
                                                                <span className="pbmit-post-date">August  29. 2023</span>
                                                            </div>
                                                        </div>
                                                        <h3 className="pbmit-post-title">
                                                            <a href="blog-details.html">Yoga and Astrology: Find the Best Practices for Your Sign</a>
                                                        </h3>
                                                        <div className="pbminfotech-box-desc">
                                                            We It’s time to roll out your yoga mat and discovers the combinations of physically…
                                                        </div>
                                                    </div>
                                                    <a className="pbmit-blog-btn" href="blog-details.html">
                                                        <span className="pbmit-button-icon-wrapper">
                                                            <span className="pbmit-button-icon">
                                                                <i className="pbmit-base-icon-black-arrow-1" />
                                                            </span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </article>
                                        {/* Slide5 */}
                                        <article className="pbmit-blog-style-2 swiper-slide">
                                            <div className="post-item d-flex">
                                                <div className="pbmit-featured-container">
                                                    <div className="pbmit-bg-image" style={{ backgroundImage: 'url(images/homepage-2/blog/blog-img-05.jpg)' }}>
                                                        <div className="pbmit-featured-img-wrapper">
                                                            <div className="pbmit-featured-wrapper" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pbminfotech-box-wrap">
                                                    <div className="pbminfotech-box-content">
                                                        <div className="pbmit-date-admin-wraper d-flex align-items-center">
                                                            <div className="pbmit-meta-cat-wrapper pbmit-meta-line">
                                                                <div className="pbmit-meta-category">
                                                                    <a href="blog-classic.html" rel="category tag">Motivation</a>
                                                                </div>
                                                            </div>
                                                            <div className="pbmit-meta-date pbmit-meta-line">
                                                                <span className="pbmit-post-date">August  29. 2023</span>
                                                            </div>
                                                        </div>
                                                        <h3 className="pbmit-post-title">
                                                            <a href="blog-details.html">Puppy Yoga? What Is It and What Are the Benefits?</a>
                                                        </h3>
                                                        <div className="pbminfotech-box-desc">
                                                            We It’s time to roll out your yoga mat and discovers the combinations of physically…
                                                        </div>
                                                    </div>
                                                    <a className="pbmit-blog-btn" href="blog-details.html">
                                                        <span className="pbmit-button-icon-wrapper">
                                                            <span className="pbmit-button-icon">
                                                                <i className="pbmit-base-icon-black-arrow-1" />
                                                            </span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </article>
                                        {/* Slide6 */}
                                        <article className="pbmit-blog-style-2 swiper-slide">
                                            <div className="post-item d-flex">
                                                <div className="pbmit-featured-container">
                                                    <div className="pbmit-bg-image" style={{ backgroundImage: 'url(images/homepage-2/blog/blog-img-06.jpg)' }}>
                                                        <div className="pbmit-featured-img-wrapper">
                                                            <div className="pbmit-featured-wrapper" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pbminfotech-box-wrap">
                                                    <div className="pbminfotech-box-content">
                                                        <div className="pbmit-date-admin-wraper d-flex align-items-center">
                                                            <div className="pbmit-meta-cat-wrapper pbmit-meta-line">
                                                                <div className="pbmit-meta-category">
                                                                    <a href="blog-classic.html" rel="category tag">Meditation</a>
                                                                </div>
                                                            </div>
                                                            <div className="pbmit-meta-date pbmit-meta-line">
                                                                <span className="pbmit-post-date">August  29. 2023</span>
                                                            </div>
                                                        </div>
                                                        <h3 className="pbmit-post-title">
                                                            <a href="blog-details.html">8 Ways to Strengthen the Mind Body Connection</a>
                                                        </h3>
                                                        <div className="pbminfotech-box-desc">
                                                            We It’s time to roll out your yoga mat and discovers the combinations of physically…
                                                        </div>
                                                    </div>
                                                    <a className="pbmit-blog-btn" href="blog-details.html">
                                                        <span className="pbmit-button-icon-wrapper">
                                                            <span className="pbmit-button-icon">
                                                                <i className="pbmit-base-icon-black-arrow-1" />
                                                            </span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Blog End */}
                    </div>
                    {/* page content End */}
                    {/* footer */}
                    <Footer />
                    {/* footer End */}
                </div>
                {/* page wrapper End */}
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
            </div>
        </div>
    )
}

export default Home
