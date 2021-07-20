import React from 'react'
import image from '../assets/pogo.png'
import './style/style.css'
import boximg from '../assets/boximage.png'
import boximg1 from '../assets/boximage1.png'


const Rectangle1 = () => {
    return (
        <div>
        <div className="rectangle1">
            <div className="pogo">
                <img src={image} />

            </div>
            <div className="welcome">Welcome to Nature</div>
            <div className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
            </div>
            
          
            
        </div>

        <div className ="box">
                
                <div className="box1"><img src={boximg}/>
                </div>
                <div className="box1"><img src={boximg1}/>
                </div>
                <div className="box1"><img src={boximg}/>
                </div>
                <div className="box1"><img src={boximg}/>
         </div>
        
        
            </div>

        </div>
    )
}

export default Rectangle1
