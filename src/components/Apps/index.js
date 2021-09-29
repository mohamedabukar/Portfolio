import React, { useState } from "react";
import Project from "../Project";
import "./main.css";

export default function Apps() {

    const [projects] = useState([
        {
            name: 'Actor Database',
            description: 'Database for information on Actors movies',
            link: "https://mohamedabukar.github.io/actor-database/",
            repo: "https://github.com/mohamedabukar/actor-database"
        },
        {
            name: 'One Track Music Database',
            description: 'Application used for personalizing music playlists',
            link: "https://arcane-castle-03954.herokuapp.com/",
            repo: "https://github.com/mohamedabukar/one-track"
        },
        {
            name: 'Smiley Job Recruiter',
            description: 'Website for users looking for a job',
            link: "https://safe-journey-56448.herokuapp.com/",
            repo: "https://github.com/mohamedabukar/group-pj3-smileyrecruiter"
        }
    ]);
    return (
        <div>
            <div className="flex-row">
                {projects.map((project, idx) => (
                    <Project
                        project={project}
                        key={"project" + idx}
                    />
                ))}
            </div>
        </div>
    )
}