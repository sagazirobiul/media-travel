import React, { useState } from 'react';
import './ContactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { send } from 'emailjs-com';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/Shared/NavBar/NavBar';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';
import toast from 'react-hot-toast';
import Banner from '../../components/Shared/Banner';


const ContactUs = () => {

    const [toSend, setToSend] = useState({
        from_name: '',
        reply_to: '',
        message: '',
    });

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        const loading = toast.loading('Sending...');
        e.preventDefault();
        send(
            'service_k6sx1ik',
            'template_8107pu7',
            toSend,
            'user_hXxJoVpz12jpkJ06PX1ko'
        )
            .then((response) => {
                if (response) {
                    swal("Success!", "Thank you for keep in touch with us.", "success");
                    toast.dismiss(loading);
                }
            })
            .catch((err) => {
                swal("Oops", "Something went wrong! Please try again later :)", "error")
                toast.dismiss(loading);
            });
        document.getElementById('inputName').value = "";
        document.getElementById('inputEmail').value = "";
        document.getElementById('inputMessage').value = "";
    };


    return (
        <section>
            <NavBar />
            <Banner title="Contact Us"/>
            <div id="contact-us" className="container my-4">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 pe-4 ps-2 my-2">
                        <h3>CONTACT INFO</h3>
                        <p className="mt-4">
                            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum
                        </p>
                        <div className="phone d-flex align-items-center">
                            <div><FontAwesomeIcon on icon={faPhoneVolume} className="phnIcon" /></div>
                            <div className="phoneTitle">Phone: </div>
                            <div>+0957822109</div>
                        </div>
                        <div className="d-flex contactIcon">
                            <div className="social-icon">
                                <FontAwesomeIcon on icon={faFacebookF} />
                            </div>
                            <div className="social-icon">
                                <FontAwesomeIcon icon={faInstagram} />
                            </div>
                            <div className="social-icon">
                                <FontAwesomeIcon icon={faGooglePlusG} />
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 my-md-2 ps-4 mt-5">
                        <h3>CONTACT FORM</h3>
                        <form onSubmit={sendEmail}>
                            <div class="form-group mt-4">
                                <input value={toSend.from_name} onChange={handleChange} type="text" class="form-control" id="inputName" name="from_name" placeholder="Write Your Name" required />
                            </div>

                            <div class="form-group my-3">
                                <input value={toSend.reply_to} onChange={handleChange} type="text" class="form-control" id="inputEmail" name="reply_to" placeholder="Write Your Email" required />
                            </div>

                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="form-group mb-3">
                                        <textarea value={toSend.message} onChange={handleChange} class="form-control" rows="6" id="inputMessage" name="message" placeholder="Message" required></textarea>
                                    </div>
                                </div>
                            </div>
                            <input type="submit" value="Send Message" class="mainBtn" />
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
}

export default ContactUs;