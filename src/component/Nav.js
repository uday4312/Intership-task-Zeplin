import React from 'react'
import './style/style.css'
import logo from '../assets/logo.png'

// import MenuIcon from '@material-ui/icons/Menu';



    

// import MenuIcon from '@material-ui/icons/Menu';



const Nav = () => {
  
    return (
    <div>
        <div className="navbar">
            <nav>
            <div className="img-container">
                    
                    <div href="#"><img src={logo}/></div>
                    </div>
                    <div className="heading">
                        <a className="organic">organic</a></div>  
            
                <ul type="none">
                    
                   
                    
                   
                    <li><a href="#">Home</a></li>  
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Blog</a></li> 
                    <li><a href="#">About Us</a></li>
                    <li><a className="contact" >Contact</a></li> 
                    
                    
                </ul>
            </nav>
        </div>
        </div>
    )
}

export default Nav

    
        
        
        
        

