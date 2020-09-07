import React from 'react'
import './contact.css'
import SimpleMap from './map/Googlemap'
import Footer from '../Footer/Footer'
import '../resources/Home/style.scss'
import {withRouter} from 'react-router'

class ContactUs extends React.Component {

    render() {
        return (
            <div>
                {/* start headinection */}
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-md-12 heading">
                            <h1>
                                Contact Us
                </h1>
                        </div>
                    </div>
                    {/* End heading */}



                    {/* middle start */}

                    <div className='row middle'>

                        <div className="col-md-7 left">

                            <div className='first'>
                                Get in Touch
                             </div>

                            <div className="para">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore magni autem ea reprehenderit quae, quisquam facere ipsam iste est voluptatem. Architecto animi accusantium nulla quam id sed exercitationem maxime harum?
                           </p>
                            </div>

                            <div className="iconAndText">

                                <div className="iconadj">
                                    <i className="fa fa-map-marker MarkerAdj" ></i>
                                </div>
                                <div>
                                    <h3>Visit Us:</h3>
                                    <span>27 Division St, New York, NY 10002, USA</span>
                                </div>

                            </div>
                            <div className="iconAndText">

                                <div className="iconadjMail">
                                    <i className="fa fa-envelope MarkerAdj" ></i>
                                </div>
                                <div>
                                    <h3>Mail Us:</h3>
                                    <span>seofy@mail.com</span>
                                </div>

                            </div>

                            <div className="iconAndText">

                                <div className="iconadj">
                                    <i className="fa fa-phone MarkerAdj" ></i>
                                </div>
                                <div>
                                    <h3>Phone Us:</h3>
                                    <span>+8 (123) 985 789</span>
                                </div>

                            </div>




                        </div>
                        <div className="col-md-4 right">


                            <div className="rightwhole">

                                <span class="custom-weight">Drop Us a Line</span>

                                <div className="adjustInput" >
                                    <input placeholder="Name *" type="text" className="haha" />
                                </div>
                                <div className="adjustInput1" >
                                    <input placeholder="Name *" type="text" className="haha" />
                                </div>


                                <div className="adjustInput1">
                                    <textarea cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea adjustmentOftexterea" aria-invalid="false" placeholder="Message..."></textarea>
                                </div>

                                <button className="btnadj">
                                    SEND A Message
                                    </button>
                            </div>


                        </div>





                    </div>
                    {/* middle section end */}


                    {/* Map */}

                    <div className="row">

                        <div className="col-md-12 last">
                            {/* <SimpleMap/> */}
                            <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d13617.80323037922!2d73.0698256038707!3d31.429253995896605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m5!1s0x39224299c2a3f9c9%3A0x1f10426b658597b5!2sMeezan%20Executive%20Tower%2C%20Liaqat%20Road%2C%20Faisalabad!3m2!1d31.4244445!2d73.0767573!4m0!5e0!3m2!1sen!2s!4v1598966062944!5m2!1sen!2s" width="1350" height="450" frameborder="0" style={{border:'o'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217897.55247864893!2d72.94921578339455!3d31.42378830022853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a895a55ca9%3A0xdec58f88932671c6!2sFaisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1596527818474!5m2!1sen!2s" className="AdjMap" frameborder="0" style={{ border: '0' }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}

                        </div>

                    </div>

             

                    {/* Map end */}

                </div>
            </div>

        )
    }

}

export default  (ContactUs)