import React from 'react';
import './Safety.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Safety = () => {
    return (
        <section className='safty-section pt-100 section-bg section-common pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle 
                    subTitle="Safety"
                    title="We put the safety first"
                    description="At our practice, your safety is our top priority. We adhere to the highest standards of hygiene and sterilization, ensuring a clean and safe environment for every patient. Our team is rigorously trained in the latest safety protocols and uses state-of-the-art equipment to minimize any risks. Whether it's routine check-ups or complex procedures, we take every precaution to protect your health and well-being. Trust us to provide care that not only meets but exceeds the strictest safety guidelines, because your peace of mind is as important to us as your smile."
                />

                <div className="safety-video ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/f4jG8BCl5s0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                </div>
            </div>
        </section>
    );
};

export default Safety;