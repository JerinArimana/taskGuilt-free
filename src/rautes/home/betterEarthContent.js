import React from "react";


const BetterEarthContent = ({ subTitle, title, changetitle, paragraph }) => {
    return (
        <>
            <div className="guilt-better-earth--content">
                <span className="subtitle">{subTitle}</span>
                <h1 className="title">{title} <span className="title-coloer">{changetitle}</span></h1>
                <p className="paragraph">{paragraph}</p>
            </div>
        </>
    );
};

export default BetterEarthContent;