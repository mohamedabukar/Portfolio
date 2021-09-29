import React from "react";
import actor from "../../images/actor-database.jpg";
import track from "../../images/one-track.jpg";
import smiley from "../../images/smiley-job-recruiter.jpg";
import "./main.css";

export default function Apps() {

    return (
        <>
            <section className="apps">
                <div className="project">
                    <a href="https://m-ray-ofsunshine.github.io/actor-database/" target="_blank" rel="noreferrer">
                        <img src={actor} width="320" height="270" alt="actor database" />
                    </a>
                    <h3>Actor Database</h3>
                    <a href="https://github.com/m-ray-ofSunshine/actor-database" target="_blank" rel="noreferrer">
                        <p>Github Repository</p>
                    </a>
                </div>
                <div className="project">
                    <a href="https://arcane-castle-03954.herokuapp.com/" target="_blank" rel="noreferrer">
                        <img src={track} width="320" height="270" alt="one track" />
                    </a>
                    <h3>One Track Music</h3>
                    <a href="https://github.com/tedheikkila/one-track" target="_blank" rel="noreferrer">
                        <p>Github Repository</p>
                    </a>
                </div>
                <div className="project">
                    <a href="https://safe-journey-56448.herokuapp.com/" target="_blank" rel="noreferrer">
                        <img src={smiley} width="320" height="270" alt="smiley" />
                    </a>
                    <h3>Smiley Recruiter</h3>
                    <a href="https://github.com/JChosay/group-pj3-smileyrecruiter.git" target="_blank" rel="noreferrer">
                        <p>Github Repository</p>
                    </a>
                </div>
            </section>
        </>
    )
}