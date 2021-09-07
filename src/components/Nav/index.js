import React from "react";
import "./style.css";


export default function NavBar({ currentPage, handlePageChange }) {
    return (
        <header className="header">
            <h1 className="name-header">Mohamed Abukar</h1>

            <nav>
                <ul className="nav nav-list justify-content-end">
                    <li className="nav-item">
                        <a href="#bioPage"
                            onClick={() => handlePageChange("BioPage")}
                            className={currentPage === "BioPage" ? 'nav-link disabled' : 'nav-link'}>
                            About Me
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#apps"
                            onClick={() => handlePageChange("Apps")}
                            className={currentPage === "Apps" ? 'nav-link disabled' : 'nav-link'}>
                            Apps
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#contact"
                        onClick={() => handlePageChange("Contact")}
                        className={currentPage === "Contact" ? 'nav-link disabled' : 'nav-link'}>
                        Contact
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#resume"
                        onClick={() => handlePageChange("Resume")}
                        className={currentPage === "Resume" ? 'nav-link disabled' : 'nav-link'}>
                        Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>


    )
}