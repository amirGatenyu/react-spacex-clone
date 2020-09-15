import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="inner-footer">
        <ul>
          <span className="">spacex &copy; 2020</span>
          <a href="#">twitter</a>
          <a href="#">youtube</a>
          <a href="#">instagram</a>
          <a href="#">flickr</a>
          <a href="#">linkedin</a>
          <a href="#" className="privacy">
            PRIVACY POLICY
          </a>
        </ul>
      </div>
    </div>
  );
}
