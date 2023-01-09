import React from "react";
import '../index.css';
import socialdata from "../socialdata";
import Social from "./Social";

export default function Footer() {
    const socials = socialdata.map(socialsinfo => {
        return <Social 
        key={socialsinfo.id}
        {...socialsinfo} />
    });

    return(
        <div className="footer-div">
            <h3 className="footer-header">Socials</h3>
            <div className="socials">
                {socials}
            </div>
        </div>
    )
}