import React from "react";

export default function Home() {
  return (
    <div className="about-container">
      <h1 className="index-title">ABOUT ME</h1>
       <div className="about-text">
            <p>Hello! My name is Ellie, nice to meet you</p>
            <p>
                I am a second year at Cal Poly SLO majoring in computer science
                and passionate about <b>bridging the gap between people and technology</b>.
                I have been fortunate enough to do so through volunteering, work, and research.
            </p>
            <p>
                In my free time I enjoy baking, watching youtube, and working out.
            </p>
        </div>
        <div className="about-image">
            <img src="me.JPG" alt="picture of me surrounded by flowers" />
        </div>  
    </div>
  );
}
