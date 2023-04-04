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
        // array of strings that will be typed out
          strings: ["Full Stack Web Developer", "Front-End", "Back-End", "Developer", "Programmer"],
        // specifies whether type writer should start typing automatically 
          autoStart: true,
        // specifies whether typewriter should start over from beginning after typing all strings
          loop: true,
        //specifies the speed at which the typewriter should delete the text
          deleteSpeed: 50
        }}
      />
    </>
  );
};