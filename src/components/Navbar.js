import React from 'react'
import {Link} from "gatsby"
import links from '../constants/link'

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
                                        {links.map((item, index) =>{
                                            return(<li><Link to={item.path}>{item.text}</Link></li>)
                                        })}
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
