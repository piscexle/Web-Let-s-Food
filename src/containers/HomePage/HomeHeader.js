import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import order from '../../assets/howItWorks/order1@2x.svg'
import delivery from '../../assets/howItWorks/delivery1@2x.svg'
import courier from '../../assets/howItWorks/courier1@2x.svg'
import { FormattedMessage } from 'react-intl';

class HomeHeader extends Component {

    render() {
        return (
            <React.Fragment>
                <div className='main'>
                    <div className='home-header-container'>
                        <div className='home-header-content'>
                            <div className='logo-content'>
                                <div className='header-logo'></div>
                            </div>
                            <div className='center-content'>
                                <a href="#" className='child-content action'>
                                    <FormattedMessage id="home-header.home" />
                                </a>
                                <a href="#menu" className='child-content'>
                                    <FormattedMessage id="home-header.menu" />
                                </a>
                                <a href="#service" className='child-content'>
                                    <FormattedMessage id="home-header.howItWorks" />
                                </a>
                                <a href="#about" className='child-content'>
                                    <FormattedMessage id="home-header.about" />
                                </a>
                                <a href="#contact" className='child-content'>
                                    <FormattedMessage id="home-header.contact" />
                                </a>
                            </div>
                            <div className='icon-content'>
                                <div className='search-header'><i className="fas fa-search"></i></div>
                                <div className='cart-header'>
                                    <i className="fas fa-shopping-cart"></i>
                                    <span className='cart-header-notice'>2</span>
                                </div>
                                <div className='language-vi'>VN</div>
                                <div className='language-en active'>EN</div>
                            </div>
                            <div className='signin'>
                                <div className='btn-signin btn'>
                                    <div className='icon-signin'></div>
                                    <div className='title-signin'><FormattedMessage id="home-header.signin" /></div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='home-header-slider'>
                        <div className='header-slider-content'>
                            <div className='header-slider'><FormattedMessage id="slider.header-slider" />

                                <div className='sub-header-slider'><FormattedMessage id="slider.sub-header-slider" /></div>
                                <div className='btn-slider btn'>
                                    <span className='btn-title'><FormattedMessage id="slider.btn-slider" /></span>
                                </div>
                            </div>
                            <div className='img-slider'></div>
                        </div>
                    </div>

                    <div id='content'>
                        <div id='service' className='content-section'>
                            <div className='section-title'><FormattedMessage id="service.title-service" /></div>
                            <div className='section-heading'><FormattedMessage id="service.header-service" /></div>
                            <div className='section-sub-heading'><FormattedMessage id="service.sub-header-service" /></div>
                            <div className='card-service-container'>
                                <div className='card-service'>
                                    <img className='img-card' src={order}></img>
                                    <div className='header-card-service'><FormattedMessage id="service.header-card-order" /></div>
                                    <div className='sub-header-card-service'><FormattedMessage id="service.sub-header-card-order" /></div>
                                </div>
                                <div className='card-service'>
                                    <img className='img-card' src={delivery}></img>
                                    <div className='header-card-service'><FormattedMessage id="service.header-card-delivery" /></div>
                                    <div className='sub-header-card-service'><FormattedMessage id="service.sub-header-card-delivery" /></div>
                                </div>
                                <div className='card-service'>
                                    <img className='img-card' src={courier}></img>
                                    <div className='header-card-service'><FormattedMessage id="service.header-card-quality" /></div>
                                    <div className='sub-header-card-service'><FormattedMessage id="service.sub-header-card-quality" /></div>
                                </div>
                            </div>
                        </div>

                        <div id='menu' className='content-section'>
                            <div className='section-title'><FormattedMessage id="popular-menu.title-menu" /></div>
                            <div className='section-heading'><FormattedMessage id="popular-menu.header-menu" /></div>
                            <div className='section-sub-heading'><FormattedMessage id="popular-menu.sub-header-menu" /></div>
                            <div className='card-product-content'>
                                <div className='card-product'>
                                    <div className='img-product-1'></div>
                                    <div className='background-product'>
                                        <div className='title-product'>
                                            <div className='heading-product'>Mie Ramen</div>
                                            <div className='sub-heading-product'>lorem ipsum</div>
                                        </div>
                                        <div className='last-product'>
                                            <div className='price-product'>$ 20.2</div>
                                            <div className='like-product like-active'><i class="fas fa-heart"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='card-product'>
                                    <div className='img-product-2'></div>
                                    <div className='background-product'>
                                        <div className='title-product'>
                                            <div className='heading-product'>Mie Ramen</div>
                                            <div className='sub-heading-product'>lorem ipsum</div>
                                        </div>
                                        <div className='last-product'>
                                            <div className='price-product'>$ 20.2</div>
                                            <div className='like-product'><i class="fas fa-heart"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='card-product'>
                                    <div className='img-product-3'></div>
                                    <div className='background-product'>
                                        <div className='title-product'>
                                            <div className='heading-product'>Mie Ramen</div>
                                            <div className='sub-heading-product'>lorem ipsum</div>
                                        </div>
                                        <div className='last-product'>
                                            <div className='price-product'>$ 20.2</div>
                                            <div className='like-product'><i class="fas fa-heart"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='card-product'>
                                    <div className='img-product-4'></div>
                                    <div className='background-product'>
                                        <div className='title-product'>
                                            <div className='heading-product'>Mie Ramen</div>
                                            <div className='sub-heading-product'>lorem ipsum</div>
                                        </div>
                                        <div className='last-product'>
                                            <div className='price-product'>$ 20.2</div>
                                            <div className='like-product'><i class="fas fa-heart"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='btn-menu btn'>More Menu</div>
                        </div>

                        <div id='about' className='content-about'>
                            <div className='img-about'></div>
                            <div className='about-header'>
                                <div className='about-title'>What we say</div>
                                <div className='about-heading'>What Our Customers Say About Us</div>
                            </div>
                        </div>

                        <div className='discount-container'>
                            <div className='heading-discount'>Join our member and get discount up to 50%</div>
                            <a href="#" className='btn-discount btn'>
                                <div className='icon-signup'></div>
                                Sign Up
                            </a>

                        </div>
                        <div id="contact" className='contact-container'>
                            <div class="container py-4 py-md-5 px-4 px-md-5 text-body-secondary">
                                <div class="row">
                                    <div class="col-lg-3 mb-3">
                                        <a class="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none" href="/" aria-label="Bootstrap">
                                            <svg width="167" height="47" viewBox="0 0 167 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.184 41V24.2H5.784V37.76H13.392V41H2.184ZM21.8139 41.24C20.4379 41.24 19.2299 40.96 18.1899 40.4C17.1659 39.84 16.3659 39.072 15.7899 38.096C15.2299 37.12 14.9499 36.008 14.9499 34.76C14.9499 33.768 15.1099 32.864 15.4299 32.048C15.7499 31.216 16.1979 30.504 16.7739 29.912C17.3499 29.32 18.0299 28.864 18.8139 28.544C19.6139 28.208 20.4859 28.04 21.4299 28.04C22.2939 28.04 23.0859 28.2 23.8059 28.52C24.5419 28.824 25.1739 29.264 25.7019 29.84C26.2459 30.4 26.6619 31.064 26.9499 31.832C27.2379 32.6 27.3739 33.44 27.3579 34.352L27.3339 35.408H17.1339L16.5819 33.296H24.5259L24.1179 33.728V33.224C24.0859 32.776 23.9419 32.384 23.6859 32.048C23.4459 31.712 23.1339 31.448 22.7499 31.256C22.3659 31.048 21.9419 30.944 21.4779 30.944C20.7579 30.944 20.1499 31.088 19.6539 31.376C19.1739 31.648 18.8059 32.048 18.5499 32.576C18.3099 33.088 18.1899 33.728 18.1899 34.496C18.1899 35.248 18.3499 35.912 18.6699 36.488C18.9899 37.048 19.4459 37.48 20.0379 37.784C20.6459 38.088 21.3579 38.24 22.1739 38.24C22.7339 38.24 23.2459 38.152 23.7099 37.976C24.1739 37.8 24.6779 37.496 25.2219 37.064L26.8299 39.344C26.3819 39.744 25.8779 40.088 25.3179 40.376C24.7579 40.664 24.1819 40.88 23.5899 41.024C22.9979 41.168 22.4059 41.24 21.8139 41.24ZM31.0999 41V25.088H34.5079V41H31.0999ZM28.7239 31.352V28.304H37.1239V31.352H28.7239ZM39.2252 30.344L38.1692 29.072C38.8252 28.8 39.3532 28.464 39.7532 28.064C40.1692 27.648 40.3772 27.296 40.3772 27.008C40.3772 26.832 40.3052 26.664 40.1612 26.504C40.0332 26.328 39.8652 26.168 39.6572 26.024C39.2892 25.736 39.0332 25.48 38.8892 25.256C38.7612 25.016 38.6972 24.76 38.6972 24.488C38.6972 24.024 38.8572 23.656 39.1772 23.384C39.5132 23.112 39.9452 22.976 40.4732 22.976C40.9532 22.976 41.3772 23.104 41.7452 23.36C42.1292 23.6 42.4332 23.944 42.6572 24.392C42.8812 24.824 42.9932 25.328 42.9932 25.904C42.9932 26.384 42.8972 26.856 42.7052 27.32C42.5132 27.784 42.2492 28.216 41.9132 28.616C41.5772 29.016 41.1772 29.368 40.7132 29.672C40.2652 29.976 39.7692 30.2 39.2252 30.344ZM49.9213 41.24C48.7533 41.24 47.7053 41.048 46.7773 40.664C45.8653 40.28 45.1213 39.736 44.5453 39.032L46.6813 37.208C47.1773 37.736 47.7213 38.12 48.3133 38.36C48.9213 38.584 49.5373 38.696 50.1613 38.696C50.3853 38.696 50.5933 38.672 50.7853 38.624C50.9773 38.56 51.1453 38.48 51.2893 38.384C51.4333 38.272 51.5373 38.144 51.6013 38C51.6813 37.856 51.7213 37.688 51.7213 37.496C51.7213 37.144 51.5773 36.872 51.2893 36.68C51.1613 36.584 50.9213 36.48 50.5693 36.368C50.2333 36.24 49.8013 36.104 49.2733 35.96C48.4573 35.752 47.7693 35.512 47.2093 35.24C46.6493 34.952 46.1933 34.624 45.8413 34.256C45.5533 33.952 45.3293 33.6 45.1693 33.2C45.0253 32.8 44.9533 32.36 44.9533 31.88C44.9533 31.112 45.1773 30.44 45.6253 29.864C46.0733 29.288 46.6653 28.84 47.4013 28.52C48.1533 28.2 48.9693 28.04 49.8493 28.04C50.5053 28.04 51.1373 28.12 51.7453 28.28C52.3693 28.44 52.9453 28.672 53.4733 28.976C54.0173 29.264 54.4893 29.608 54.8893 30.008L53.0653 32.048C52.7773 31.76 52.4493 31.512 52.0813 31.304C51.7133 31.08 51.3453 30.904 50.9773 30.776C50.6093 30.632 50.2733 30.56 49.9693 30.56C49.6973 30.56 49.4493 30.584 49.2253 30.632C49.0173 30.68 48.8413 30.76 48.6973 30.872C48.5533 30.968 48.4413 31.088 48.3613 31.232C48.2973 31.376 48.2653 31.536 48.2653 31.712C48.2653 31.888 48.3053 32.056 48.3853 32.216C48.4813 32.36 48.6093 32.496 48.7693 32.624C48.9293 32.72 49.1853 32.832 49.5373 32.96C49.9053 33.088 50.3773 33.232 50.9533 33.392C51.7213 33.6 52.3693 33.832 52.8973 34.088C53.4253 34.344 53.8493 34.64 54.1693 34.976C54.4573 35.264 54.6573 35.6 54.7693 35.984C54.8973 36.352 54.9613 36.752 54.9613 37.184C54.9613 37.968 54.7373 38.672 54.2893 39.296C53.8573 39.904 53.2573 40.384 52.4893 40.736C51.7373 41.072 50.8813 41.24 49.9213 41.24ZM57.8949 41V24.2H61.4949V41H57.8949ZM59.5509 34.328V31.208H68.2629V34.328H59.5509ZM59.5509 27.44V24.2H69.2709V27.44H59.5509ZM77.6621 41.24C76.3821 41.24 75.2301 40.96 74.2061 40.4C73.1981 39.824 72.3981 39.04 71.8061 38.048C71.2301 37.056 70.9421 35.928 70.9421 34.664C70.9421 33.368 71.2301 32.224 71.8061 31.232C72.3981 30.24 73.1981 29.464 74.2061 28.904C75.2301 28.328 76.3821 28.04 77.6621 28.04C78.9581 28.04 80.1101 28.328 81.1181 28.904C82.1261 29.464 82.9181 30.24 83.4941 31.232C84.0861 32.224 84.3821 33.368 84.3821 34.664C84.3821 35.928 84.0861 37.056 83.4941 38.048C82.9181 39.04 82.1261 39.824 81.1181 40.4C80.1101 40.96 78.9581 41.24 77.6621 41.24ZM77.6621 38.288C78.3021 38.288 78.8621 38.128 79.3421 37.808C79.8381 37.488 80.2221 37.056 80.4941 36.512C80.7821 35.968 80.9181 35.352 80.9021 34.664C80.9181 33.944 80.7821 33.312 80.4941 32.768C80.2221 32.208 79.8381 31.776 79.3421 31.472C78.8621 31.152 78.3021 30.992 77.6621 30.992C77.0381 30.992 76.4781 31.152 75.9821 31.472C75.4861 31.792 75.0941 32.224 74.8061 32.768C74.5181 33.312 74.3821 33.944 74.3981 34.664C74.3821 35.352 74.5181 35.968 74.8061 36.512C75.0941 37.056 75.4861 37.488 75.9821 37.808C76.4781 38.128 77.0381 38.288 77.6621 38.288ZM92.8262 41.24C91.5462 41.24 90.3942 40.96 89.3702 40.4C88.3622 39.824 87.5622 39.04 86.9702 38.048C86.3942 37.056 86.1062 35.928 86.1062 34.664C86.1062 33.368 86.3942 32.224 86.9702 31.232C87.5622 30.24 88.3622 29.464 89.3702 28.904C90.3942 28.328 91.5462 28.04 92.8262 28.04C94.1222 28.04 95.2742 28.328 96.2822 28.904C97.2902 29.464 98.0822 30.24 98.6582 31.232C99.2502 32.224 99.5462 33.368 99.5462 34.664C99.5462 35.928 99.2502 37.056 98.6582 38.048C98.0822 39.04 97.2902 39.824 96.2822 40.4C95.2742 40.96 94.1222 41.24 92.8262 41.24ZM92.8262 38.288C93.4662 38.288 94.0262 38.128 94.5062 37.808C95.0022 37.488 95.3862 37.056 95.6582 36.512C95.9462 35.968 96.0822 35.352 96.0662 34.664C96.0822 33.944 95.9462 33.312 95.6582 32.768C95.3862 32.208 95.0022 31.776 94.5062 31.472C94.0262 31.152 93.4662 30.992 92.8262 30.992C92.2022 30.992 91.6422 31.152 91.1462 31.472C90.6502 31.792 90.2582 32.224 89.9702 32.768C89.6822 33.312 89.5462 33.944 89.5622 34.664C89.5462 35.352 89.6822 35.968 89.9702 36.512C90.2582 37.056 90.6502 37.488 91.1462 37.808C91.6422 38.128 92.2022 38.288 92.8262 38.288ZM107.102 41.24C105.998 41.24 104.998 40.96 104.102 40.4C103.222 39.84 102.526 39.064 102.014 38.072C101.518 37.064 101.27 35.928 101.27 34.664C101.27 33.384 101.518 32.248 102.014 31.256C102.526 30.264 103.222 29.48 104.102 28.904C104.982 28.328 105.982 28.04 107.102 28.04C107.694 28.04 108.262 28.136 108.806 28.328C109.366 28.504 109.862 28.752 110.294 29.072C110.726 29.392 111.078 29.752 111.35 30.152C111.622 30.536 111.782 30.936 111.83 31.352L110.966 31.52V23.24H114.35V41H111.134L110.99 38.072L111.662 38.168C111.646 38.552 111.51 38.928 111.254 39.296C110.998 39.664 110.654 40 110.222 40.304C109.806 40.592 109.326 40.824 108.782 41C108.254 41.16 107.694 41.24 107.102 41.24ZM107.846 38.408C108.502 38.408 109.062 38.248 109.526 37.928C110.006 37.608 110.382 37.168 110.654 36.608C110.926 36.048 111.062 35.4 111.062 34.664C111.062 33.912 110.926 33.256 110.654 32.696C110.382 32.12 110.006 31.68 109.526 31.376C109.062 31.056 108.502 30.896 107.846 30.896C107.222 30.896 106.67 31.056 106.19 31.376C105.71 31.68 105.334 32.12 105.062 32.696C104.806 33.256 104.678 33.912 104.678 34.664C104.678 35.4 104.806 36.048 105.062 36.608C105.334 37.168 105.71 37.608 106.19 37.928C106.67 38.248 107.222 38.408 107.846 38.408Z" fill="#1D1D1D" />
                                                <path d="M139.1 10.835C139.584 10.835 140.048 10.644 140.392 10.3035C140.735 9.96297 140.931 9.50051 140.936 9.01665C140.94 8.53248 140.754 8.06605 140.416 7.71889C140.079 7.37174 139.618 7.17197 139.133 7.16309M138.941 14.4892C138.457 14.4892 137.993 14.2982 137.649 13.9577C137.305 13.6172 137.11 13.1548 137.105 12.6709C137.1 12.1867 137.287 11.7203 137.625 11.3731C137.962 11.026 138.423 10.8262 138.907 10.8173M139.1 18.1611C139.584 18.1611 140.048 17.9701 140.392 17.6296C140.735 17.2891 140.931 16.8266 140.936 16.3428C140.94 15.8586 140.754 15.3922 140.416 15.045C140.079 14.6979 139.618 14.4981 139.133 14.4892M146.443 10.835C146.927 10.835 147.392 10.644 147.735 10.3035C148.079 9.96297 148.275 9.50051 148.279 9.01665C148.284 8.53248 148.097 8.06605 147.76 7.71889C147.422 7.37174 146.961 7.17197 146.477 7.16309M146.285 14.4892C145.801 14.4892 145.337 14.2982 144.993 13.9577C144.649 13.6172 144.453 13.1548 144.449 12.6709C144.444 12.1867 144.631 11.7203 144.968 11.3731C145.306 11.026 145.767 10.8262 146.251 10.8173M146.443 18.1611C146.927 18.1611 147.392 17.9701 147.735 17.6296C148.079 17.2891 148.275 16.8266 148.279 16.3428C148.284 15.8586 148.097 15.3922 147.76 15.045C147.422 14.6979 146.961 14.4981 146.477 14.4892M132.324 10.835C132.808 10.835 133.273 10.644 133.616 10.3035C133.96 9.96297 134.156 9.50051 134.16 9.01665C134.165 8.53273 133.978 8.06651 133.641 7.7194C133.304 7.37229 132.843 7.17235 132.36 7.16309M132.167 14.4892C131.683 14.4892 131.219 14.2982 130.875 13.9577C130.531 13.6172 130.336 13.1548 130.331 12.6709C130.326 12.187 130.513 11.7208 130.85 11.3737C131.187 11.0265 131.648 10.8266 132.132 10.8173M132.324 18.1611C132.808 18.1611 133.273 17.9701 133.616 17.6296C133.96 17.2891 134.156 16.8266 134.16 16.3428C134.165 15.8589 133.978 15.3926 133.641 15.0455C133.304 14.6984 132.843 14.4985 132.36 14.4892" stroke="#FAA41A" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M133.04 39.8369H146.255V35.4659C143.44 36.7085 141.799 36.9023 139.517 36.9493C136.663 37.0081 134.729 36.5146 133.04 36.0916V39.8369Z" stroke="#383747" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M156.281 24.0126C153.814 33.2275 144.383 38.6957 135.168 36.2267C132.243 35.4459 129.577 33.9078 127.436 31.7675C125.296 29.6272 123.758 26.9604 122.977 24.0361L156.281 24.0126Z" fill="#FAA41A" stroke="#383747" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M122.968 21.0677H156.287V24.0919H122.968V21.0677Z" stroke="#383747" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M144.49 21.0589C155.946 21.5113 153.066 13.348 161.533 12.6107C162.371 12.5372 162.811 12.5211 163.986 12.596L164.03 12.5813C162.569 11.7118 159.875 10.2401 157.626 10.8643C156.476 11.1845 154.685 12.4212 153.485 14.7785C150.463 21.3938 147.521 21.0457 145.127 21.0575L144.49 21.0589Z" stroke="#383747" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M151.54 26.6079C150.5 29.7804 147.717 31.9835 144.486 32.5828" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </a>
                                        <ul class="list-unstyled small">
                                            <li class="mb-2">Designed and built with all the love in the world by the <a href="/docs/5.3/about/team/">Bootstrap team</a> with the help of <a href="https://github.com/twbs/bootstrap/graphs/contributors">our contributors</a>.</li>
                                            <li class="mb-2">Code licensed <a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank" rel="license noopener">MIT</a>, docs <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="license noopener">CC BY 3.0</a>.</li>
                                            <li class="mb-2">Currently v5.3.0-alpha2.</li>
                                        </ul>
                                    </div>
                                    <div class="link-nav col-6 col-lg-2 offset-lg-1 mb-3 mt-3">
                                        <h5>Links</h5>
                                        <ul class="list-unstyled">
                                            <li class="mb-2"><a href="#">Home</a></li>
                                            <li class="mb-2"><a href="#menu">Menu</a></li>
                                            <li class="mb-2"><a href="#service">How It Works</a></li>
                                            <li class="mb-2"><a href="#about">About</a></li>
                                            <li class="mb-2"><a href="#contact">Contact</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-6 col-lg-2 mb-3 mt-3">
                                        <h5>Guides</h5>
                                        <ul class="list-unstyled">
                                            <li class="mb-2"><a href="/docs/5.3/getting-started/">Getting started</a></li>
                                            <li class="mb-2"><a href="/docs/5.3/examples/starter-template/">Starter template</a></li>
                                            <li class="mb-2"><a href="/docs/5.3/getting-started/webpack/">Webpack</a></li>
                                            <li class="mb-2"><a href="/docs/5.3/getting-started/parcel/">Parcel</a></li>
                                            <li class="mb-2"><a href="/docs/5.3/getting-started/vite/">Vite</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-6 col-lg-2 mb-3 mt-3">
                                        <h5>Projects</h5>
                                        <ul class="list-unstyled">
                                            <li class="mb-2"><a href="https://github.com/twbs/bootstrap">Bootstrap 5</a></li>
                                            <li class="mb-2"><a href="https://github.com/twbs/bootstrap/tree/v4-dev">Bootstrap 4</a></li>
                                            <li class="mb-2"><a href="https://github.com/twbs/icons">Icons</a></li>
                                            <li class="mb-2"><a href="https://github.com/twbs/rfs">RFS</a></li>
                                            <li class="mb-2"><a href="https://github.com/twbs/examples/">Examples repo</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-6 col-lg-2 mb-3 mt-3">
                                        <h5>Community</h5>
                                        <ul class="list-unstyled">
                                            <li class="mb-2"><a href="https://github.com/twbs/bootstrap/issues">Issues</a></li>
                                            <li class="mb-2"><a href="https://github.com/twbs/bootstrap/discussions">Discussions</a></li>
                                            <li class="mb-2"><a href="https://github.com/sponsors/twbs">Corporate sponsors</a></li>
                                            <li class="mb-2"><a href="https://opencollective.com/bootstrap">Open Collective</a></li>
                                            <li class="mb-2"><a href="https://stackoverflow.com/questions/tagged/bootstrap-5">Stack Overflow</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.user.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
