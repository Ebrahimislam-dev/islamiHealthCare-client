import React from 'react';
import './Appointment.css'
const Appointments = () => {
    return (
        <div className="container-fluid">
            <div className="onlineDr">
                <h3 className="heading ">ONLINE DOCTOR<span className="text-danger fs-4"> APPOINTMENT</span></h3>
                <div className="text-start container mb-2">
                    <h4 className="fw-bold fs-3"><i class="fas fa-arrows-alt"></i> What do you need <span className="text-danger">?</span></h4>
                    <ul className="fs-4">
                        <li>Internet access.</li>
                        <li>Smart Phone or Computer.</li>
                        <li>For Skype : For Android Smart Phones: Install Skype from Google play store For iPhone install Skype from Apple App Store. Search it.uhlbd in Skype and add it in your contact list. Then make a video call. </li>
                        <li>  For WhatsApp : For Android Smart Phones: Install WhatsApp from Google play store. For iPhone install WhatsApp from Apple App Store. A WhatsApp number will be given after the appointment is confirmed.</li>

                    </ul>
                    <br /><br />
                    <h4 className="fw-bold fs-3"><i class="fas fa-arrows-alt"></i> Easy Steps to do a Tele/Video Consultation from Anywhere</h4>
                    <ul className="fs-4">
                        <li>For telemedicine appointment you can call 10666 or 02 22 22 62 466</li>
                        <li>After the initial appointment slot booking from United Hospital, you will need to pay in following ways:
                            <br /> - By bKash mentioning his/her patient ID to 01914001264 (UHL Billing bKash Number)             <br />
                            - By credit card, debit card, mobile banking, internet banking from payment.uhlbd.com</li>
                        <li>Need to call to verify the payment. Unless payment is made 5-6 hours before telemedicine appointment time, appointment will not be confirmed</li>
                        <li>Patient can send his/her Investigations prior to TM for doctor assessment to appointment@ihc.com</li>
                    <br />
                    </ul>
                </div>
            </div>

            <div className="offlineDr">
                <h3 className="heading ">OFFLINE DOCTOR<span className="text-danger fs-4"> APPOINTMENT</span></h3>
                <div>
                    <form className="row g-3 ms-5 justify-content-center">
                        <div className="d-flex justify-content-evenly col-md-8">
                            <div><label for="inputEmail4" className="form-label me-5">Email: </label></div>
                            <div>
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Enter a valaid Email" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-evenly align-items-center col-md-8">
                            <div>  <label htmlFor="inputtext" className="form-label me-5">Name</label></div>
                            <div><input type="text" className="form-control" id="inputtext" placeholder="Enter Your Full Name" /> </div>
                        </div>
                        <div className="d-flex justify-content-evenly col-md-8">
                            <div><label htmlFor="inputDr" className="form-label">Doctor Name</label></div>
                            <div> <input type="text" className="form-control" id="inputAddress2" placeholder="Input Your Dr Name " /></div>
                        </div>
                        <div class="d-flex justify-content-evenly col-md-8">
                            <div> <label htmlFor="inputDr" className="form-label me-4">Upload Previous Prescription Given by Dr</label> </div>
                            <div> <input placeholder="" type="file" class="form-control" id="inputGroupFile01" /> </div>
                        </div>
                        <div className="d-flex justify-content-evenly col-md-8">
                            <div><label htmlFor="inputAddress" className="form-label me-5">Address</label></div>
                            <div><input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" /></div>
                        </div>

                        <div className="d-flex justify-content-around  col-md-7">
                            <div> <label htmlFor="inputCity" className="form-label ">City</label></div>
                            <div>  <select id="inputState" className="form-select me-5">
                                <option selected>Chittagong</option>
                                <option>Dhaka</option>
                                <option>Feni</option>
                                <option>Barisal</option>
                                <option>Rajshahi</option>
                                <option>Jessore</option>
                            </select> </div>
                        </div><br />
                        <div className=" d-flex justify-content-around  col-md-7">
                            <div><label htmlFor="inputState" className="form-label ">Branch</label> </div>
                            <div> <select id="inputState" className="form-select me-5">
                                <option selected>Agrabad</option>
                                <option>Motijil</option>
                                <option>Bonani</option>
                                <option>Tank Road</option>
                                <option>Khulshi</option>
                                <option>Modhupur</option>
                            </select> </div>
                        </div>

                        <div className="col-8">
                            <div className="form-check d-flex justify-content-center">
                                <div><input className="form-check-input me-5" type="checkbox" id="gridCheck" /></div>
                                <div> <label className="form-check-label" htmlFor="gridCheck">
                                    Accept All Privecy & Policy
                                </label></div>
                            </div>
                        </div>
                        <div className="col-8">
                            <button type="submit" className="btn btn-danger px-5 py-2 mb-2">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Appointments;