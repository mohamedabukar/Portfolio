import React from "react";
import "./main.css";

export default function Apps() {
    return (
        <>
            <section className="apps">
                <div className="project">
                    <a href="https://m-ray-ofsunshine.github.io/actor-database/" target="_blank" rel="noreferrer">
                        <div className="project1"></div>
                    </a>
                    <h2>Actor Database</h2>
                    <p>This is an actor database that allows you to search an actors and get information about them such as their best movies, bio, and twitter feed.</p>
                    <p>Click image for deployed application</p>
                    <a href="https://github.com/m-ray-ofSunshine/actor-database" target="_blank" rel="noreferrer">
                        <p>Github Repository</p>
                    </a>
                </div>
                <div className="project">
                    <a href="https://arcane-castle-03954.herokuapp.com/" target="_blank" rel="noreferrer">
                        <div className="project2"></div>
                    </a>
                    <h2>One Track Music Database</h2>
                    <p>This is a music application that allows you to search up songs and create playlists by saving songs into your own profile.</p>
                    <p>Click on image for deployed application</p>
                    <a href="https://github.com/tedheikkila/one-track" target="_blank" rel="noreferrer">
                        <p>Github Repository</p>
                    </a>
                </div>
                <div className="project">
                    <a href="https://safe-journey-56448.herokuapp.com/" target="_blank" rel="noreferrer">
                        <div className="project3"></div>
                    </a>
                    <h2>Smiley Recruiter</h2>
                    <p>THis is an application that allows a user to search for available jobs at their position and create profile to save jobs that they are interested in.</p>
                    <a href="https://github.com/JChosay/group-pj3-smileyrecruiter.git" target="_blank" rel="noreferrer">
                        <p>Github Repository</p>
                    </a>
                </div>
            </section>
        </>
    )
}