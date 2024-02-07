import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <footer>
        <div className="main-container">
          <div class="row" >
            <div className="sub-container1" >
              <h5>Subscribe to Aesop Communications</h5>
              <hr style={{ color: "white" }} />
              <input
                placeholder="Email Address"
                style={{
                  backgroundColor: "black",
                  width: "100%",
                  border: "1px solid #ccc",
                  padding: "10px",
                }}
              />
              <label>
                <input
                  type="checkbox"
                  style={{ backgroundColor: "black", padding: "10px" }}
                />
                Subscribe to receive communication from Aesop. By subscribing,
                you confirm you need and understand our privacy policy.
              </label>
            </div>
            <div classNmae="sub-container2" >
              <h5>Orders and Support</h5>
              <hr style={{ color: "white" }} />
              <p>Contact us</p>
              <p>FAQs</p>
              <p>Returns</p>
              <p>Shipping</p>
              <p>Order History</p>
              <p>Terms and Conditions</p>
            </div>
            <div classNmae="sub-container2" >
              <h5>Services</h5>
              <hr style={{ color: "white" }} />
              <p>Live Assistance</p>
              <p>Corporate Gifts</p>
              <p>Facial Appointments</p>
              <p>Click and Collect</p>
              <p>Video Consultation</p>
            </div>
            <div classNmae="sub-container2">
              <h5>Location Preferences</h5>
              <hr style={{ color: "white" }} />
              <p>Shipping</p>
              <p>Hong Kong SAR,China</p>
              <p>Languages</p>
              <p>English</p>
              <p>Hindi</p>
            </div>
          </div>
        </div>
        {/* <div style={{ width: "100%", color: "white", paddingTop: "30px" }}>
          <div class="row">
            <div style={{width:"40%", padding: "20px" }}>
              <h5>Sustainability</h5>
              <hr style={{ color: "white" }} />
              <p>
                All Aesop products are vegan, and we do not test our
                formulations or ingredients on animals. We are Leaping Bunny
                approved and a Certified B Corporation. Learn more
              </p>
            </div>
            <div style={{ width:"20%",padding: "20px" }}>
              <h5>About</h5>
              <hr style={{ color: "white" }} />
              <p>Our Story</p>
              <p>Foundation</p>
              <p>Carrers</p>
              <p>Privacy Policy</p>
              <p>Accessibility</p>
              <p>Cookie Policy</p>
            </div>
            <div style={{width:"20%",  padding: "20px" }} >
              <h5>Social Media</h5>
              <hr style={{ color: "white" }} />
              <p>Instagram</p>
              <p>Twitter</p>
              <p>LinkedIn</p>
              <p>WeChat</p>
              <p>Weibo</p>
            </div>
          </div>
        </div> */}
      </footer>
    </div>
  );
};

export default Footer;


// import React from 'react';
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <div className="footer">
//         <div className="sb_footer section_padding">
//             <div className="sb_footer-links">
//                 <div className="sb_footer-links_div">
//                     <h4>For Business</h4>
//                     <a href="/employer"><p>Employer</p></a>
//                     <a href="/employer"><p>Employer</p></a>
//                     <a href="/employer"><p>Employer</p></a>
//                 </div>
//                 <div className="sb_footer-links_div">
//                     <h4>Resources</h4>
//                     <a href="/resource">
//                         <p>Resource Center</p>
//                     </a>
//                     <a href="/resource">
//                         <p>Resource Center</p>
//                     </a>
//                     <a href="/resource">
//                         <p>Resource Center</p>
//                     </a>
//                 </div>
//                 <div className="sb_footer-links_div">
//                     <h4>Resources</h4>
//                     <a href="/resource">
//                         <p>Resource Center</p>
//                     </a>
//                     <a href="/resource">
//                         <p>Resource Center</p>
//                     </a>
//                     <a href="/resource">
//                         <p>Resource Center</p>
//                     </a>
//                 </div>
//                 <div className="sb_footer-links_div">
//                     <h4>Resources</h4>
//                     <a href="/resource">
//                         <p>Resource Center</p>
//                     </a>
//                     <a href="/resource">
//                         <p>Resource Center</p>
//                     </a>
//                     <a href="/resource">
//                         <p>Resource Center</p>
//                     </a>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Footer