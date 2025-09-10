import "../css/Questionnaire.css";
import MainLogo from "../assets/main-cutsort-logo.png"
import Popup from "../components/Popup.jsx";
import { useState } from "react";

function Questionnaire(){
    const [showPopup, setShowPopup] = useState(false)
    const triggerPopup = () => {
        setShowPopup(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const forData = new FormData(e.currentTarget);

        const data = {};
        for (let [key, value] of forData.entries()) {
            if (data[key]) { //for handling checkboxes, data already exists
                if (Array.isArray(data[key])) { 
                    data[key].push(value);
                } else {
                    data[key] = [data[key], value];
                }
            } else {
                data[key] = value;
            }
        }
        console.log("Form data:", data);
        
        e.currentTarget.reset();
        triggerPopup();
    }

    return (
    
        <div className="questionnaire">
            <div className="popup-container">
                {showPopup && (
                    <Popup
                        message="Form Submitted Successfully."
                        onClose={() => setShowPopup(false)}
                    />
                )}
            </div>
            
            <div className="questionnaire-title">
                <img
                    src={MainLogo}
                    alt="CutSort Logo"
                    loading="lazy"
                    className="questionnaire-logo"
                />
                <h2>Let's Work Together</h2><br />
                <p>Please take a moment to fill out the form below to help us better
                    understand your dime sorting and counting needs. 
                    Your responses will allow us to tailor our custom manufactured 
                    solution to best fit your requirements. 
                    Thank you for providing us with the necessary information.
                </p>
            </div>

            <form className="questionnaire-form" onSubmit={handleSubmit}>
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
                
                <label>Email <span className="required">(required)</span></label><br />
                <input name="email" type="text" required></input><br />
                
                <label>Phone</label><br />
                <input name="phone" type="text"></input><br />

                <label>How many dimes do you need to sort per hour?</label><br />
                <input name="sort-per-hour" type="text"></input><br />
                <label>How many different type/styles of dimes do you need to sort?</label><br />
                <input name="num-of-types" type="text"></input><br />
                <label>What is the length of the longest piece of dimes you need to sort?</label><br />
                <input name="max-len" type="text"></input><br />
                <label>What is the width of the widest piece of dimes you need to sort?</label><br />
                <input name="max-width" type="text"></input><br />
                <label>What is the height of the tallest piece of dimes you need to sort when you lay them flat on the table?</label><br />
                <input name="max-height" type="text"></input><br />

                <div className="radio-group">
                    <label> Are you planning on sorting dangerous dimes?</label><br />
                    <label><input type="radio" id="yes-knives" name="steak-agreement" value="Yes" />Yes</label>
                    <label><input type="radio" id="no-knives" name="steak-agreement" value="No" /> No</label><br />
                </div>

                <div className="radio-group">      
                    <label> Do you want UV sterilization in the sorting machine?</label><br />
                    <label><input type="radio" id="yes-UV" name="UV-agreement" value="Yes" />Yes</label>
                    <label><input type="radio" id="no-UV" name="UV-agreement" value="No" />No</label><br />
                </div>
                <br />
                
                <div className="checkbox-group">      
                
                    <label> How do you want to feed the dimes into the sorter?</label><br />
                    
                    <label className="checkbox-item">
                        <input type="checkbox" name="feed-type" value="Bulk-Fed" />
                        Bulk feed into a hopper
                    </label>
                    <label className="checkbox-item">                 
                        <input type="checkbox" name="feed-type" value="Hand-Fed" /> 
                        Hand fed one at a time
                    </label>
                    <label className="checkbox-item">
                        <input type="checkbox" name="feed-type" value="Convery-Fed" />
                        Fed by a conveyor from another machine or upstream process
                    </label>
                    
                </div>
                
                <label> What is feeding the sorter, and if using a conveyor, what is the speed?</label><br />
                <label className="required"> Only answer if you selected "Fed by a conveyor from another machine or upstream process" in the previous question</label><br />
                <input name="conveyor-speed" type="text"></input>
                <br />
                <br />

                <div className="checkbox-group">      
                    <label> How do you want to sort the dimes?</label><br />
                    <label className="checkbox-item"><input type="checkbox" name="sort-type" value="bin-sort" /> Bulk sort by type into bins</label>
                    <label className="checkbox-item"><input type="checkbox" name="sort-type" value="bag-sort" /> Bulk sort by type into bags</label>
                    <label className="checkbox-item"><input type="checkbox" name="sort-type" value="set-sort" /> Sort into sets</label>
                </div>
                
                <div className="checkbox-group">
                    <label> If you want your dimes sorted into sets, do you want:</label><br />
                    <label className="required"> Only answer if you selected "sort into sets" in the previous question</label><br />
                    <label className="checkbox-item"><input type="checkbox" name="sort-set-type" value="napkin" /> A napkin ring with the set</label>
                    <label className="checkbox-item"><input type="checkbox" name="sort-set-type" value="bag" /> The set sealed in a bag</label>
                    <label className="checkbox-item"><input type="checkbox" name="sort-set-type" value="flow-wrapped" /> The set flow wrapped</label>
                
                    <label className="required"> If not a bag or flow wrapped, how do you want to store the set?</label><br />
                    <input name="custom-store-set" type="text"></input><br />
                
                </div>

                <div className="checkbox-group">
                    <label> How do you handle your count data for each style?</label><br />
                    <label className="required"> You may choose more than one</label><br />

                    <label className="checkbox-item"><input type="checkbox" name="data-handle" value="touch-screen" /> Display on the HMI (Touch Screen)</label>
                    <label className="checkbox-item"><input type="checkbox" name="data-handle" value="usb" /> Saved on a USB</label>
                    <label className="checkbox-item"><input type="checkbox" name="data-handle" value="network" /> Uploaded to your internal network</label>
                    <label className="checkbox-item"><input type="checkbox" name="data-handle" value="cloud" /> Uploaded to the cloud or inventory management system</label>
                </div>
                
                <label> Anything else we should know?</label><br />
                <textarea rows="5"></textarea><br />
                
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Questionnaire