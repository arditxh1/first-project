import React from 'react'
import Navbar from "../components/Navbar"
import "../css/bootstrap.min.css"
import "../css/font-awesome.css"
import "../css/fullpage.min.css"
import "../css/animate.css"
import "../css/templatemo-style.css"
import "../css/responsive.css"

import video from "../media/video-bg.mp4"

function Layout({children}) {
    return (
        <div id="video">

        <video autoPlay muted loop id="myVideo">
            <source src={video} type="video/mp4" />
         </video>
         
        <Navbar />

            <div id="fullpage" className="fullpage-default">
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout
