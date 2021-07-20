import React from 'react'
import './style/style.css'
import banner from '../assets/Group 195.png'
import banner2 from '../assets/Group 228.png'

const Mainbody = () => {
    return (
        
<>
        <div className="org-banner">

            <div className="row">
            <div className="col">
                <div className="main-body">    
                    <div className="Healthy-life-with">Healthy life with</div>
                    <div className="Nature-Organic">Nature Organic</div>
                </div>
                <div className="Vegetable">Vegetable are the edible parts of a plant that is used in cooking or can be eaten now</div>
                <div className="btn" href="#"> <p className="btn2">Explore Now</p></div>   
            </div>
            <div className="col" className="group1">
                <img src={banner}/>
                
            </div>
            <div className="col" className="group2">
            <img src={banner2}/>

            </div>
            
        </div>
        </div>
        </>
    )
}

export default Mainbody
