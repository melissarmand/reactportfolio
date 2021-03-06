import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'


function Footer() {
    return (
        <div className= "footer" style={{display: 'flex', justifyContent: 'center'}}>
            <div className= "container" style={{display: 'flex', justifyContent: 'center'}}>
                <div className= "row col-lg-12" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className= "col-lg-4 col-md-4 col-sm-4">
                        <h3 className="text-center" style= {{color:'white'}}>Contact</h3>
                        <ul className= "list-unstyled" style={{justifyContent: 'center'}}>
                            <li className="text-center" style= {{color: 'white'}}>melissarmand@gmail.com</li>
                            <li className="text-center"style= {{color: 'white'}}>772-607-4665</li>
                        </ul>                        
                    </div>
                    <div className= "col-lg-4 col-md-4 col-sm-4" style={{justifyContent: 'center'}}>
                        <h2 className="text-center" style={{color: 'white'}}>Melissa Armand</h2>
                        <p className= "text-center" style={{color: 'white'}}>© Copyright 2021 - Melissa Armand. All Rights Reserved</p>                        
                    </div>
                    <div className= "col-lg-4 col-md-4 col-sm-4">
                        <h3 className="text-center" style={{color: 'white'}}>Websites</h3>
                        <ul className= "list-unstyled" style={{justifyContent: 'center'}}>
                            <li className="text-center" style= {{color: 'white'}}>
                                <a  className="footer-links" href = "https://github.com/melissarmand">Github</a>
                            </li>
                            <li className = "text-center" style= {{color: 'white'}}>
                                <a className= "footer-links" href = "https://www.linkedin.com/in/melissa-armand-4477858b/">Linked In</a>
                            </li>
                        </ul>                        
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Footer