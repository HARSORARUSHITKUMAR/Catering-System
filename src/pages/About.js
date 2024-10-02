import React from "react";

const About = () => {
    return (
        <div className="about-container">
            <img 
                className="about-img"
                src="images/tablesetting2.jpg"
                alt="Not Found" />
            <div className="about-content">
                <h1 className="about-h1">About Catering</h1>
                <h5 className="about-h5">Tradition since 1889</h5>
                <p className="about-first-ptag">
                    The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    We only use <span className="span-tag-about">seasonal</span> ingredients.
                </p>
                <p className="about-second-ptag">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
    );
};

export default About;
