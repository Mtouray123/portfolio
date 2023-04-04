import React from "react";
import "./Footer.css";

// React functional component that 
export const Footer = () => {

    return (
    <>
      <div>
          <div className="footerBox">
            <h3 className="footer">
            {/*used to add whitespace character between */}
              Made with{" "}
              <span style={{ color: `red`, background: `transparent` }}>❤</span>{" "}
              By Touray
            </h3>
          </div>
      </div>
    </>
  );
};