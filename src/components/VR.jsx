import React from "react";
import curiousity from "../images/desktop/image-interactive.jpg";
export default function VR() {
  return (
    <div className="vr">
      <img src={curiousity} alt="curiousity" />
      <div className="vr_details">
        <div className="vr_detail">
          <h4>The leader in interactive VR</h4>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </div>
  );
}
