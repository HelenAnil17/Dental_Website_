import React, { useState }from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Services.scss';
import ServicesData from './ServiceData';
import Service from '../../components/Service/Service';
import { Link } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from "react-icons/bs";


const Services = () => {
//     return (
//         <section className='service-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-6 col-sm-6">
//                         <SectionTitle title="Feel amazing about your oral health" subTitle="Services"/>
//                     </div>
//                     <div className="col-lg-6 col-sm-6">
//                         <p className='service-title-text'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
//                     </div>
//                 </div>

//                 <div className="row">
//                     {
//                         ServicesData.map(singleService => <Service serviceList={singleService}/>)
//                     }
//                 </div>
//             </div>

//             <div className="services-link text-center">
//                 <Link to='/'>
//                     View all service list
//                     <BsFillArrowRightCircleFill/>
//                 </Link>
//             </div>
//         </section>
//     );
// };

const [displayedServices, setDisplayedServices] = useState(ServicesData.slice(0, 2));
    const [showAll, setShowAll] = useState(false);

    const handleViewAllClick = () => {
        if (!showAll) {
            setDisplayedServices(ServicesData);
            setShowAll(true);
        }
    };

    return (
        <section className='service-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-6">
                        <SectionTitle title="Radiant Oral Health Confidence" subTitle="Services" />
                    </div>
                    <div className="col-lg-6 col-sm-6">
                        <p className='service-title-text'>
                            Our expert team is dedicated to enhancing your oral well-being through personalized treatments and compassionate care. Discover a dental experience that prioritizes your comfort and confidence, ensuring your smile radiates health and happiness from within. Join us in transforming your dental care journey today.
                        </p>
                    </div>
                </div>

                <div className="row">
                    {displayedServices.map((singleService, index) => (
                        <Service key={index} serviceList={singleService} />
                    ))}
                </div>
            </div>

            <div className="services-link text-center">
                {!showAll && (
                    <button onClick={handleViewAllClick} className="view-all-button mybutton">
                        View all service list
                        <BsFillArrowRightCircleFill />
                    </button>
                )}
            </div>
        </section>
    );
};

export default Services;