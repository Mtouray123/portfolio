import React from "react";
// installation of typewriter-effect package
// displays text as it being typed out on typewriter
import Typewriter from "typewriter-effect";


export const Type = () => {
  return (
    <>
      <Typewriter
    // takes in options prop which is an object containing various config options for typewriter
        options={{
          strings: ["Full Stack Web Developer", "Front-End", "Back-End",],
        // specifies whether type writer should start typing automatically 
          autoStart: true,
        // specifies whether typewriter should start over from beginning
          loop: true,
          deleteSpeed: 50
        }}
      />
    </>
  );
};