import "../css/Contact.css";
import ContactPhone from "../assets/contact-phone.jpg";
import { useState } from "react";
import Popup from "../components/Popup.jsx";

function Contact(){
    const [showPopup, setShowPopup] = useState(false)
    const triggerPopup = () => {
        setShowPopup(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const forData = new FormData(e.currentTarget);

        const data = {};
        for (let [key, value] of forData.entries()) {
            data[key] = value;
        }
        console.log("Form data:", data);

        e.currentTarget.reset();
        triggerPopup(); 
    }

    return (
        <div className="contact-grid">
            <div className="popup-container">
                {showPopup && (
                    <Popup
                        message="Form Submitted Successfully."
                        onClose={() => setShowPopup(false)}
                    />
                )}
            </div>


            <div className="contact-left">
                <div className="contact-title">
                    <h1>Contact Us</h1>
                    <p>For more information on how DimeSort can streamline your dime
                        inventory process, improve efficiency, and reduce costs for your
                        business, please contact us today. We are ready to assist you in
                        finding the perfect solution for your business.
                    </p>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label>Name <span className="required">(required)</span></label><br />
                    
                    <div className="name-row">
                        <div className="name-field">
                            <label>First Name</label><br />
                            <input name="first-name" type="text" required></input><br />
                        </div>
                    
                        <div className="name-field">
                            <label>Last Name</label><br />
                            <input name="last-name" type="text" required></input><br />
                        </div>
                    </div>
                    
                    <label>Company Name</label><br />
                    <input name="company-name" type="text"></input><br />

                    <label>Email <span className="required">(required)</span></label><br />
                    <input name="email" type="text" required></input><br />
                    
                    <label>Phone</label><br />
                    <input name="phone" type="text"></input><br />
                    
                    <label>Message <span className="required">(required)</span></label><br />
                    <textarea name="message" rows="5" required></textarea><br />
                    
                    <button type="submit">Send</button>
                </form>
            </div>
            <div className="contact-right">
                <img
                    src={ContactPhone}
                    alt="Contact CutSort"
                    loading="lazy"
                    className="contact-image"
                />
            </div>
        </div>
    )
}

export default Contact