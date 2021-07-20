import React from 'react'
import sideimg from '../assets/Group 134.png'
import women from '../assets/women.png'
import image from '../assets/pogo.png'


const Rectangle3 = () => {
    return (
        <div>
        <>
        
            <div>
                <div className="sideimg">
                    <img src={sideimg} />
                </div>
            </div>
            <div>
                <span>
                    <img className="womenimg" src={women} />
                </span>

            </div>
            <span className="john">Jane Doe</span>
            <div>
                <span className="star">&#9734;&#9734;&#9734;&#9734;&#9734;

                </span></div>
            <div className="thank">
                Thank you for all the amazing produce and products you deliver each week…
                you make my life so easy an bring goodness into our family eating.
                I’ve been roasting a lot of brussel sprouts and
            </div>
            
        </>
        <div>
        <div className="rectangle5">
            <div className="pogo2">
                <img src={image} />

            </div>
            <div className="read">Read Our Blog</div>
            <div className="lorem2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
            </div>
            </div>
        </div>
        </div>
    )
}

export default Rectangle3
