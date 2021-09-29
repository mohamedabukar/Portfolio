import React from "react";
import "./style.css";
import ProfileImage from "../ProfileImage";


export default function BioPage() {
    return (
        <>
            <div className="bio-container row">
                <div className="prof col-4">
                    <ProfileImage />
                </div>
                <div className="bio-section col-4">
                    <h2>About Me</h2>
                    <p>My name is Mohamed Abukar and I am a 20 year old Full Stack Web Developer from Apple Valley, MN.</p>
                    <h2>Hobbies</h2>
                    <p>Playing Basketball, gaming, spending time with family, learning new skills.</p>
                    <h2>Skills</h2>
                    <p>Javascript, jquery, css, html and other skills listed in the resume tab</p>
                </div>
                <div className="bio-section col-4">
                    <h2>Education</h2>
                    <p>I enrolled in the Full Stack Web Developement bootcamp that the Unviversity of Minnesota was offering. In this bootcamp we learned important skills such as creating applications containing jquery, javascript, react, css and html. It was a 12 week intensive course which was 20 hours a week of class time.</p>
                    <h2>Other Experiences</h2>
                    <p>I've worked in a homecare facility for the past year where i've been taking care of mentaly unstable and vulnerable patients. This has taught me to be very patient and understanding.</p>
                </div>
            </div>
        </>
    )
}