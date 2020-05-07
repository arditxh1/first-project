import React from 'react'
import Layout from "../components/Layout"
import cards from "../api/about-cards.js"
import profile from "../media/profile-girl.jpg"

const about = () => {
    return (
        <Layout>
        <div className="section">
            <div className="section-inner">
                <div className="about-section">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 wide-col-laptop">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="about-contentbox">
                                        <div>
                                            <span>About Me</span>
                                            <h2>Who am i?</h2>
                                            <p>Credits go to <strong>Unsplash</strong> and <strong>Pexels</strong> for photos and video used in this template. Vivamus tincidunt, augue rutrum convallis volutpat, massa lacus tempus leo.</p>
                                        </div>
                                        <div className="facts-list owl-carousel">
                                            <div className="item">
                                            {cards.map((item, index) =>{
                                                return(<div className="counter-box">
                                                        <i className="fa fa-trophy counter-icon" aria-hidden="true"></i><span className="count-number">{item.amount}</span> {item.title}
                                                    </div>)
                                            })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <figure className="about-img"><img src={profile} className="rounded" alt="" /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Layout>
    )
}

export default about
