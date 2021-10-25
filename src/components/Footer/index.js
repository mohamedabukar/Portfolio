import React from "react";
import github from "../../images/github.jpg";
import linkd from "../../images/linkdin.jpg";
import "./style.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container text-center">
               <a href="https://github.com/mohamedabukar" target="_blank" rel="noreferrer"><img src={github} width="50px" height="50px" alt="github" /></a>
               <a href="https://www.linkedin.com/in/mohamed-h-abukar/" target="_blank" rel="noreferrer"><img src={linkd} width="50px" height="50px"alt="linkedin"/></a>
            </div>
        </footer>
    );
}
