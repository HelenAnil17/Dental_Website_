import React, { useState } from 'react';
import './ContactForm.scss';
import axios from 'axios';
import icon from '../../assets/banner/icons/Calling.png';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        department: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const response = await axios.post('https://formspree.io/f/xzbnnknn', formData);
            if (response.status === 200) {
                setStatus('Thanks for your submission!');
                setFormData({
                    name: '',
                    email: '',
                    service: '',
                    department: '',
                    message: ''
                });
            } else {
                setStatus('Submission failed. Please try again.');
            }
        } catch (error) {
            setStatus('Submission failed. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-lg-6">
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your name..."
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <label>E-mail Address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email address..."
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <label>Service</label>
                        <select
                            className="form-control"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Service</option>
                            <option>Teeth Whitening</option>
                            <option>Teeth Cleaning</option>
                            <option>Orthodontics</option>
                            <option>Dental Implants</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <label>Department</label>
                        <select
                            className="form-control"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Department</option>
                            <option>General Dentistry</option>
                            <option>Orthodontics</option>
                            <option>Periodontics</option>
                            <option>Oral Surgery</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group">
                        <label>Messages</label>
                        <textarea
                            className="form-control"
                            placeholder='Enter your messages...'
                            rows="3"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                </div>

                <div className="col-lg-6">
                    <button type="submit" className="btn appointment-btn">Book an appointment</button>
                    <p>{status}</p>
                </div>
                <div className="col-lg-6">
                    <div className="appointment-call">
                        <div className='icon'>
                            <img src={icon} alt="icon" />
                        </div>
                        <div className='call-text'>
                            <p>Dental Emergency Service</p>
                            <h6>03 543 298 024</h6>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;


// import React from 'react';
// import './ContactForm.scss';
// import icon from '../../assets/banner/icons/Calling.png';

// const ContactForm = () => {
//     return (
//         <form>
//             <div className="row">
//                 <div className="col-lg-6">
//                     <div class="form-group">
//                         <label>Name</label>
//                         <input type="email" class="form-control" placeholder="Enter your name..." />
//                     </div>
//                 </div>
//                 <div className="col-lg-6">
//                     <div class="form-group">
//                         <label>E-mail Address</label>
//                         <input type="email" class="form-control" placeholder="Enter email address..." />
//                     </div>
//                 </div>
//                 <div className="col-lg-6">
//                     <div class="form-group">
//                         <label>Service</label>
//                         <select class="form-control">
//                             <option>Teeth Whitening</option>
//                             <option>Teeth Whitening</option>
//                             <option>Teeth Whitening</option>
//                             <option>Teeth Whitening</option>
//                         </select>
//                     </div>
//                 </div>
//                 <div className="col-lg-6">
//                     <div class="form-group">
//                         <label>Department</label>
//                         <select class="form-control">
//                             <option>Select Department</option>
//                             <option>Select Department</option>
//                             <option>Select Department</option>
//                             <option>Select Department</option>
//                         </select>
//                     </div>
//                 </div>
//                 <div className="col-lg-12">
//                     <div class="form-group">
//                         <label for="exampleFormControlTextarea1">Messages</label>
//                         <textarea class="form-control" placeholder='Enter your messages...' rows="3"></textarea>
//                     </div>
//                 </div>

//                 <div className="col-lg-6">
//                     <button type="submit" class="btn appointment-btn">Book an appointment</button>
//                 </div>
//                 <div className="col-lg-6">
//                     <div className="appointment-call">
//                         <div className='icon'>
//                             <img src={icon} alt="icon" />
//                         </div>
//                         <div className='call-text'>
//                             <p>Dental Emergency Service</p>
//                             <h6>03 543 298 024</h6>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </form>
//     );
// };

// export default ContactForm;