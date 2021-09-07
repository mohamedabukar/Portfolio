import React from "react";
import profileImg from "./IMG_2978.JPG";

export default function ProfileImage () {
    return (
        <div className="profilepic">
            <img src={profileImg} alt ="Profile picture" height={600} width={400} />
        </div>
    )
}