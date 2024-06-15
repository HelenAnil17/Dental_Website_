import React from 'react';
import './Expert.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { BsFillCheckCircleFill } from "react-icons/bs";
import expertImg from '../../assets/expert.png';

const Expert = () => {
    return (
        <section className='expert-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-text">
                            <SectionTitle 
                                subTitle="EXPERTS IN DENTAL"
                                title="Exceptional Dentistry, Exceptional Dentists"

                                description="Serving Seattle with Superior Care.

Our dedicated team of dental experts is committed to your smile's health and beauty.Experience the latest in dental technology and treatments tailored to your unique needs.Discover the Difference:"
                            />

                            <ul>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Cutting-edge dental services for your peace of mind.
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Enjoy exclusive discounts on all dental treatments for a brighter, healthier smile.

                                </li>
                                {/* <li>
                                    <BsFillCheckCircleFill />
                                    Discount on all dental treatment
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-img">
                            <img src={expertImg} alt="expert" />
                        
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expert;