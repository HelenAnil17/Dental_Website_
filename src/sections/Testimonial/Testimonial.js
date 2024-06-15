import React from 'react';
import './Testimonial.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import imgOne from '../../assets/testimonial/1.png';
import imgTwo from '../../assets/testimonial/2.png';
import imgThree from '../../assets/testimonial/3.png';
import TestimoniCard from '../../components/TestimoniCard/TestimoniCard';
import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";

const Testimonial = () => {

    const testimonails = [
        {
            'img': imgOne,
            'name': 'Alex Mendex',
            'description' : 'Absolutely outstanding care. The team here truly goes above and beyond.',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        },
        {
            'img': imgTwo,
            'name': 'Antony Nicholas',
            'description' : 'Professionalism and compassion define their service. I would not go anywhere else.',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        },
        {
            'img': imgThree,
            'name': 'Blessie Simon',
            'description' : 'I never thought going to the dentist could be so pleasant. Highly recommended!',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        },
        {
            'img': imgOne,
            'name': 'Bessie Cooper',
            'description' : 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        }
    ]

    // slider
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };

    return (
        <section className='testimonail-section section-bg section-common pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <SectionTitle 
                        subTitle="TESTIMONIAL"
                        title="Discover What Our Patients Say About Us:


"

                        />
                    </div>
                    <div className="col-lg-6">
                        <p className="pt-5">Experience firsthand why our patients rave about our personalized care and exceptional service. Join us and become part of our dental family today.</p>
                    </div>
                </div>

                <Slider {...settings} className="testimoni-slider">
                    {
                        testimonails.map(testimonail => <TestimoniCard testimonail={testimonail} />)
                    }
                </Slider>
               
            </div>
        </section>
    );
};

export default Testimonial;