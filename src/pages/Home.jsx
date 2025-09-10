import { Link } from "react-router-dom"
import "../css/Home.css"
import {motion} from "framer-motion"

// IMAGES
import ComputerImage from "../assets/computer-image.jpg"
import Utensils from "../assets/utensils.jpg"
import HomeTitleOverlay from "../assets/home-title-overlay.png";
import PiggyBank from "../assets/piggy-bank.jpg";
import Napkin from "../assets/napkin.jpg";

function Home(){
    return (
        <div className="home">
            <div className="home-title">
                <div className="title-image-wrapper">
                    <img src={Utensils}
                        alt="CutSort Title Utensils"
                        loading="lazy"
                        className="utensils-image"
                    />
                    <div className="title-overlay">
                        <img
                            src={HomeTitleOverlay}
                            alt="CutSort Title Logo"
                            loading="lazy"
                            className="cutsort-title-logo"
                        />
                        <h1>Save Time and Money</h1><br />
                        <h2>Effortlessly count, sort, and pack your dimes</h2>
                        <h2>DISCLAIMER: THIS IS A TEST WEBSITE</h2>
                    </div>
                </div>
            </div>

            <div className="save-money">
                <motion.div className="save-money-grid"
                    initial={{opacity: 0, x: -100}}
                    whileInView={{opacity: 1, x:0}}
                    transition={{ type: "spring", stiffness: 500, damping: 20, bounce: 0.5 }}
                    viewport={{once: true, amount: 0.3}}
                >
                    <img
                        src={PiggyBank}
                        alt="CutSort Piggy Bank"
                        loading="lazy"
                        className="cutsort-piggy-bank"
                    />
                    <div className="save-money-content">
                        <h1>Save Money</h1>
                        <p>Your customized DimeSort solution will save you money through:</p>
                        <ul>
                            <li>Reduced Labor Costs</li>
                            <li>Reduced Dimes Loss</li>
                        </ul>
                        <Link to="/cs100" className="button-link"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>
                        Learn More</Link>
                        
                        <Link to="/contact" className="button-link"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>
                        Contact Us</Link>
                    </div>
                </motion.div>
            </div>

            <div className="take-control">
                <motion.div className="take-control-grid"
                    initial={{opacity: 0, x: 100}}
                    whileInView={{opacity: 1, x:0}}
                    transition={{ type: "spring", stiffness: 500, damping: 20, bounce: 0.5 }}
                    viewport={{once: true, amount: 0.3}}
                >
                    <div className="take-control-content">
                        <h1>Take Control</h1>
                        <p>Your automated dime sorter's vision system will give you control and inventory accuracy through:</p>
                        <ul>
                            <li>Automated detection of damaged dimes</li>
                            <li>Automated uploads to inventory management systems</li>
                        </ul>
                        <Link to="/cs100" className="button-link"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>
                        Learn More</Link>
                        
                        <Link to="/contact" className="button-link"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>
                        Contact Us</Link>
                    </div>
                    <img
                        src={ComputerImage}
                        alt="CutSort Computer"
                        loading="lazy"
                        className="cutsort-computer-image"
                    />
                </motion.div>
            </div>

            <div className="features">
                {/* Reusing save-money classes for feature content */}
                <motion.div className="save-money-grid"
                    initial={{opacity: 0, x: -100}}
                    whileInView={{opacity: 1, x:0}}
                    transition={{ type: "spring", stiffness: 500, damping: 20, bounce: 0.5 }}
                    viewport={{once: true, amount: 0.3}}
                > 
                    <img
                        src={Napkin}
                        alt="CutSort Napkin"
                        loading="lazy"
                        className="cutsort-piggy-bank"
                    />
                    <div className="save-money-content">
                        <h1>Features</h1>
                        <p>Customize your dime sorter with our available features:</p>
                        <ul>
                            <li>UV Sterilization</li>
                            <li>FDA Approved Contact Surfaces</li>
                            <li>Easy Touch Screen Controls</li>
                            <li>Sort your way: Bulk Totes, Bags, Dime Sets</li>
                            <li>WE DO DIME ROLL UPS!</li>
                        </ul>
                        <Link to="/cs100" className="button-link" 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>
                        Learn More</Link>
                        <Link to="/contact" className="button-link"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>
                        Contact Us</Link>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Home