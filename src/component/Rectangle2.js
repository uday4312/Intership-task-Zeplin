import React from 'react'
import './style/style.css'
import group1 from '../assets/Group 39.png'
import group2 from '../assets/Group 55.png'
import group3 from '../assets/Group 64.png'
import group4 from '../assets/Group 86.png'

const Rectangle2 = () => {
    return (
        <div className="rectangle2">
        <div>
             <div className="proudly">Proudly presented by</div>
            <div className="Lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
            </div>
            

           <div>
        </div>
        <div className="photo">
            
            <img src={group1}/>
            <img src={group3}/>
            <img src={group2}/>
            <img src={group3}/>
            <img src={group1}/>


        </div>
        <span className="dot"></span>
         <span className="dot"></span>
         <span className="dot"></span>
         <span className="dot"></span>
        </div>
       <span className="lastimage"><img src={group4}/></span>

       </div>
    
    )
}

export default Rectangle2
