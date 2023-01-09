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
            <div >
                <h3>Socials</h3>
                <div  className="socials">
                    {socials}
                </div>
            </div>
            <div className="footer-sidenote">
                <p>*The projects lead to their respective github repository. This portfolio is made for recruiters and companies who know how to work with github. The projects are not deployed on the web yet.</p>
            </div>
        </div>
    )
}