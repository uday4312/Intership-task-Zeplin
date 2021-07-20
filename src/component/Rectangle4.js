import React from 'react'
import './style/style.css'
import pic1 from '../assets/grid1.png'
import pic2 from '../assets/grid2.png'
import pic3 from '../assets/grid3.png'

const Rectangle4 = () => {
    return (
        <div>
            <div className="container">
            <div className="grid1">
                <span className="pic1"><img src={pic1} /></span>
                <span className="blog">Blog Post One</span>
                <span className="lorem3">Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed
                    do eiusmod.</span>
                    <span className="More">Read More</span>
            </div>
            <div className="grid2">
                <span className="pic1"><img src={pic2} /></span>
                <span className="blog">Blog Post One</span>
                <span className="lorem3">Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed
                    do eiusmod.</span>
                    <span className="More">Read More</span>
            </div>
            <div className="grid3">
                <span className="pic1"><img src={pic3} /></span>
                <span className="blog">Blog Post One</span>
                <span className="lorem3">Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed
                    do eiusmod.</span>
                    <span className="More">Read More</span>
            </div>

            </div>

        </div>
    )
}

export default Rectangle4
