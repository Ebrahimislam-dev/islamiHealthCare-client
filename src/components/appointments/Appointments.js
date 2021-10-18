import React from 'react';
import './Appointment.css'
const Appointments = () => {
    return (
        <div className="container-fluid">
            <div className="onlineDr">
                <h3 className="heading ">ONLINE DOCTOR<span className="text-danger fs-4"> APPOINTMENT</span></h3>
                <div className="text-start container">
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
                    </ul>
                </div>
            </div>

            <div className="offlineDr">
                <h3 className="heading">OFFLINE DOCTOR<span className="text-danger fs-4"> APPOINTMENT</span></h3>
                <div>
                    <form className="row g-3 ms-5">
                        <div className="d-flex col-md-8">
                            <label for="inputEmail4" className="form-label me-5">Email: </label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="d-flex col-md-8">
                            <label htmlFor="inputtext" className="form-label me-5">Name</label>
                            <input type="text" className="form-control" id="inputtext" />
                        </div>
                        <div className="d-flex col-8">
                            <label htmlFor="inputDr" className="form-label">Doctor Name</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Input Your Dr Name " />
                        </div>
                        <div class="d-flex col-8 mb-3">
                            <label htmlFor="inputDr" className="form-label">Prescription</label>
                            <input type="file" class="form-control" id="inputGroupFile01"  placeholder="Upload Previous Prescription Given by Dr" />
                        </div>
                        <div className="d-flex col-8">
                            <label htmlFor="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>

                        <div className="d-flex col-md-8">
                            <label htmlFor="inputCity" className="form-label me-5">City</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div><br />
                        <div className=" d-flex col-md-8">
                            <label htmlFor="inputState" className="form-label me-5">State</label>
                            <select id="inputState" className="form-select">
                                <option selected>Chittagong</option>
                                <option>Dhaka</option>
                                <option>Feni</option>
                                <option>Barisal</option>
                                <option>Rajshahi</option>
                                <option>Jessore</option>
                            </select>
                        </div>

                        <div className="col-8">
                            <div className="form-check d-flex">
                                <input className="form-check-input me-5" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" htmlFor="gridCheck">
                                    Accept All Privecy & Policy
                                </label>
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