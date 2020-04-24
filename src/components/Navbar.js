import React from 'react'
import {Link} from "gatsby"

const Navbar = () => {
    return (
        <div>
            <header id="header">
                <div className="container-fluid">
                    <div className="navbar">
                        <Link to="/" id="logo" title="Elegance by TemplateMo">
                            Elegance
                        </Link>
                        <div className="navigation-row">
                            <nav id="navigation">
                                <button type="button" className="navbar-toggle"> <i className="fa fa-bars"></i> </button>
                                <div className="nav-box navbar-collapse">
                                    <ul className="navigation-menu nav navbar-nav navbars" id="nav">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link  to="/about/">About Me</Link></li>
                                        <li><a>Services</a></li>
                                        <li><a>My Skills</a></li>
                                        <li><a>My Work</a></li>
                                        <li><a>Testimonials</a></li>
                                        <li><a>Contact Me</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar
