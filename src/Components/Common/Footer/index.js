import React from 'react';
import "./styles.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="footer">
      <h2 className="logo" onClick={() => topFunction()}>
        CryptoTrackia<span>.</span>
      </h2>
      <div className="social-links">
        <a href="https://www.facebook.com/profile.php?id=100013177326925">
          <FacebookIcon className="social-link" />
        </a>
        <a href="mailto:vidhijain3003@gmail.com">
          <EmailIcon className="social-link" />
        </a>
        <a href="https://twitter.com/Its_Vee_Jain">
          <TwitterIcon className="social-link" />
        </a>
        <a href="https://www.instagram.com/itsveejain/">
          <InstagramIcon className="social-link" />
        </a>
      </div>
    </div>
  );
}

export default Footer