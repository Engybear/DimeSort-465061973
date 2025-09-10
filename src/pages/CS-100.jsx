import "../css/CS100.css"
import Machine1 from "../assets/machine1.png"
import Machine2 from "../assets/machine2.jpg";
import VisionEye from "../assets/vision-eye.jpg";

function CS100(){
    return (
        <div className="cs100">
            <div className="cs100-title">
                <h1 color="white">DS100</h1>
            </div>
                <div className="wavy-divider wave"></div>
            
            <div className="section1">
                <div className="section1-grid">
                    <div className="section1-content">
                        <h1>DimeSort's conveyor fed, bulk sort solution</h1><br />
                        <h2>Features</h2>
                        <ul>
                            <li>Touch Screen Controls</li>
                            <li>Standard 120V Power Supply</li>
                            <li>Sorts as Many Sets as You Need</li>
                            <li>Sorts Up to 6 dimes per Set</li>
                            <li>Optional UV Sterilization</li>
                        </ul>
                    </div>
                    <img
                        src={Machine1}
                        alt="CutSort Machine 1"
                        loading="lazy"
                        className="section1-machine-image"
                    />
                </div>
            </div>
            
            <div className="section2">
                <div className="section2-grid">
                    <img
                        src={Machine2}
                        alt="CutSort Machine 2"
                        loading="lazy"
                        className="section2-machine-image"
                    />
                    <div className="section2-content">
                        <div className="section2-image-wrapper">
                            <h2>Machine Vision System</h2>
                        
                            <img
                                src={VisionEye}
                                alt="CutSort Eye"
                                loading="lazy"
                                className="section2-eye-image"
                            />
                        </div>
                        <ul>
                            <li>Sorts up to 2400 dimes per hour</li>
                            <li>Counting and Sorting Efficiency Rate Greater than 99%</li>
                            <li>Unknown and Damaged Items Sent to Reject Container for Secondary Inspection</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CS100