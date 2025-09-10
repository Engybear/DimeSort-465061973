import { Link } from "react-router-dom"
import "../css/Footer.css"

import MainLogo from "../assets/main-cutsort-logo.png"

function Footer() {
    return <div className="footer">
        <div className="address">
            <p>Street Name,</p>
            <p>City, PR Postal</p>
            <p>Country</p>
        </div>
        <div className="cutsort">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>
                <img
                    src={MainLogo}
                    alt="DimeSort Logo"
                    loading="lazy"
                    className="footer-logo"
                />
            </Link>
        </div>
        <div className="trade-mark">
            <p>© 2024 DimeSort Inc. All rights reserved.</p>
        </div>
    </div>
}

export default Footer