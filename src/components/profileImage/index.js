import React from "react";
import profileImg from "./IMG_2978.JPG";

export default function ProfileImage () {
    return (
        <div className="profilepic">
            <img src={profileImg} alt ="Profile" height={450} width={350}/>
        </div>
    )
}