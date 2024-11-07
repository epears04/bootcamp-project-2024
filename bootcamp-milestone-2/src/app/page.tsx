import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 bg-torq">
      <h1 className="text-2xl font-semibold p-2">ABOUT ME</h1>
      <div className="w-11/12 bg-cream shadow-lg rounded-lg p-5 my-6 flex flex-row items-center justify-center">
        <div className="flex-1 w-full pr-24 text-lg min-w-52">
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
              <img 
                className="flex-1 max-w-full max-h-[500px] rounded-lg"
                src="me.JPG"
                alt="picture of me surrounded by flowers" />
          </div>  
      </div>
    </div>
  );
}
