import React from 'react'
import { Nav } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import myphoto from './myphoto.jpg'


function AboutMe (){

    return (
        <div className='container'>
            <h1 style = {{color: 'white', fontSize: "72px"}}>About Me</h1>
            <p className="text-left" style = {{color: 'white', fontSize: "18px"}}> Hello! I am Melissa and I am a recent attendee of the Full Stack Coding Bootcamp from the University of North Carolina - Charlotte.
             I am an operations analyst and look forward to applying both my background and my coding skills to my next endeavor as a web and app developer. Please look around and reach out if you have any questions.
            </p>
            <p></p>
            <div style= {{justifyContent: 'center', display: 'flex'}}>
                <Image src= {myphoto} roundedCircle></Image>
            </div>



        </div>
    )
}

export default AboutMe