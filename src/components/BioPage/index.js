import React from "react";
import "./style.css";
import Profile from "../../images/IMG_3167.jpg";


export default function BioPage() {
    return (
        <>
            <div className="bio-container">
            <div className="prof">
                    <img src={Profile} width="320" height="270" alt="profile" />
                </div>
                <div className="bio">
                    <h2>Hey,</h2>
                    <p>My name is Mohamed Abukar and I am a 20 year old Full Stack Web Developer from Apple Valley, MN.</p>
                    <h2>Hobbies</h2>
                    <p>Playing Basketball, gaming, spending time with family, learning new skills.</p>
                    <h2>Skills</h2>
                    <p>Javascript, jquery, css, html and other skills listed in the resume tab</p>
                </div>
                
                <div className="bio-section">
                    <h2>Intro</h2>
                    <p>I became a Web Developer by taking a bootcamp over the summer of 2021. The reason I did this is because I was interested in coding and I had a friend who was in this field. Now my goal is to keep on fine tuning my skills and excel as a developer as far as I can.</p>
                    <h2>Education</h2>
                    <p>I completed the Full Stack Web Developement bootcamp that the Unviversity of Minnesota was offering. In this bootcamp we learned important skills such as creating applications containing jquery, javascript, react, css and html. It was a 12 week intensive course which was 20 hours a week of class time.</p>
                    <h2>Other Experiences</h2>
                    <p>I've worked in a homecare facility for the past year where I've been taking care of mentally unstable and vulnerable patients. This has taught me to be very patient and understanding.</p>
                </div>
            </div>
        </>
    )
}