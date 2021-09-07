import React from "react";
import { useState } from 'react';
import BioPage from "./BioPage";
import Apps from "./Apps";
import Contact from "./Contact";
import NavBar from "./Nav";
import Resume from "./Resume";

export default function Body(){
    const [currentPage, setCurrentPage] = useState("BioPage");

    const renderPage = () => {
        if (currentPage === "BioPage") {
            return <BioPage />;
        }
        if (currentPage === "Apps") {
            return <Apps />
        }
        if (currentPage === "Contact") {
            return <Contact />
        }
        if (currentPage === "Resume") {
            return <Resume />
        }

        return <BioPage />
    }
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <>
            <div className="container-fluid w-100 p-0">
                <NavBar
                currentPage={currentPage}
                handlePageChange={handlePageChange}
                />
                {renderPage()}
            </div>
        </>
    )
}