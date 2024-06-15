import React from 'react';
import './Emergency.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import EmergencyImg from '../../assets/emergency.jpeg';
import { Link } from 'react-router-dom';

const Emergency = () => {
    return (
        <section className='emergency-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="emergency-img">
                            <img src={EmergencyImg} alt="Emergency" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="emergency-text">
                            <SectionTitle subTitle="Dental Emergency Service" title="Local Care, Gentle Touch" description="Facing a dental emergency can be daunting, but our dedicated team is here to provide swift and compassionate care when you need it most. At our clinic, we prioritize your urgent dental needs, offering immediate assistance to alleviate pain and ensure your oral health is swiftly restored. Whether it's a sudden toothache, a knocked-out tooth, or any other urgent dental issue, trust us to deliver expert care with empathy and professionalism. Your comfort and well-being are our top priorities during any dental emergency"/>

                            <div className="theme-btn">
                                <Link to='/contact'>Book an appointment</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Emergency;