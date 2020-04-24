import React from 'react'
import Navbar from "../components/Navbar"
import "../css/bootstrap.min.css"
import "../css/font-awesome.css"
import "../css/fullpage.min.css"
import "../css/animate.css"
import "../css/templatemo-style.css"
import "../css/responsive.css"

function Layout({children}) {
    return (
        <div>
        <Navbar />
        <div id="fullpage" className="fullpage-default">
            <div className="section animated-row" data-section="slide01">
                <div className="section-inner">
                    <div className="welcome-box">
                        <span>Hello, welcome to</span>
                        <h1>{children}</h1>
                        <p>This is a clean and modern HTML5 template with a video background. You can use this layout for your profile page. Please spread a word about templatemo to your friends. Thank you.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Layout
