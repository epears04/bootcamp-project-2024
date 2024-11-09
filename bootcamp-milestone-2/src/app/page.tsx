import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-4 pb-0 bg-custom-image bg-torq">
      <h1 className="text-2xl font-semibold text-gray-800">ABOUT ME</h1>
      <div className="flex flex-row items-center justify-center w-11/12 p-3 m-4 rounded-lg shadow-lg bg-cream">
        <div className="flex-1 w-full p-1 m-2 text-lg min-w-52">
              <p>Hello! My name is Ellie, nice to meet you</p>
              <br></br>
              <p>
                  I am a second year at Cal Poly SLO majoring in computer science
                  and passionate about <b>bridging the gap between people and technology</b>.
                  I have been fortunate enough to do so through volunteering, work, and research.
              </p>
              <br></br>
              <p>
                  In my free time I enjoy baking, watching youtube, and working out.
              </p>
          </div>
          <div>
            <img 
              className="flex-1 max-w-full max-h-[500px] rounded-lg object-cover m-2"
              src="me.JPG"
              alt="picture of me surrounded by flowers"
            />
          </div>
      </div>
    </div>
  );
}
